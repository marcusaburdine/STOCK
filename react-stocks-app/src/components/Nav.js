import { Link } from "react-router-dom";


export default function Nav(){
    return (
        <nav className="nav">
      <Link to="/">
        <div>Home</div>
      </Link>
     
      <Link to="/about">
        <div>About</div>
      </Link>
    </nav>
    )
}