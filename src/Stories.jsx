import Story from "./Story"
export default function Stories(){
    const array = [
        <>
        <Story imagem ="../assets/img/9gag.svg" />
        <Story imagem ="../assets/img/barked.svg"/>
        <Story imagem ="../assets/img/nathanwpylestrangeplanet.svg"/>
        <Story imagem ="../assets/img/wawawicomics.svg"/>
        <Story imagem ="../assets/img/respondeai.svg"/>
        <Story imagem ="../assets/img/filomoderna.svg"/>
        <Story imagem ="../assets/img/meowed.svg"/>
        </>
    ]
    const myStory = array.map(item => <>{item}</>)
    return (
        <div className="stories story">

            {myStory}    
    
        </div>    
    )
}

