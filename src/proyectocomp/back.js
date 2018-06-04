import React from 'react';
import ReactDOM from 'react-dom';
import Nivel2 from './nivel2'
import Nivel3 from './nivel3'
import Modal from 'react-modal';

/////////////////////////////////////////////////////////////////////////////////////////////////
const Welcome = ({user, onSignOut})=> {
  return (
    <div className="container" >
      Bienvenido <strong>{user.username}</strong>!
      <a href="javascript:;" onClick={onSignOut}> Salir</a>
    </div>
  )
}

class LoginForm extends React.Component {


  handleSignIn(e) {
    e.preventDefault()
    let username = this.refs.username.value
    let password = this.refs.password.value
    // this.props.onSignIn(username, password)
    var usuario = localStorage.setItem("usuario", username);
    var contrasena = localStorage.setItem("contrasena", password);
    this.props.onSignIn(username, password)



  }

  render() {
    return (
      <div className="containerinicio" >
      <form onSubmit={this.handleSignIn.bind(this)}>
        <h3>Ingresa</h3>
        <input type="text" ref="username" placeholder="ingresa tu usuario" />
        <input type="password" ref="password" placeholder="ingresa tu contrasena" />
        <input type="submit" value="Logueo" />
      </form>
      <div>

      </div>
      </div>

    )
  }

}
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

var resultado=0;
var usuariol='';
var usuarioant='';
var operacion1=Math.floor(Math.random()*20)+10;
var operacion2=Math.floor(Math.random()*20)+10;
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
      puntaje:10,
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
    this.setState({modalIsOpen: true});
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = '#f00';
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  handleres(){
         let res=operacion1-operacion2;
         if (resultado==res) {
           this.setState({
           subtitle:'Opcion correcta'})
////////////////////////////////////////////


         }
         if (resultado!==res) {
           this.setState({
           subtitle:'Opcion incorrecta'})
           this.setState({puntaje: this.state.puntaje-10})

         }

   }

   handlesum(){


          let res=operacion1+operacion2;
          if (res==resultado) {
            this.setState({
            subtitle:'Opcion correcta'})
///////////////////////////////////////////////////////


          }
          if (resultado!==res) {
            this.setState({
            subtitle:'Opcion incorrecta'})
            this.setState({puntaje: this.state.puntaje-10})

          }
    }

    handlemulti(){
           let res=operacion1*operacion2;
           if (res==resultado) {
             this.setState({
             subtitle:'Opcion correcta'})
/////////////////////////////////////////////////////


           }
           if (resultado!==res) {
             this.setState({
             subtitle:'Opcion incorrecta'})
             this.setState({puntaje: this.state.puntaje-10})

           }
     }

     handlediv(){
            let res=(operacion1/(operacion2+10)).toFixed(2);

            if (res==resultado) {
              this.setState({
              subtitle:'Opcion correcta'})
/////////////////////////////////////////////////////////

            }

            if (resultado!==res) {
              this.setState({
              subtitle:'Opcion incorrecta'})
              this.setState({puntaje: this.state.puntaje-10})

            }
      }

      handlenivel(){


             if (this.state.subtitle=='Opcion correcta') {
               this.setState({nivell: this.state.nivell+1})
               if (this.state.nivell==5) {
                 document.getElementById("nivel1").style.display = "none";
                 document.getElementById("nivel2").style.display = "inherit";
               }
               console.log("Primer puntaje de state nivel "+this.state.nivell)



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
               this.setState({
               subtitle:'Selecciona la operacion correcta del resultado'})

               this.setState({puntaje: this.state.puntaje+10})
               console.log("Puntaje de state "+this.state.puntaje)
               localStorage.setItem("puntaje",this.state.puntaje);
               console.log("Puntaje de local "+localStorage.getItem("puntaje"));
               //nivel 1 es de operaciones + - etc, nivel 2 mayor y menor nivel 3 fracciones ilustrativas

             };



       }


  signIn(username, password) {
    var esconderprimero2 = document.getElementById("nivel1").style.display = "inherit";

    this.setState({
      user: {
        username,
        password,
      }
    })
console.log(this.state.usuarioant+" usuario anterior state afuera");

    usuariol=username;
    console.log(usuariol+" variable")
console.log(username +" state")
// console.log(usuarioant + " usuarioantIN");

// console.log(username+ " username final")
if (this.state.usuarioant==usuariol) {
  localStorage.setItem("puntaje",this.state.puntaje);
  console.log(username+ " comprobacion1")

  this.setState({
    nivell:this.state.nivell,
    subtitle:'Selecciona la operacion correcta del resultado',
  });
}

if (this.state.usuarioant!=usuariol) {
  localStorage.setItem("puntaje",0);
  console.log(username+ " comprobacion2")

  this.setState({
    nivell:1,
    subtitle:'Selecciona la operacion correcta del resultado',
  });
}

  }

  signOut() {
    // clear out user from state
    document.getElementById("nivel1").style.display = "none";
    document.getElementById("nivel2").style.display = "none";
    document.getElementById("nivel3").style.display = "none";
    // if (this.state.user.username==usuariol) {
    //   localStorage.setItem("puntaje",0);
    //
    // }
    // if (this.state.user.username!=usuariol) {
    //   localStorage.setItem("puntaje",this.state.puntaje);
    //
    // }
    this.setState({usuarioant: this.state.user.username})
     console.log(this.state.usuarioant + " usuarioantOUT");

    // var usuarioant=this.state.user.username;
    // console.log(usuarioant + " usuarioantOUT");

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

        <p>{this.state.subtitle}</p>
        <p id='op1'>{operacion1}</p>
        <p id='op2'>{operacion2}</p>
        <p>resultado: {resultado}</p>
        <p>Puntaje: {localStorage.getItem('puntaje')}</p>

  <div className="containerbutton">
        <button className="buttoneleccion" onClick={this.handlesum}> {this.state.boton1}</button>
        <button className="buttoneleccion" onClick={this.handleres}> {this.state.boton2}</button>
        <button className="buttoneleccion" onClick={this.handlemulti}> {this.state.boton3}</button>
        <button className="buttoneleccion" onClick={this.handlediv}> {this.state.boton4}</button>
  </div>
        <button className="big-button" onClick={this.handlenivel} id='ocultar'> {this.state.nivel}</button>
        </div>

        <div id ="nivel2">
        <p  className="container">Puntaje anterior: </p>
        <p  className="container" id="puntajeN1">{this.state.puntaje-10}</p>
  <Nivel2/>
        </div>



        <div id ="nivel3">
        <p className="container">Puntaje anterior: </p>
        <p className="container" id="puntajeN2">{this.state.puntaje-10+this.state.puntaje-10}</p>
  <Nivel3/>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById("app"))
var esconderprimero2 = document.getElementById("nivel1").style.display = "none";
var esconderprimero = document.getElementById("nivel2").style.display = "none";
var esconderprimero1 = document.getElementById("nivel3").style.display = "none";
var imagen1 = document.getElementById("imagen1").style.display="none"
var imagen2 = document.getElementById("imagen2").style.display="none"
var imagen3 = document.getElementById("imagen3").style.display="none"
var puntajefinal = document.getElementById("puntajeN4").style.display="inherit"
var puntajefinal = document.getElementById("puntajeN3").style.display="none"
var modal1 = document.getElementById("modal1").style.display="none"
