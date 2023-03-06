import Link from "next/link";
import NavSearch from "./NavSearch";

const NavBar = () => {
    return (
        <div>
          <>
      {/* Navbar Start */}
      <nav className="navbar navbar-expand-lg bg-white navbar-light shadow-sm px-5 py-3 py-lg-0">
       <Link href="/" className="navbar-brand p-0">
          <h1 className="m-0 text-primary">
            <i className="fa fa-tooth me-2" />
            MEDIKART
          </h1>
       </Link> 
        <button
          className="navbar-toggler mt-3"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav ms-auto py-0">
           <Link href="/" className="nav-item nav-link active">
              Home
           </Link> 
            <div className="nav-item dropdown">
              <Link
                href="#"
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                Department
             </Link> 
              <div className="dropdown-menu m-0">
               <Link href="department.html" className="dropdown-item">
                  Cardilogists Depertment
               </Link> 
                <hr />
               <Link href="depertment-2.html" className="dropdown-item">
                  Orthopaedics Depertment
               </Link> 
                <hr />
               <Link href="depertment-3.html" className="dropdown-item">
                  Gastroenlogy Depertment
               </Link> 
                <hr />
               <Link href="depertment-4.html" className="dropdown-item">
                  Neuroscien Depertment
               </Link> 
                <hr />
               <Link href="depertment-5.html" className="dropdown-item">
                  Spine Depertment
               </Link> 
                <hr />
               <Link href="depertment-6.html" className="dropdown-item">
                  Cancer Depertment
               </Link> 
                <hr />
               <Link href="depertment-3.html" className="dropdown-item">
                  Colorectal Depertment
               </Link> 
                <hr />
               <Link href="depertment-4.html" className="dropdown-item">
                  Bariatric Depertment
               </Link> 
              </div>
            </div>
           <Link href="/about" className="nav-item nav-link">
              About
           </Link> 
           <Link href="doctors" className="nav-item nav-link">
              Our Doctors
           </Link> 
           <Link href="/service" className="nav-item nav-link">
              Services
           </Link> 
           <Link href="/mobileDiagonistic" className="nav-item nav-link">
              Mobile Diagonistic
           </Link> 
           <Link href="/contact" className="nav-item nav-link">
              Contact
           </Link> 
          </div>
          <button
            type="button"
            className="btn text-dark"
            data-bs-toggle="modal"
            data-bs-target="#searchModal"
          >
            <i className="fa fa-search" />
          </button>
          <Link
            href="ambulance_service.html"
            className="btn btn-primary py-2 px-4 ms-3"
          >
            Ambulance
         </Link> 
        </div>
      </nav>
      {/* Navbar End */}

      {/* Full Screen Search Start */}
          <NavSearch />
      {/* Full Screen Search End */}
    </>
        </div>
    );
}

export default NavBar;