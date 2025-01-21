#!/bin/bash

docker-compose -f ./todo-ui/docker-compose.yml down
docker-compose -f ./todo-api/docker-compose.yml down
