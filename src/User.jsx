import { useState } from "react";
export default function User(){

  let [usuario, setusuario] = useState('catanacomics');
  let [foto, setfoto] = useState('../assets/img/catanacomics.svg')
  function AlterarUsuario(){
    
    let novoNome = prompt("Qual nome deseja?")
    while(novoNome ==="" || novoNome === undefined || novoNome === null){
      novoNome = prompt("Qual nome deseja?")
      setusuario(novoNome)
    }
    setusuario(novoNome);
  }

  function AlteraFoto(){
    let novaFoto = prompt("Qual url da foto?")
    while(novaFoto ==="" || novaFoto === undefined || novaFoto === null){
      novaFoto = prompt("Qual o url da foto?")
      setfoto(novaFoto)
    }
    setfoto(novaFoto);
  }
  
    return(
        <>
        <img data-test="profile-image" onClick={()=>AlteraFoto()} src={foto} alt=""></img>
        <p className="texto">
          <strong data-test="name" >{usuario}</strong>
        </p>
        <ion-icon data-test="edit-name" onClick={()=>AlterarUsuario()} name="pencil-outline"></ion-icon>
        </>
    )
}
