import MySugestions from "./Mysugestions"
export default function Sugestions(){
    const array =[
        <>
        <MySugestions imagem="../assets/img/bad.vibes.memes.svg" texto1="bab.vibes.memes" texto2="Segue você"/>
        <MySugestions imagem="../assets/img/chibirdart.svg" texto1="chibidart" texto2="Segue você"/>
        <MySugestions imagem="../assets/img/razoesparaacreditar.svg" texto1="razoesparaacreditar" texto2="Novo no Instagram"/>
        </>
    ]
    const sugestoes = array.map(item =><>{item}</>)
    return (
        <>
        <div className="titulo">
        <span>Sugestões para você</span>
        <spam>Ver tudo</spam>
        
    </div>
    
        {sugestoes}
        
    <div className="links">
        
        Sobre . Ajuda . Imprensa . API . Carreiras . Privacidade .
        Termos . Localizações . Contas mais relevantes . Hashtags .
        Idiomas
        
    </div>

    <div className="copyright">
        &copy; 2021 INSTAGRAM DO FACEBOOK
    </div>
</>
    )
}

