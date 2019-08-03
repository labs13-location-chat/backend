# API Documentation

#### 1️⃣ ChatMaps (Location Chat) Backend delpoyed at [Heroku](https://labs13-localchat.herokuapp.com/) <br>

## 1️⃣ Getting started

To get the server running locally:

- Clone this repo
- **yarn install** to install all required dependencies
- **yarn server** to start the local server
- **yarn test** to start server using testing environment

### Node.js & Express

🚫 Why did you choose this framework?

- Point One
- Point Two
- Point Three
- Point Four

## 2️⃣ Endpoints


#### Auth Routes

| Method | Endpoint           | Access Control | Description                              |
| ------ | ------------------ | -------------- | ---------------------------------------- |
| GET    | `/google`          | users          | Requests authorization of user object from Google.           |
| GET    | `/google/callback` | users          | Google redirects the user back to this application at the callback after authorization |
| GET    | `/google/redirect` | users          |    Redirects the user back to the app on successful authentication, registering user to the app database and/or logging in user.     |
| GET    | `/facebook`          | users          | Requests authorization of user object from Facebook.         |
| GET    | `/facebook/callback` | users          | Facebook redirects the user back to this application at the callback after authorization  |
| GET    | `/facebook/redirect` | users          |   Redirects the user back to the app on successful authentication, registering user to the app database and/or logging in user.|

| GET    | `/logout`          | users          | Logs out user from app.                  |

#### User Routes

| Method | Endpoint         | Access Control | Description                          |
| ------ | ---------------- | -------------- | ------------------------------------ |
| GET    | `/users`         | users          | Returns info for all users. |
| GET    | `/users/:id` | users          | Returns info for a user.      |
| PUT    | `/users/:id` | users          | Updates user info.                   |

#### Photo Upload Route

| Method | Endpoint  | Access Control | Description                 |
| ------ | --------- | -------------- | --------------------------- |
| GET    | `/upload` | users          | Upload photo to cloudinary. |

#### Chatroom Routes

| Method | Endpoint                   | Access Control | Description                          |
| ------ | -------------------------- | -------------- | ------------------------------------ |
| GET    | `/chatrooms`               | users          | Returns all chatrooms. |
| GET    | `/chatrooms/:id`           | users          | Returns info for a single chatroom. |
| POST   | `/chatrooms`               | users          | Returns created chatroom. |
| PUT    | `/chatrooms/:id`           | users          | Updates info for a chatroom. |
| DELETE | `/chatrooms/:id`           | users          | Deletes a chatroom |
| GET    | `/chatrooms/locations`     | users          | Returns info for a single user.      |
| POST   | `/chatrooms/:id/locations` | users          | Returns created chatroom coordinates.                   |

#### Message Routes

| Method | Endpoint        | Access Control | Description                          |
| ------ | --------------- | -------------- | ------------------------------------ |
| GET    | `/messages`     | users          | Returns all messages. |
| GET    | `/messages/:id` | users          | Returns info for a single user.      |
| POST   | `/messages`     | users          | Returns created messages.                   |
| PUT    | `/messages/:id` | users          | Updates message info.                   |
| DELETE | `/messages/:id` | users          | Deletes message.                   |

## 2️⃣ Data Models


#### USERS

---

```
{
  id: INTEGER
  email: STRING
  password: STRING
  first_name: STRING
  last_name: STRING
  user_type: STRING
  anonymous: BOOLEAN
  phone_num: STRING
  facebook_id: STRING
  google_id: STRING
  token: STRING
  photo: STRING
}
```

#### CHATROOMS

---

```
{
  id: INTEGER
  name: STRING
  chatroom_url: STRING
  description: TEXT
  img_url: TEXT
  user_id: INTEGER
  permanent: BOOLEAN
  chatroom_type: STRING
  longitude: FLOAT
  latitude: FLOAT
  created_at: TIMESTAMPS
  updated_at: TIMESTAMPS
}
```

#### MESSAGES

---

