const express = require("express");
const app = express();

app.get("/number-info", (req, res) => {
  const mobile = req.query.mobile || "0000000000";

  const response = {
    data: [
      {
        mobile: mobile,
        name: "Kamlesh Kumar",
        fname: "Gaya Prasad",
        address: "73 main gali punjab khore delhi Delhi NORTH DELHI Delhi 110081",
        circle: "AIRTEL DELHI",
        id: "440251074060"
      },
      {
        mobile: mobile,
        name: "Kamlesh Kumar",
        fname: "Gaya Prasad",
        address: "!73!main gali!punjab khore!delhi!Delhi!NORTH DELHI!Delhi!110081",
        circle: "AIRTEL DELHI",
        id: "440251074060"
      }
    ]
  };

  res.json(response);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("API Running on port", PORT));
