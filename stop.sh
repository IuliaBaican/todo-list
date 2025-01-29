#!/bin/bash

docker-compose -f ./todo-ui/docker-compose.yaml down
docker-compose -f ./todo-api/docker-compose.yaml down
