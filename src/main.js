/*
Codificado por
              _   _   _     __________         
  /\/\   __ _| |_| |_| |__ |___ /___ /_      __
 /    \ / _` | __| __| '_ \  |_ \ |_ \ \ /\ / /
/ /\/\ \ (_| | |_| |_| | | |___) |__) \ V  V / 
\/    \/\__,_|\__|\__|_| |_|____/____/ \_/\_/  

Data de inicio: 12/04/2021
Data de finalização: WIP
*/

const app = require("express")();
const path = require("path");
const port = process.env.PORT || 3333;

const routes = require("./routes");
const connection = require("./database/connection");

app.use(require("express").static(path.join(__dirname, "frontend", "dist")));
app.use(routes);

app.listen(port, () => console.log(`Aplicativo rodando na porta ${port}..`));