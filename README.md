## Express Sequelize REST project

POC for a simple MySQL > Sequelize > Express app that uses `sequelize-router` to auto-generate rest routes from model definitions.

You will need to pass the env var `ENV=DEVELOPMENT` or use a `.env` file. This project also uses `sequelize-cli` with the development config found in `config/config.json`.

The basic dev config is: 

```
{
  "development" : {
    "database" : "testdb",
    "username" : "user",
    "password": "123456",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
```
