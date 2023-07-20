//importar express
import express from "express";
//importar hbs
import hbs from "hbs";


//variable express para el servicio
const app = express();
//setear el uso de hbs
app.set("view engine", "hbs");

//uso de carpeta public
app.use(express.static('public'));


let array_productos =[
    {nombre:"cuaderno", descripcion:"este es un articulo personalizado", precio:"1.000"},
    {nombre:"Lapices", descripcion:"este lapiz se borra con el aliento", precio:"500"}];



//ruta raíz
app.get("/",(req, res)=>{
    res.send("Hola Mundo")
});

//ruta productos
app.get("/productos",(req, res)=>{
    res.render("productos",{productos: array_productos});
});

//ruta productos
app.get("/producto/:id",(req, res)=>{
    const id = req.params.id;
    res.render("productos",{productos: [array_productos[id]]});
});

//levantando el servidor
app.listen(3000,()=>{
    console.log("Server is running on port 3000");
});