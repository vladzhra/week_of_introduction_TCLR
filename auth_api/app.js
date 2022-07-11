const express = require('express');
const app = express();
const port = 3000;

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/api', (req, res) => {
    res.send({total: 66540});
});

app.get('/login-api', (req, res) => {
    username = req.query.username
    password = req.query.password
    console.log(username, password);
    if (username == "vlad" && password == "zaharia") {
        res.send({isAuthenticated: true, route: "secure"});
    } else
        res.send({isAuthenticated: false, route: "login-api"});
});


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
