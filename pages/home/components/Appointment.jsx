import styles from "../home.module.css"

const Appointment = () => {
    return (
        <>
    {/* Appointment Start */}
    <div className={`container-fluid bg-primary ${styles.bgAppointment } my-5`} >
      <div className="container">
        <div className="row gx-5">
          <div className="col-lg-6 py-5">
            <div className="py-5">
              <h1 className="display-6 text-white mb-4">
                We Are A Certified and Award Winning Dental Clinic You Can Trust
              </h1>
              <p className="text-white mb-0">
                Eirmod sed tempor lorem ut dolores. Aliquyam sit sadipscing kasd
                ipsum. Dolor ea et dolore et at sea ea at dolor, justo ipsum duo
                rebum sea invidunt voluptua. Eos vero eos vero ea et dolore
                eirmod et. Dolores diam duo invidunt lorem. Elitr ut dolores
                magna sit. Sea dolore sanctus sed et. Takimata takimata sanctus
                sed.
              </p>
            </div>
          </div>
          <div className="col-lg-6 p-3">
            <div className="appointment-form h-100 d-flex flex-column justify-content-center text-center p-5 ">
              <h1 className="text-white mb-4">Make Appointment</h1>
              <form>
                <div className="row g-3">
                  <div className="col-lg-12 col-sm-12">
                    <select className="form-select bg-light border-0">
                      <option selected="">Select Doctor</option>
                      <option value={1}>Doctor 1</option>
                      <option value={2}>Doctor 2</option>
                      <option value={3}>Doctor 3</option>
                    </select>
                  </div>
                  <div className="col-lg-12 col-sm-12">
                    <input
                      type="text"
                      className="form-control bg-light border-0"
                      placeholder="Your Name"
                    />
                  </div>
                  <div className="col-lg-12 col-sm-12">
                    <input
                      type="text"
                      className="form-control bg-light border-0"
                      placeholder="Your Phone"
                    />
                  </div>
                  <div className="col-lg-12 col-sm-12">
                    <input
                      type="date"
                      className="form-control bg-light border-0"
                      placeholder="Your Phone"
                    />
                  </div>
                  <div className="col-lg-12 col-sm-12">
                    <input
                      type="text"
                      className="form-control bg-light border-0"
                      placeholder="Your TRDX No."
                    />
                  </div>
                  <div className="col-lg-12">
                    
                    <button className="btn btn-dark w-100 py-2" type="submit">
                      Make Appointment
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Appointment End */}
  </>
    );
}

export default Appointment;