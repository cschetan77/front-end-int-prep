const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const app = express();

app.use(cookieParser());
app.use(express.json());

// Allow evil.com to access
app.use(cors({
  origin: "http://localhost:3000",
  credentials: true
}));

app.get("/login", (req, res) => {
    res.cookie("sessionId", "abc123", {
        httpOnly: true,
        sameSite: "None",
        secure: false
    });
    res.send("Logged in, session cookie set");
});


// Protected API
app.get("/api/account", (req, res) => {
    console.log(req.cookies);
    if(req.cookies.sessionId === 'abc123') {
        res.json({ balance: 5000, user: "John Doe"});
    }
    else {
        res.json({ error: "Unauthroized"});
    }
});


// No CORS enabled by default
app.listen(4000, () => console.log("Bank Server running"));