```
{
  id: INTEGER
  chatroom_id: INTEGER
  content: STRING
  user_id: INTEGER
  img_url: TEXT
  user_id: INTEGER
  permanent: BOOLEAN
  chatroom_type: STRING
  longitude: FLOAT
  latitude: FLOAT
  created_at: TIMESTAMPS
  updated_at: TIMESTAMPS
}
```
## 2️⃣ Actions

###Users

`find()` -> Returns all users

`findById(id)` -> Returns a user by ID

`add(user)` -> Returns the created user

`update(id, event)` -> Update a user by ID

`remove(id)` -> Delete a user by ID

<br>
###Chatrooms
`find()` -> Returns all chatrooms

`findById(id)` -> Returns a chatroom by ID

`getLocations()` -> Returns all chatrooms

`add(chatroom)` -> Returns the created chatroom

`addLocations(location)` -> Returns the created location

`addCoords(coords)` -> Returns the created coordinates

`update(id, chatroom)` -> Update a chatroom by ID

`remove(id)` -> Delete a chatroom by ID

<br>
###Messages
`find()` -> Returns all users

`findById(id)` -> Returns a message by ID

`add(message)` -> Returns the created message

`update(id, event)` -> Update a message by ID

`remove(id)` -> Delete a message by ID

## 3️⃣ Environment Variables

In order for the app to function correctly, the user must set up their own environment variables.

create a .env file that includes the following:
 
* AccessControlAllowOrigin - Set to ```localhost```. Allows access for localhost port
* BASE_URL - Set to ```localhost``` port
* DATABASE_URL - Url for PostgreSQL database
* DB_ENV - Set to value of database environment
* FB_APP_ID - App ID of project created on Facebook for Developers
* FB_APP_SECRET - App secret of project created on Facebook for Developers
* GOOGLE_CLIENT_ID - Client ID of project created on Google Developer Console
* GOOGLE_CLIENT_SECRET - Client secret of project created on Google Developer Console
* CLOUDINARY_API_NAME - Api name of account created on Cloudinary
* CLOUDINARY_API_SECRET - Api secret of account created on Cloudinary
* CLOUDINARY_API_KEY - Api key of account created on Cloudinary

## Contributing

When contributing to this repository, please first discuss the change you wish to make via issue, email, or any other method with the owners of this repository before making a change.

Please note we have a [code of conduct](./code_of_conduct.md). Please follow it in all your interactions with the project.

### Issue/Bug Request

**If you are having an issue with the existing project code, please submit a bug report under the following guidelines:**

- Check first to see if your issue has already been reported.
- Check to see if the issue has recently been fixed by attempting to reproduce the issue using the latest master branch in the repository.
- Create a live example of the problem.
- Submit a detailed bug report including your environment & browser, steps to reproduce the issue, actual and expected outcomes, where you believe the issue is originating from, and any potential solutions you have considered.

### Feature Requests

We would love to hear from you about new features which would improve this app and further the aims of our project. Please provide as much detail and information as possible to show us why you think your new feature should be implemented.

### Pull Requests

If you have developed a patch, bug fix, or new feature that would improve this app, please submit a pull request. It is best to communicate your ideas with the developers first before investing a great deal of time into a pull request to ensure that it will mesh smoothly with the project.

Remember that this project is licensed under the MIT license, and by submitting a pull request, you agree that your work will be, too.

#### Pull Request Guidelines

- Ensure any install or build dependencies are removed before the end of the layer when doing a build.
- Update the README.md with details of changes to the interface, including new plist variables, exposed ports, useful file locations and container parameters.
- Ensure that your code conforms to our existing code conventions and test coverage.
- Include the relevant issue number, if applicable.
- You may merge the Pull Request in once you have the sign-off of two other developers, or if you do not have permission to do that, you may request the second reviewer to merge it for you.

### Attribution

These contribution guidelines have been adapted from [this good-Contributing.md-template](https://gist.github.com/PurpleBooth/b24679402957c63ec426).

## Documentation

See [Frontend Documentation](https://github.com/labs13-location-chat/mobile/tree/development) for details on the frontend of our project.
Download the app in the [Google Play Store](https://play.google.com/store/apps/details?id=com.labs13localchat)

