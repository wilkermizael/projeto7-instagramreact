import Postagem from "./Postagem"
export default function Posts(){
    const arrayPostagem = [
        <>
        
        <Postagem imagem="../assets/img/meowed.svg" imagem2="../assets/img/gato-telefone.svg" imagem3="../assets/img/respondeai.svg" texto="respondeai" nCurtida = '50' />
        <Postagem imagem="../assets/img/barked.svg" imagem2="../assets/img/dog.svg" imagem3="../assets/img/adorable_animals.svg" texto="adorable_animals" nCurtida = '30'/>
        <Postagem imagem="../assets/img/barked.svg" imagem2="../assets/img/dog.svg" imagem3="../assets/img/filomoderna.svg" texto="filomoderna" nCurtida = '100'/>
        </>
    ]

    const postagem = arrayPostagem.map(item =><>{item}</>)
    return(
        <>
        {postagem}
        </>
    )
}