
function Navbar({searchTerm,setSearchTerm})
{
    return(
        <nav className='navbar'>
           
            <h3>Dream Academy</h3>
            <input type="text"
            className="search"
            placeholder="Search Continues...."
            value={searchTerm}
            onChange={(e)=>setSearchTerm(e.target.value)}
             />
            <button>Login</button>
        </nav>
    );

}
export default Navbar