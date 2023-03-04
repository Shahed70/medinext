import NavSearch from "./NavSearch";

const NavBar = () => {
    return (
        <div>
          <>
      {/* Navbar Start */}
      <nav className="navbar navbar-expand-lg bg-white navbar-light shadow-sm px-5 py-3 py-lg-0">
        <a href="index.html" className="navbar-brand p-0">
          <h1 className="m-0 text-primary">
            <i className="fa fa-tooth me-2" />
            MEDIKART
          </h1>
        </a>
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
            <a href="index.html" className="nav-item nav-link active">
              Home
            </a>
            <div className="nav-item dropdown">
              <a
                href="#"
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                Department
              </a>
              <div className="dropdown-menu m-0">
                <a href="department.html" className="dropdown-item">
                  Cardilogists Depertment
                </a>
                <hr />
                <a href="depertment-2.html" className="dropdown-item">
                  Orthopaedics Depertment
                </a>
                <hr />
                <a href="depertment-3.html" className="dropdown-item">
                  Gastroenlogy Depertment
                </a>
                <hr />
                <a href="depertment-4.html" className="dropdown-item">
                  Neuroscien Depertment
                </a>
                <hr />
                <a href="depertment-5.html" className="dropdown-item">
                  Spine Depertment
                </a>
                <hr />
                <a href="depertment-6.html" className="dropdown-item">
                  Cancer Depertment
                </a>
                <hr />
                <a href="depertment-3.html" className="dropdown-item">
                  Colorectal Depertment
                </a>
                <hr />
                <a href="depertment-4.html" className="dropdown-item">
                  Bariatric Depertment
                </a>
              </div>
            </div>
            <a href="about.html" className="nav-item nav-link">
              About
            </a>
            <a href="doctors.html" className="nav-item nav-link">
              Our Doctors
            </a>
            <a href="service.html" className="nav-item nav-link">
              Services
            </a>
            <a href="mobile_diagonistic.html" className="nav-item nav-link">
              Mobile Diagonistic
            </a>
            <a href="contact.html" className="nav-item nav-link">
              Contact
            </a>
          </div>
          <button
            type="button"
            className="btn text-dark"
            data-bs-toggle="modal"
            data-bs-target="#searchModal"
          >
            <i className="fa fa-search" />
          </button>
          <a
            href="ambulance_service.html"
            className="btn btn-primary py-2 px-4 ms-3"
          >
            Ambulance
          </a>
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