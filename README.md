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