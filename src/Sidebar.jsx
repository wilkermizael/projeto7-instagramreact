import Sugestions from './Sugestions'
import User from './User'
export default function Sidebar() {
  return (
    <>
      <div className="usuario">
        <User/>
      </div>

      <div className="sugestoes">
        <Sugestions />
      </div>
    </>
  )
}
