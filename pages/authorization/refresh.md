### Refreshing an Access Token

`POST` /api/token/refresh **Requires refresh token**

This route is called for the user to obtain a new access token

**Successful Response**

```json
{
  "access_token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTY0NjE3OTkyOCwianRpIjoiNDJhYWU1ZGQtZTNmMC00M2Q0LTk2OTItNzAyY2U3ZTI1OGJkIiwidHlwZSI6ImFjY2VzcyIsInN1YiI6InRlc3QiLCJuYmYiOjE2NDYxNzk5MjgsImV4cCI6MTY0NjE4MzUyOH0.CduZGZhpWciF4ON23rIzk7rFW5KEeTOuKzx_Wv7sUbg",
  "user_id": 1
}
```
