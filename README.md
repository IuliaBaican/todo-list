The app allows to add and edit tasks and also to filter based on status, priority or date added. It also has a calendar view.



![image](https://github.com/user-attachments/assets/397b96bd-7788-4c9f-9a2d-30d16dcce6f2)
![image](https://github.com/user-attachments/assets/9b11c708-c1ee-4fee-8bef-f14fba7f2acb)
![image](https://github.com/user-attachments/assets/817c80a3-8fce-4187-90aa-50b11ae951d5)




### Prerequisites
Make sure to install `docker` and have `WSL` configured.
Open WSL and run `docker-compose -v` to validate that your instalation was successful.

### Running locally
Make sure to create `.env` files from `.env.dist` where required (check `api` and `ui`). 

```sh
./start.sh # to start containers (both ui and api)
./stop.sh # to stop containers (both ui and api)
```
- open `http://localhost` to see the ui
