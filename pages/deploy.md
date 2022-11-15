# Deploy to Heroku

Copy your backend folder into remote branch heroku/master.
Before deploying, check if you changed the database URL back in main.js and if new dependencies are added. See more details in [**Commit**](https://skuy-docs.vercel.app/commit).

```shell
heroku login
cd backend
git add .
git commit -am 'new deploy'
git push
```