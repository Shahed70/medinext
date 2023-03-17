

import Link from "next/link";
import {useEffect, useState } from "react";
import NavSearch from "./NavSearch";

const NavBar = () => {
const [pageScroll, setPageScroll] = useState(false)

   useEffect(() => {
      const onScroll = () => {
        if (window.scrollY > 100) {
         setPageScroll(true)
        } else{
         setPageScroll(false)
        }
      }
      window.addEventListener('scroll', onScroll)
    }, [])
  
    return (
        <div>
          <>
      {/* Navbar Start */}
      <nav className={`navbar navbar-expand-lg bg-white navbar-light py-3 shadow-sm px-5 py-lg-0 ${pageScroll ? "fixed-nav":" "}`}>
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
               <Link href="/cardio-department" className="dropdown-item">
                  Cardilogists Depertment
               </Link> 
                <hr />
               <Link href="/cardio-department" className="dropdown-item">
                  Orthopaedics Depertment
               </Link> 
                <hr />
               <Link href="/cardio-department" className="dropdown-item">
                  Gastroenlogy Depertment
               </Link> 
                <hr />
               <Link href="/cardio-department" className="dropdown-item">
                  Neuroscien Depertment
               </Link> 
                <hr />
               <Link href="/cardio-department" className="dropdown-item">
                  Spine Depertment
               </Link> 
                <hr />
               <Link href="/cardio-department" className="dropdown-item">
                  Cancer Depertment
               </Link> 
                <hr />
               <Link href="/cardio-department" className="dropdown-item">
                  Colorectal Depertment
               </Link> 
                <hr />
               <Link href="/cardio-department" className="dropdown-item">
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
            href="/ambulance"
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