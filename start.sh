#!/bin/bash

docker-compose -f ./todo-api/docker-compose.yml up -d
docker-compose -f ./tood-ui/docker-compose.yml up -d
