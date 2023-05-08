import { useState } from "react";
export default function Postagem(props){
    let [salvando, setsalvando] = useState('bookmark-outline')
    let marcado = '';
    let minhaCurtida = '';
    let [curtidas, setcurtidas] = useState('heart-outline')
    let [numero, setnumero] = useState(props.nCurtida);
    let numeroInt = parseInt(numero);
    let [cont, setcont] = useState('0');
    let [cor,setcor] = useState('');

    function curtidaFoto(){
        if(cont=== '0'){
            minhaCurtida = 'heart'
            setcurtidas(minhaCurtida)
            numeroInt ++;
            let contador ='1'
            setcont(contador);
            setnumero(numeroInt)
            setcor("like");
           
        }
    }

    function curtida(foto){
        
        if(curtidas === 'heart-outline'){
            
            minhaCurtida = 'heart'
            setcurtidas(minhaCurtida)
            numeroInt ++;
            setnumero(numeroInt)
            setcor("like");
            cont++
            
            
            
        }else if(curtidas !== 'heart-outline'){
            
            minhaCurtida ='heart-outline'
            setcurtidas(minhaCurtida);
            numeroInt--;
            setnumero(numeroInt);
            setcor("");
            
        }

        

    }
    

    function salvaPost(){
        if(salvando === 'bookmark-outline'){
            marcado = 'bookmark'
            setsalvando(marcado)
        }else{
            marcado ='bookmark-outline'
            setsalvando(marcado);
        }
        
    }
    
    return (
        <div data-test="post">
            <div className="topo">
                    <img src={props.imagem} alt="" />
                    <ion-icon name="ellipsis-horizontal-outline"></ion-icon>
            </div>
                <div className="conteudo">
                    <img data-test="post-image" onClick={()=>curtidaFoto()} src={props.imagem2} alt=""/>
                </div>
                <div className="fundo">
                    <div className="acoes">
                        <div className={cor}>
                            <ion-icon  data-test="like-post" onClick={()=>curtida()} name={curtidas}></ion-icon>
                            <ion-icon name="chatbubble-outline"></ion-icon>
                            <ion-icon name="paper-plane-outline"></ion-icon>

                        </div>

                        <div>
                            <ion-icon data-test="save-post" onClick={() => salvaPost()} name={salvando}></ion-icon>
                        </div>
                    </div>

                    <div className="curtidas">
                        <img src={props.imagem3} alt="" />
                        <p > Curtido por <strong>{props.texto}</strong> e <strong>outras</strong> <spam data-test="likes-number">{numero}</spam> pessoas</p>
                    </div>
                </div>
    </div>
    )
}