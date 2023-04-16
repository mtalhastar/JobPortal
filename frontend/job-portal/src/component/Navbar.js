import {Link} from 'react-router-dom';


const refresh=()=>{
  window.location.reload()
}
const NavBar =()=>{
    return(
 <header>
        <nav>
        <div className="nav-header"> <span className="nav-logo">Job Portal</span> </div>
        <ul className="nav-links">         
            <li><Link to="/"><span>Login</span></Link></li>
            <li><Link to="/signUp"><span>Signup</span></Link></li>
            <li ><Link to="/EvidencePage"><span>Job Application </span></Link></li>
            <li ><Link to="/GhostPage"><span>Jobs</span></Link></li>
        </ul>
         </nav>
</header>
    )
};
export default NavBar;
