# Skygoal-Assignment


## API Instructions


### IDE:

recommended IDE for development : Visual Studio Code with all your extensinos for Node.js and mySQL.

Use thunderclient to test the API end points (Postman Alternative).

run `npm install` in the terminal to get all the requred dependensies.

run `npm run dev` to start the server

### Environment Variables:

```
MONGODB_URI = 
SECRET_KEY = 

```

These file names are added to new `.gitignore`



# Completd APIs:

## Auth:
End point : `host:port\user\login`

##### POST ('\\'):

Body Structure :

```
{
"email": "reqired"
"password":"required"
}
```
<hr>

End point : `host:port\user\register`

##### POST ('\\'):

Body Structure :

```
{
"username": "required",
"email": "reqired",
"password": "required"
}
```
<hr>

End point : `host:port\user\?username = name`

##### GET ('\\'):

Query Parameters :

```
username = "required"
```
<hr>


# Skygoal-Assignment
