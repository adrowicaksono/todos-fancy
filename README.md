# todos-fancy

# rest-api

Install the dependencies and devDependencies and start the server.

```sh
$ npm install -d
$ npm start
```

| Route          | HTTP   | Description |Requirement|
|----------------|--------|-------------|-----------|
| /user        | GET    | Get all users info||
| /user        | POST   | add a single user | name, email, password |
| /auth        | POST   | login to get a token              |email, password|
| /auth/facebook| POST   | login to get a token with facebook||
| /task         | GET    | Get all tasks info                |headers:token|
| /task         | POST   | add a single task                 |headers:token, task, tag, deadline |
|/task         | DELETE | delete a single task |headers:token, query:task_id|
|/task         | PUT    | update a single task|headers:token, query:task_id, task, tag, status, deadline|

