import {Link } from 'react-router-dom';
const Navbar = () => {
    return (
       <nav className='navbar'>
           <div className="thans"></div>
       <h1>the leventhals' blog </h1>
        <div>
        <Link to ='/'>Home</Link>
       <Link to ='/create' style={{color:"red"}}>New blog</Link>
      
        </div>

       </nav>

    );
   };
 
export default Navbar;