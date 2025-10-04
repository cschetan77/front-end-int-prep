const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send(`
    <h2>Evil Site</h2>
    <button onclick="steal()">Try to steal account info</button>
    <script>
      function steal() {
        // SOP will block reading response
        fetch("http://localhost:4000/api/account", {
        method: "POST",
            headers: { "Content-Type": "application/json", "X-Custom": "evil" },
          credentials: "include"
        })
        .then(res => res.json())
        .then(data => console.log("Got data:", data))
        .catch(err => console.error("Blocked by SOP/CORS:", err));
      }
    </script>
  `);
});

app.listen(3000, () => console.log("Evil site running on http://localhost:3000"));
