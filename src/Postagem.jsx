export default function Postagem(props){
    return (
        <>
        <div className="topo">
                <img src={props.imagem} alt="" />
                <ion-icon name="ellipsis-horizontal-outline"></ion-icon>
            </div>
            <div className="conteudo">
                <img src={props.imagem2} alt=""/>
            </div>
            <div className="fundo">
                <div className="acoes">
                    <div>
                        <ion-icon name="heart-outline"></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>

                    </div>

                    <div>
                        <ion-icon name="bookmark-outline"></ion-icon>
                    </div>
                </div>

                <div className="curtidas">
                    <img src={props.imagem3} alt="" />
                    <p> Curtido por <strong>{props.texto}</strong> e <strong>outras</strong> 50 pessoas</p>
                </div>
            </div>
    </>
    )
}