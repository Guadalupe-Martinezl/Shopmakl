import React, { Component } from 'react';
import Gallery from './Components/Gallery/';
import FormLogin from './Components/Login/';
import Registro from './Components/Registro/';
import Header from './Components/Header/';
import Productos from './Components/Productos/';
import Products from './Components/Products/';
import Perfil from './Components/Profile/';


import styled,{css} from 'styled-components'

import fondo from './images/fondo.jpg';
import logo from './images/shopMak.png';
import iphone from './images/iphone.gif';
import watch from './images/watch.jpg';
import makeup from './images/makeup.jpg';

const Contain = styled.div`
  padding: 0;
  margin: 0;
  background: url(${fondo}) no-repeat ;
  background-size:  2000px 40%;
  .logo{
    width: 15%;
    height: 15%;
  }
  .card{
      display: flex;
      width: 50%;
      height: 200vh;
      padding: 4% 2%;
      box-sizing: border-box;
        transform: translate(45%, 5%);
  }
  .box{
      width: 20%;
      height: 350px;
      padding: 10px;
      margin: 10px;
      display:inline-block;
      flex: 1;
      overflow: hidden;
      box-shadow: 0 20px 30px rgba(0, 0, 0, 0.20);
      line-height: 0;
      transition: all 600ms;
  }
  .box > img{
      width: 120%;
      height: calc(100% - 10vh);
      object-fit: cover;
      transition: all 300ms;
  }
  .box > span{
      font-size: 25px;
      font-family: sans-serif;
      display: block;
      text-align: center;
      height: 10vh;
      line-height: 2.6;
  }
  .box:hover{
      flex: 50%;
  }
  .box:hover > img{
      width: 100%;
      height: 100%;
  }
`;

const Busqueda = styled.input.attrs(({ size }) => ({
  margin: size || "5em",
  padding: size || "5px"
}))`
  color:palevioletred ;
  font-size: 20px;
  border: 1px solid black;
  border-radius: 2px;
  color: black;
  width: 20%;
  max-width: 500px;
  box-sizing: border-box;
  transform: translate(100%, -100%);
`;
const Buscar = styled.button`
  background:  #000 ;
  color: #fff;
  font:100% "sans-serif";
  border-radius: 1em;
  border: 1px solid black;
  padding: 0.25em 1em;
  transform: translate(290%, -100%);
  width: 7%;
  max-width: 500px;
  box-sizing: border-box;
`;
const Sesion = styled.button`
  background:  #000 ;
  color: #fff;
  font:100% "sans-serif";
  border-radius: 1em;
  border: 1px solid black;
  padding: 0.25em 1em;
  transform: translate(250%, -100%);
  width: 12%;
  max-width: 500px;
  box-sizing: border-box;
`;

const Login = styled.button`
  background:  #000 ;
  color: #fff;
  font:100% "sans-serif";
  border-radius: 1em;
  border: 1px solid black;
  padding: 0.25em 1em;
  transform: translate(255%, -100%);
  width: 12%;
  max-width: 500px;
  box-sizing: border-box;
`;
class App extends Component {
  constructor(){
    super();
    this.state = {
      currentlocation:'',
      producto:[],
        index:'',
        nombre: '',
        marca:'',
        precio:'',
        modelo:'',
        descripcion:'',
        imagen:[]
    }
}


componentDidMount(){
    fetch('http://192.168.2.106:8000/producto/')
    .then((response) => { return response.json()})
    .then((json) => {
      console.log("Json---->", json);
      let {producto} = this.state;

      json.forEach(function(element, index) {
        var task = {
          nombre:element.Nombre_producto,
          marca:element.Marca_producto,
          precio:element.Precio_producto,
          modelo:element.Modelo_producto,
          descripcion: element.Descripcion_producto,
          imagen:element.img
         };
       producto.push(task);
              });
         this.setState({
           producto

         })
         console.log("producto-->",producto[2].nombre);


       })
       var btnContainer = document.getElementById("myBtnContainer");
       var btns = document.getElementsByClassName("btn");
       for (var i = 0; i < btns.length; i++) {
         btns[i].addEventListener("click",function(){
           var current = document.getElementsByClassName("active");
           current[0].className = current[0].className.replace(" active", "");
           this.className += " active";
         });
       }
       this.filterSelection("all")

 }

filterSelection(c) {
    var x, i;
    x = document.getElementsByClassName("column");
    if (c == "all") c = "";

    for (i = 0; i < x.length; i++) {
      this.w3RemoveClass(x[i], "show");
      if (x[i].className.indexOf(c) > -1) this.w3AddClass(x[i], "show");
    }
  }
 w3AddClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
      if (arr1.indexOf(arr2[i]) == -1) {
        element.className += " " + arr2[i];
      }
    }
  }
 w3RemoveClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
      while (arr1.indexOf(arr2[i]) > -1) {
        arr1.splice(arr1.indexOf(arr2[i]), 1);
      }
    }
    element.className = arr1.join(" ");
  }

  render() {
    var URLactual = window.location;
      console.log(URLactual.pathname);
      console.log(URLactual);
      switch (URLactual.pathname) {
      case "/Admin":
        return (
          <Contain>
        <div className="App">
         <Header/>
              <div className="App-Header" >
             <Gallery
               images={["http://lorempixel.com/400/200/technics/","http://lorempixel.com/400/200/technics/",
               "http://lorempixel.com/400/200/technics/"]}
               span={["Tecnologias","Comida","Maquillaje"]}
              />



              <Products
                index={this.state.index}
                nombre={this.state.nombre}
                marca={this.state.marca}
                precio={this.state.precio}
                modelo={this.state.modelo}
                descripcion={this.state.descripcion}
              />
   </div>
  </div>
  </Contain>

      );

        break;

      case "/Login":
        return (<FormLogin/>);
        break;

      case "/Registro":
        return (<Registro />);
        break;

      case "/Productos":
        return (<Productos />);
        break;

        case "/Perfil":
          return (<Perfil />);
          break;

          case "/Products":
            return (<Products />);
            break;


      default:
      return(<h1> Pagina no encontrada</h1>)

    }

   }
  }




export default App;
