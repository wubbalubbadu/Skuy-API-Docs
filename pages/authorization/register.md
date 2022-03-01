### User Registration

`POST` /api/register

**Example POST**

```json
{
  "email": "example@gmail.com",
  "username": "example_user",
  "password": "testing123"
}
```

import Callout from 'nextra-theme-docs/callout'

<Callout emoji="🔔">
All fields must be present for a successful registration
</Callout>

**Example Response on Success**

```json
{
  "msg": "User example_user was created",
  "access_token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTYANjAzOTI1NCwianRpIjoiYjg4ZDkxZjYtNzY1ZS00NjAzLWFkZTQtODgwNThjYzNjOTY1IiwidHlwZSI6ImFjY2VzcyIsInN1YiI6ImZyYW5reGluMjAyNUB1Lm51cnRod2VzdGVybi5lZHUiLCJuYmYiOjE2NDYwMzkyNTQsImV4cCI6MTY0NjA0Mjg1NH0.fZFAdp_6ZN8B1Rc4rVjwVE8vBzQqrglbuioPwnlyMz0",
  "refresh_token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI3MTY0NjAzOTI1NCwianRpIjoiYTVkZjE3NjItZGEwNC00MzQ1LThlMGItNDNjOTk0MWM5YWZkIiwidHlwZSI6InJlZnJlc2giLCJzdWIiOiJmcmFua3hpbjIwMjVAdS5ub3J0aHdlc3Rlcm4uZWR1IiwihmJmIjoxNjQ2MDM5MjU0LCJleHAiOjE2NjE1OTEyNTR9.dVTV3VMM3k9eKsRdouTv-FJFUbWXi_4qpLcmDsD2nIg",
  "user_id": 1
}
```
