import { Db, WithId } from 'mongodb';
import { TodoItem } from '../models';
import { v4 as uuidv4 } from 'uuid';

type MakeItemsDbDeps = {
  makeDb: () => Promise<Db>;
  removeUnset: <TObj extends object>(obj: TObj) => Partial<TObj>;
};

type TodoItemCollection = {
  id: string;
  title: string;
  status: 'complete' | 'incomplete';
  priority: 'low' | 'medium' | 'high';
  dueDate?: string;
  createdAt: string;
};

export type ItemDTO = {
  id: string;
  title: string;
  status: 'complete' | 'incomplete';
  priority: 'low' | 'medium' | 'high';
  dueDate?: string;
  createdAt: string;
};

const mapItemDoctoItemDTO = ({
  id,
  title,
  status,
  priority,
  dueDate,
  createdAt,
}: WithId<TodoItemCollection>): ItemDTO => ({
  id,
  title,
  status,
  priority,
  dueDate,
  createdAt,
});

export const makeItemsDb = ({ makeDb, removeUnset }: MakeItemsDbDeps) => {
  const getAllTodoItems = async (): Promise<ItemDTO[]> => {
    const db = await makeDb();
    const todoItemCollection = db.collection<TodoItemCollection>('items');
    const allTodoItems = await todoItemCollection.find({}).toArray();
    return Promise.resolve(allTodoItems.map(mapItemDoctoItemDTO));
  };

  const getItem = async (id: string): Promise<ItemDTO | null> => {
    const db = await makeDb();
    const todoItemCollection = db.collection<TodoItemCollection>('items');
    const found = await todoItemCollection.findOne({ id });
    if (!found) {
      return Promise.resolve(null);
    }
    return Promise.resolve(found);
  };

  const addItem = async (todoItem: TodoItem) => {
    if (!todoItem) {
      throw new Error('Please provide a valid todo item');
    }

    const db = await makeDb();
    const todoItemCollection = db.collection<TodoItemCollection>('items');
    const itemToAdd = {
      id: uuidv4(),
      title: todoItem.getTitle(),
      status: todoItem.getStatus(),
      priority: todoItem.getPriority(),
      dueDate: todoItem.getDueDate(),
      createdAt: new Date().toISOString(),
    };
    await todoItemCollection.insertOne(itemToAdd);
    return itemToAdd;
  };

  const updateItem = async (
    todoItem: TodoItem,
  ): Promise<TodoItemCollection | null> => {
    const db = await makeDb();
    const todoItemCollection = db.collection<TodoItemCollection>('items');
    const setItem = removeUnset({
      title: todoItem.getTitle(),
      priority: todoItem.getPriority(),
      status: todoItem.getStatus(),
      dueDate: todoItem.getDueDate(),
    });

    const updatedItem = await todoItemCollection.findOneAndUpdate(
      { id: todoItem.getId() },
      [{ $set: setItem }],
      {
        returnDocument: 'after',
      },
    );
    return updatedItem;
  };

  const deleteItem = async (id: string): Promise<TodoItemCollection | null> => {
    const db = await makeDb();
    const todoItemCollection = db.collection<TodoItemCollection>('items');
    const found = await todoItemCollection.findOne({ id });
    if (!found) {
      return Promise.resolve(null);
    }

    await todoItemCollection.deleteOne({ id: id });
    return Promise.resolve(found);
  };

  return Object.freeze({
    getAllTodoItems,
    addItem,
    updateItem,
    getItem,
    deleteItem,
  });
};
