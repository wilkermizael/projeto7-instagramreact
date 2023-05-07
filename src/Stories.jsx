export default function Stories(){
    const arrayImg =[
        <>
        <img src="../assets/img/9gag.svg" alt=""></img>
        <img src="../assets/img/barked.svg" alt=""></img>
        <img src="../assets/img/nathanwpylestrangeplanet.svg" alt=""></img>
        <img src="../assets/img/wawawicomics.svg" alt=""></img>
        <img src="../assets/img/respondeai.svg" alt=""></img>
        <img src="../assets/img/filomoderna.svg" alt=""></img>
        <img src="../assets/img/meowed.svg" alt=""></img>
        <img src="../assets/img/memeriagourmet.svg" alt=""></img>
        </>
    ]
    const stories= arrayImg.map(item =><div className="imagem"> {item}</div> )
    
    return (
       
        <div className="stories story">
            {stories}        
        </div>    
    )
}