# User Properties

### Getting User Profile

`/api/profile/<int:user_id>`

##### Successful Response

`To be added`

### User Fields

| Field               | Type     | Description                |
| ------------------- | -------- | -------------------------- |
| id                  | int      | ID of user                 |
| email               | String   | email of user              |
| username            | String   | username of user           |
| password            | List     | hashed password of user    |
| posts               | List     | posts the user made        |
| communities         | List     | communities the user is in |
| full_name           | String   | full name of user          |
| profile_description | String   | user bio                   |
| date_created        | DateTime | creation time of user      |
