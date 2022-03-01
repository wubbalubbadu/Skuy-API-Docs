# Pushing to GitHub

If new dependencies were installed, run
`pip freeze > requirements.txt`
Make sure you change the database URI back into

```python
app.config["SQLALCHEMY_DATABASE_URI"] = os.getenv("POSTGRES_URI")
```

and

```python
app.run(debug=True)
```

into

```python
app.run(debug=False)
```
