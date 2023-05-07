import Navbar from "./Navbar";
import Stories from "./Stories";
import Posts from "./Posts";
import Sidebar from "./Sidebar";
export default function Body(){
    return(
        <>
        <div className="corpo">
        <Navbar/>
        <div className="esquerda">
            <div>
                <Stories/>
            </div>
                
            <div className="post">
              <Posts/>
            </div>
        </div>

        <div className="sidebar">
            <Sidebar/>
           
        </div>
    </div>
    </>
    )
}