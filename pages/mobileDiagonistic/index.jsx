import AllPageHero from "@/components/AllPageHero";
import Image from "next/image";
import About1 from "../../public/asstes/images/about.jpg";
const about = () => {
  return (
    <>
      <AllPageHero home={"Home"} data={`Mobile Diagonistic`} />
      {/* Appointment Section Start */}
      <div className="container-fluid py-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-12">
              {/* <div class="row">
                    <div class="col-lg-12">
                        <h4 class="pt-3 pb-3" style="font-weight: bold !important;color: #6B6A75;">
                            Cardilogists Department:</h6>
                    </div>
                </div> */}
              <div className="row">
                <div className="col-lg-4">
                  <div>
                    <div
                      className="alert"
                      style={{ backgroundColor: "#EEF9FF" }}
                      role="alert"
                    >
                      <ul className="p-0">
                        <li className="">
                          <h5 className="fw-bolder mb-4">
                            {" "}
                            Mobile Diagonistic Appointment{" "}
                          </h5>
                        </li>
                        <hr className="mt-1 mb-1" />
                        <li className="d-flex justify-content-between">
                          <span> Mon - Tue : </span>
                          <div> 10.00 am - 6.00 pm </div>
                        </li>
                        <hr className="mt-1 mb-1" />
                        <li className="d-flex justify-content-between">
                          <span> Wed - Thu :</span>
                          <div> 10.00 am - 4.00 pm </div>
                        </li>
                        <hr className="mt-1 mb-1" />
                        <li className="d-flex justify-content-between">
                          <span> Friday : </span>
                          <div> 01.00 pm - 5.00 pm </div>
                        </li>
                        <hr className="mt-1 mb-1" />
                        <li className="d-flex justify-content-between">
                          <span> Saturday : </span>
                          <div> 10.00 am - 4.00 pm </div>
                        </li>
                        <hr className="mt-1 mb-1" />
                        <li className="d-flex justify-content-between">
                          <span> Sunday : </span>
                          <div> Closed </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-8">
                  <div className="appointment-form h-100 p-5 ">
                    <h1 className="text-white text-center mb-4">
                      Mobile Diagonistic Appointment
                    </h1>
                    <form>
                      <div className="row g-3">
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
                          />
                        </div>
                        <div className="col-lg-12 col-sm-12">
                          <input
                            type="time"
                            className="form-control bg-light border-0"
                          />
                        </div>
                        <div className="col-lg-12 col-sm-12">
                          <textarea
                            className="form-control bg-light border-0"
                            id="exampleFormControlTextarea1"
                            rows={3}
                            placeholder="Your Message"
                            defaultValue={""}
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
                          <button
                            className="btn btn-dark w-100 py-2"
                            type="submit"
                          >
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
        </div>
      </div>
      {/* Appointment Section End */}
    </>
  );
};

export default about;
