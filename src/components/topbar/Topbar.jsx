import "./Topbar.scss"
import {Person,Mail} from "@material-ui/icons"

export default function Topbar({menuOpen, setMenuOpen}) {
     return (
          <div className={"Topbar " +(menuOpen && "active")}>
               <div className="wrapper">
                    <div className="left">
                         <a href="#intro" className="logo">ASIF</a>
                         <div className="itrmContainer">
                              <Person className="icon" />
                              <span>8301877906</span>
                         </div>
                         <div className="itemContainer">
                              <Mail className="icon" />
                              <span>asifanwar3739@gmail.com</span>
                         </div>
                    </div>
                    <div className="right">
                         <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
                              <span className="line1"></span>
                              <span className="line2"></span>
                              <span className="line3"></span>

                         </div>
                    </div>
               </div>
          </div>
     )
}
