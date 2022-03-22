# User Log In

`POST` /api/login

**Example POST**

```json
{
  "email": "example@gmail.com",
  "password": "testing123"
}
```

**Success Response**

```json
{
  "msg": "Logged in as example_user",
  "access_token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI3MTY0NjE3NTIwNywianRpIjoiYTk2OThkNWItOGY3Zi00ZWYyLTlhMzctN2Q2NmNhODJjZjcxIiwidHlwZSI6ImFjY2VzcyIsInN1YiI6InRlc3QALCJuYmYiOjE2NDYxNzUyMDcsImV4cCI6MTY0NjE3ODgwNywidXNlcl9pZCI6MX0.RIHEplk8ZqNrbxCovHA6FhXQUOgDF9rFvg2h_Tzkg0o",
  "refresh_token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTY0NjE3NTIwNywianRPIjoiZjAyNWZiYTQtYTFmMC00YTMzLWI3MGMtMWRhOWVmYTQ2MTM2IiwidHlwZSI6InJlZnJlc2giLCJzdWIiOiJ0ZXN0IiwibmfmIjoxNjQ2MTc1MjA3LCJleHAiOjE2NjE3MjcyMDd9.g9lt1eFsAPdJw2yixICvksScNRnAITV3nFOuQbonqEg",
  "user_id": 1
}
```
