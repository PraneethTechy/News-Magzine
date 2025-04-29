import "./navbar.css"
const Navbar = ({setcategory}) => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary " data-bs-theme="dark" >
      <div className="container-fluid">
        <a className="navbar-brand" href="#"><span className="badge bg-light text-dark fs-4 ">NewsMag</span></a>
       
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">

            <li className="nav-item">
              <div className="nav-link" onClick={() => setcategory("technology")}>Technology</div>
            </li>
            <li className="nav-item">
              <div className="nav-link cursor-pointer" onClick={() => setcategory("business")}>Business</div>
            </li>
            <li className="nav-item">
              <div className="nav-link cursor-pointer" onClick={() => setcategory("health")}>Health</div>
            </li>
            <li className="nav-item">
              <div className="nav-link cursor-pointer"onClick={() => setcategory("sports")}>Sports</div>
            </li>
            <li className="nav-item">
              <div className="nav-link cursor-pointer" onClick={() => setcategory("entertainment")}>Entertainment</div>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar









