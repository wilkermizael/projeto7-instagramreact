export default  function MySugestions(props){
    return(
        <>
        <div className="sugestao">
    
        <div className="usuario">
            <img src={props.imagem}alt=""/>
            
            <div className="texto">
                <p> {props.texto1}</p>
                <p>{props.texto2}</p>
            </div>

        </div>
        
        <spam className="seguir">Seguir</spam>

    </div>
    </>
    )
}