### Endpoints for Testing

`GET` /api/users

**Successful GET Response**

```json
{
  "users": [
    {
      "email": "test",
      "password": "$pbkdf2-sha256$29000$6Z1zrjWGMKaUEoLQ.h9jLA$LsKgIEbs3FdmtCPlRsZ9bmjbXOK6AqER0FwMSQWOl3E",
      "id": 1,
      "username": "example_user",
      "posts": [
        {
          "comments": [],
          "user_id": 1,
          "content": "hello",
          "id": 1,
          "likes": 0,
          "date_created": "2022-02-28T09:54:05.704568"
        }
      ],
      "date_created": "2022-02-28T09:45:28.499399"
    },
    {
      "email": "hi",
      "password": "$pbkdf2-sha256$29000$/n.PUYoxhrD2/h.jVOr93w$HV97Tcz3PU.Sgc1UsQsY.TQUn27a1WCpJ58i5RK1vVc",
      "id": 2,
      "username": "example_user_alt",
      "posts": [
        {
          "comments": [],
          "user_id": 2,
          "content": "hiiiii",
          "id": 2,
          "likes": 1,
          "date_created": "2022-02-28T09:58:37.010794"
        }
      ],
      "date_created": "2022-02-28T09:55:17.313070"
    }
  ]
}
```

`DELETE` /api/users

**Successful DELETE Response**

```json
{
  "msg": "2 rows deleted"
}
```
