# User Log Out

`POST` /api/logout/access **Requires access token**

`POST` /api/logout/refresh **Requires refresh token**

**Successful Log Out**

```json
{
  "msg": "Access token has been revoked"
}
```

```json
{
  "msg": "Refresh token has been revoked"
}
```

Invalidated access and refresh tokens will be saved to the database and be added to the token blocklist

import Callout from 'nextra-theme-docs/callout'

<Callout emoji="🔔">
Both routes must be called when the user wants to log out
</Callout>
