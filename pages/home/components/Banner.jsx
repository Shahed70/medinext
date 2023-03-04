const Banner = () => {
    return (
        <>
        {/* Banner Start */}
        <div className="container-fluid p-3 mt-5">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <h3 className="mb-0">WELCOME TO MEDIKART</h3>
              </div>
              <div className="d-flex justify-content-center">
                <hr style={{ width: '25%', height: 3 }} />
              </div>
            </div>
            <div className="row gx-0">
              <div className="col-lg-4 ">
                <div
                  className="bg-primary d-flex flex-column p-5"
                  style={{ height: 300 }}
                >
                  <h3 className="text-white mb-3 text-center">Opening Hours</h3>
                  <div className="d-flex justify-content-between text-white mb-3">
                    <h6 className="text-white mb-0">Mon - Fri</h6>
                    <p className="mb-0"> 8:00am - 9:00pm</p>
                  </div>
                  <div className="d-flex justify-content-between text-white mb-3">
                    <h6 className="text-white mb-0">Saturday</h6>
                    <p className="mb-0"> 8:00am - 7:00pm</p>
                  </div>
                  <div className="d-flex justify-content-between text-white mb-3">
                    <h6 className="text-white mb-0">Sunday</h6>
                    <p className="mb-0"> 8:00am - 5:00pm</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 " data-wow-delay="0.3s">
                <div
                  className="bg-dark d-flex flex-column p-5"
                  style={{ height: 300 }}
                >
                  <h3 className="text-white mb-3 text-center">Search A Doctor</h3>
                  <select
                    className="form-select bg-light border-0 mb-3"
                    style={{ height: 40 }}
                  >
                    <option selected="">Select A Service</option>
                    <option value={1}>Service 1</option>
                    <option value={2}>Service 2</option>
                    <option value={3}>Service 3</option>
                  </select>
                  <a className="btn btn-light" href="">
                    Search Doctor
                  </a>
                </div>
              </div>
              <div className="col-lg-4 " data-wow-delay="0.6s">
                <div
                  className="bg-danger d-flex flex-column p-5"
                  style={{ height: 300 }}
                >
                  <h3 className="text-white mb-3 text-center">
                    Make Appointment
                  </h3>
                  <h2 className="text-white mb-0 text-center">+012 345 6789</h2>
                  <hr />
                  <h3 className="text-white mb-3 text-center">
                    Ambulance Service
                  </h3>
                  <h2 className="text-white mb-0 text-center">+012 345 6789</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Banner Start */}
      </>
  
    );
}

export default Banner;