### Making Requests

All API endpoints that are related to the interaction between the app and the user are protected.
In order to access these endpoints, the user must include either the access token or the refresh token (depending
on the endpoint) in the request header.

**Example Header:**

```js
{
    "Authorization": `Bearer ${accessToken_or_refreshToken}`
}
```
