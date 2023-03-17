import AllPageHero from "@/components/AllPageHero";
import AppoinmentForm from "@/components/AppoinmentForm";
import Image from "next/image";
import team2 from "../../public/asstes/images/team-2.jpg";
const index = () => {
  return (
    <>
      <AllPageHero home={`Home`} data={`Your doctor`} />
      {/* Doctor details */}
      <div className="container-fluid py-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-12">
              <div className="row">
                <div className="col-lg-12">
                  <h4
                    className="pt-3 pb-3"
                    style={{ fontWeight: "bold !important", color: "#6B6A75" }}
                  >
                    Cardilogists Depertment:
                  </h4>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-4 mt-3">
                  <div className="team-item">
                    <div
                      className="position-relative rounded-top"
                      style={{ zIndex: 1 }}
                    >
                      <Image
                        className="img-fluid rounded-top w-100"
                        src={team2}
                        alt=""
                      />
                      <div
                        style={{ width: 300 }}
                        className="shadow p-3 mb-5 bg-body rounded position-absolute top-100 start-50 translate-middle bg-light rounded p-1 d-flex justify-content-center"
                      >
                        <a
                          style={{ width: 100 }}
                          className="btn btn-primary btn-square mx-1"
                          href="#"
                        >
                          Book
                        </a>
                      </div>
                    </div>
                    <div>
                      <div
                        className="alert"
                        style={{ backgroundColor: "#EEF9FF", paddingTop: 50 }}
                        role="alert"
                      >
                        <ul className="p-0">
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
                </div>
                <div className="col-lg-6 mt-3">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="alert alert-success" role="alert">
                        <ul className="p-0">
                          <li className="">
                            <h4 className="fw-bolder mb-0"> Dr. John Doe </h4>
                            <div
                              className="fst-italic"
                              style={{ fontSize: 18 }}
                            >
                              {" "}
                              Implant Surgeon{" "}
                            </div>
                          </li>
                          <hr className="mt-1 mb-1" />
                          <li className="">
                            <div
                              className="fst-italic"
                              style={{ fontSize: 18, fontWeight: "bolder" }}
                            >
                              Doctors Info
                            </div>
                          </li>
                          <hr className="mt-1 mb-1" />
                          <li className="d-flex justify-content-between">
                            <span> MBBS, BCS (Health), M S (Ortho) </span>
                          </li>
                          <hr className="mt-3 mb-3" />
                          <li className="d-flex justify-content-between">
                            <span>
                              {" "}
                              A.O. Fellow (Trauma)-BASIC, Advance, Masters
                              (Bangalore)
                            </span>
                          </li>
                          <hr className="mt-3 mb-3" />
                          <li className="d-flex justify-content-between">
                            <span> A.O. Recon. Fellow (Kolkata) </span>
                          </li>
                          <hr className="mt-3 mb-3" />
                          <li className="d-flex justify-content-between">
                            <span>
                              {" "}
                              A.O.A. Fellow-Asia Pacific (Surat, Ahmedabad){" "}
                            </span>
                          </li>
                          <hr className="mt-3 mb-3" />
                          <li className="d-flex justify-content-between">
                            <span>
                              {" "}
                              Trauma, Casualty &amp; Orthopaedic Surgeon{" "}
                            </span>
                          </li>
                          <hr className="mt-3 mb-3" />
                          <li className="d-flex justify-content-between">
                            <span>
                              {" "}
                              Chittagong Medical College &amp; Hospital{" "}
                            </span>
                          </li>
                          <hr className="mt-3 mb-3" />
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <AppoinmentForm />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Doctor details */}
    </>
  );
};

export default index;
