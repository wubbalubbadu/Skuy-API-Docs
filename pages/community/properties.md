# Community Properties

| Field        | Type         | Description                        |
| ------------ | ------------ | ---------------------------------- |
| id           | int          | ID of comment                      |
| owner_id     | int          | ID of owner                        |
| title        | String       | community group name               |
| posts        | relationship | posts that belong to the community |
| date_created | DateTime     | creation time of community         |
