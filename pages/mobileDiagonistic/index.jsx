import AllPageHero from "@/components/AllPageHero";
import AppoinmentForm from "@/components/AppoinmentForm";

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
                 
                  <AppoinmentForm />
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
