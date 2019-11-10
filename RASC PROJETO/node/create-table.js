
const connStr = "Server=DESKTOP-VK95FBS;Database=1433;UserId=sa;Password=123;";
const sql = require("mssql");

sql.connect(connStr)
   .then(conn => console.log("conectou!"))
   .catch(err => console.log("erro! " + err));