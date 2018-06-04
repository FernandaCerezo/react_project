import React from 'react';
import ReactDOM from 'react-dom';
import Nivel2 from './nivel2'
import Nivel3 from './nivel3'
import Modal from 'react-modal'; //importaciones de react y dom, importaciones de nivel 2 y 3

/////////////////////////////////////Clase del login que contiene el saludo y el boton para salir
const Welcome = ({user, onSignOut})=> {
  return (
    <div className="container" >
      Bienvenido <strong>{user.username}</strong>!
      <a href="javascript:;" onClick={onSignOut}> Salir</a>
    </div>
  )
}

/////////////////////////////////////Clase del login en donde se inserta el nombre
class LoginForm extends React.Component {

  handleSignIn(e) {
    e.preventDefault()
    let username = this.refs.username.value
    // this.props.onSignIn(username, password)
    var usuario = localStorage.setItem("usuario", username);
    this.props.onSignIn(username)

  }

  render() {
    return (
      <div className="containerinicio" >
      <form onSubmit={this.handleSignIn.bind(this)}>
        <h3>Ingresa</h3>
        <input type="text" ref="username" placeholder="ingresa tu usuario" />
        <input type="submit" value="Logueo" />
      </form>
      <div>

      </div>
      </div>
    )
  }
}
////////////////////////////////Estilos del modal que se usara para el puntaje
const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};
//declaraciones para guardar el resultado de la operacion en los subniveles
var resultado=0;
var nivelmodal=0;
var usuariol='';  //aqui se guarda el usuario nuevo
var usuarioant='';  //aqui se guarda el usuario anterior cuando entra uno nuevo
var operacion1=Math.floor(Math.random()*20)+10; //valores aleatorios para el numero 1 y 2
var operacion2=Math.floor(Math.random()*20)+10;
var opera= new Array('+','-','*','/');    //arreglo de 4 valores en donde si sale 1 es suma 2 resta 3 multi y 4 division
const randomop = Math.floor(Math.random() * opera.length)+1;
console.log(randomop)
if (randomop==1) {
resultado= operacion1+operacion2;
}
if (randomop==2) {
resultado= operacion1-operacion2;
}
if (randomop==3) {
resultado= operacion1*operacion2;
}
if (randomop==4) {
resultado= (operacion1/(operacion2+10)).toFixed(2);
}
////////////////////////////////clase principal
class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      user: null,
      Title:'Nivel',
      nivell:1,
      subtitle:'Selecciona la operacion correcta del resultado',
      boton1:'+',
      boton2:'-',
      boton3:'x',
      boton4:'/',
      nivel:'siguiente Resultado',
      puntaje:0,
      modalIsOpen:false,
      usuarioant:'',
    }

        this.handleres=this.handleres.bind(this);
        this.handlesum=this.handlesum.bind(this);
        this.handlemulti=this.handlemulti.bind(this);
        this.handlediv=this.handlediv.bind(this);
        this.handlenivel=this.handlenivel.bind(this);

        this.openModal = this.openModal.bind(this);
        this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
  }
  openModal() {
    this.setState({modalIsOpen: true}); ///////metodo para abrir el modal
  }

  afterOpenModal() {
    /////////////color para el subtitulo del modal despues de abrir
    this.subtitle.style.color = '#f00';
  }

  closeModal() {
    this.setState({modalIsOpen: false});  ///////////////metodo para cerrar el modal
  }

  handleres(){  //////////////////metodo para cuando se resta
         let res=operacion1-operacion2; /////res se iguala a la resta de numero 1 y 2
         if (resultado==res) {  /////////si el resultado que es la variable global es igual a res se cambia el subtitulo a opcion correcta
           this.setState({
           subtitle:'Opcion correcta'})
////////////////////////////////////////////

         }
         if (resultado!==res) { ///////si el resultado no es igual a la variable anterior res, el subtitulo se cambia a opcion incorrecta y se resta 10 puntos
           this.setState({
           subtitle:'Opcion incorrecta'})
           this.setState({puntaje: this.state.puntaje-10})

         }
   }

   handlesum(){  //////////////////metodo para cuando se suma

          let res=operacion1+operacion2;/////res se iguala a la suma de numero 1 y 2
          if (res==resultado) {/////////si el resultado que es la variable global es igual a res se cambia el subtitulo a opcion correcta
            this.setState({
            subtitle:'Opcion correcta'})
///////////////////////////////////////////////////////

          }
          if (resultado!==res) {///////si el resultado no es igual a la variable anterior res, el subtitulo se cambia a opcion incorrecta y se resta 10 puntos
            this.setState({
            subtitle:'Opcion incorrecta'})
            this.setState({puntaje: this.state.puntaje-10})

          }
    }

    handlemulti(){ //////////////////metodo para cuando se multiplica
           let res=operacion1*operacion2;/////res se iguala a la multiplicacion de numero 1 y 2
           if (res==resultado) {/////////si el resultado que es la variable global es igual a res se cambia el subtitulo a opcion correcta
             this.setState({
             subtitle:'Opcion correcta'})
/////////////////////////////////////////////////////


           }
           if (resultado!==res) {///////si el resultado no es igual a la variable anterior res, el subtitulo se cambia a opcion incorrecta y se resta 10 puntos
             this.setState({
             subtitle:'Opcion incorrecta'})
             this.setState({puntaje: this.state.puntaje-10})

           }
     }

     handlediv(){
            let res=(operacion1/(operacion2+10)).toFixed(2);/////res se iguala a la division de numero 1 y 2
            if (res==resultado) {/////////si el resultado que es la variable global es igual a res se cambia el subtitulo a opcion correcta
              this.setState({
              subtitle:'Opcion correcta'})
/////////////////////////////////////////////////////////

            }

            if (resultado!==res) {///////si el resultado no es igual a la variable anterior res, el subtitulo se cambia a opcion incorrecta y se resta 10 puntos
              this.setState({
              subtitle:'Opcion incorrecta'})
              this.setState({puntaje: this.state.puntaje-10})

            }
      }

      handlenivel(){

            /////si el subtitulo es opcion correcta al pulsar el boton se suma un nivel y pasa al siguiente resultado
             if (this.state.subtitle=='Opcion correcta') {
               this.setState({nivell: this.state.nivell+1})
               if (this.state.nivell==5) {
                 document.getElementById("nivel1").style.display = "none";
                 document.getElementById("nivel2").style.display = "inherit";
               }
               //////////se vuelven a crear numeros aleatorios para el siguiente desafio usando el mismo metodo antes mencionado
               operacion1=Math.floor(Math.random()*20)+10
               operacion2=Math.floor(Math.random()*20)+10
               var opera= new Array('+','-','*','/');
               const randomop = Math.floor(Math.random() * opera.length)+1;
               console.log(randomop)
               if (randomop==1) {
               resultado= operacion1+operacion2;
               }
               if (randomop==2) {
               resultado= operacion1-operacion2;
               }
               if (randomop==3) {
               resultado= operacion1*operacion2;
               }
               if (randomop==4) {
               resultado= (operacion1/(operacion2+10)).toFixed(2);
               }
               this.setState({//se regresa el subtulo al valor anterior
               subtitle:'Selecciona la operacion correcta del resultado'})
               ///////se suman 10 puntos al puntaje
               this.setState({puntaje: this.state.puntaje+10})
               //se guarda el valor puntaje del state en un valor local
               localStorage.setItem("puntaje",this.state.puntaje);


             };
       }


  signIn(username) {///metodo que registra el usuario ingresado y muestra el primer nivel
    var esconderprimero2 = document.getElementById("nivel1").style.display = "inherit";
    //// el usuario ingresado es guardado a un state
    this.setState({
      user: {
        username,

      }
    })
    //////la variable global se iguala al usuario que ingreso
    usuariol=username;
    //////////si el usuario ingresado es igual al anterior se muestra de nuevo el nivel que tenia y el puntaje que tenia
if (this.state.usuarioant==usuariol) {
  localStorage.setItem("puntaje",this.state.puntaje);

  this.setState({puntaje: this.state.puntaje})

  this.setState({
    nivell:this.state.nivell,
    subtitle:'Selecciona la operacion correcta del resultado',
  });
}
///si no es igual el usuario ingresado se reinician los valores
if (this.state.usuarioant!=usuariol) {
  localStorage.setItem("puntaje",0);

  this.setState({puntaje: 0})

  this.setState({
    nivell:1,
    subtitle:'Selecciona la operacion correcta del resultado',
  });
}

  }

  signOut() {///////metodo para vaciar el usuario anterior y guardarlo en un estado nuevo
    document.getElementById("nivel1").style.display = "none";
    document.getElementById("nivel2").style.display = "none";
    document.getElementById("nivel3").style.display = "none";

    this.setState({usuarioant: this.state.user.username})

    this.setState({user: null})
  }

  render() {

    return (
      <div className="cuerpo" >
        <h1 className="container" >WebMath</h1>
        {
          (this.state.user) ?
            <Welcome
             user={this.state.user}
             onSignOut={this.signOut.bind(this)}
            />
          :
            <LoginForm
             onSignIn={this.signIn.bind(this)}
            />
        }

        <div id = "nivel1" className="container">
        <h1 className="header">{this.state.Title} {this.state.nivell}</h1>

        <p className="header__subtitle" >{this.state.subtitle}</p>
        <p id='op1'>{operacion1}</p>
        <p id='op2'>{operacion2}</p>
        <p>resultado: {resultado}</p>
        <p>Puntaje: {localStorage.getItem('puntaje')}</p>

  <div className="containerbutton">
        <button className="button--sum" onClick={this.handlesum}> {this.state.boton1}</button>
        <button className="button--rest" onClick={this.handleres}> {this.state.boton2}</button>
        <button className="button--mul" onClick={this.handlemulti}> {this.state.boton3}</button>
        <button className="button--div" onClick={this.handlediv}> {this.state.boton4}</button>
  </div>
        <br/>
        <button className="big-button" onClick={this.handlenivel} id='ocultar'> {this.state.nivel}</button>
        </div>

        <div id ="nivel2">
        <p  className="container">Puntaje anterior: </p>
        <p  className="container" id="puntajeN1">{this.state.puntaje}</p>
  <Nivel2/>
        </div>

        <div id ="nivel3">
        <p className="container">Puntaje anterior: </p>
        <p className="container" id="puntajeN2">{this.state.puntaje-10+this.state.puntaje}</p>
  <Nivel3/>



        </div>
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById("app"))
/////ocultado de objetos hasta que se les diga lo contrario llamando un display inherit que hereda la propiedad del objeto padre
var esconderprimero2 = document.getElementById("nivel1").style.display = "none";
var esconderprimero = document.getElementById("nivel2").style.display = "none";
var esconderprimero1 = document.getElementById("nivel3").style.display = "none";
var imagen1 = document.getElementById("imagen1").style.display="none"
var imagen2 = document.getElementById("imagen2").style.display="none"
var imagen3 = document.getElementById("imagen3").style.display="none"
var puntajefinal = document.getElementById("puntajeN4").style.display="inherit"
var puntajefinal = document.getElementById("puntajeN3").style.display="none"
var modal1 = document.getElementById("modal1").style.display="none"
