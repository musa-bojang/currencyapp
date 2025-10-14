import { Link } from "react-router";
import "../mystyles.css";



function Navbar() {

    return(
     <>
     <div class="navtop flex flex-row box-border">
     <div class="basis-1/3">SAL XCHANGES</div>
     <div class="basis-2/3">

         <nav className="navList">
               <ul>
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/graph">Graph</Link></li>
                <li><Link to="/About">About</Link></li>
                <li><Link to="/faq">FAQ</Link></li>
                <li className=" bg-blue-500 rounded-md px-8"><Link to="/">Sign In</Link></li>
                <li className=" bg-cyan-500 rounded-md px-8"><Link to="/">Register</Link></li>
               
               
            </ul>
         </nav>
        </div>
      </div>
     </>
      
    )
}   

export default Navbar;