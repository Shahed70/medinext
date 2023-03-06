import AllPageHero from "@/components/AllPageHero";
import Image from "next/image";
import team1 from "../../public/asstes/images/team-1.jpg";
import team2 from "../../public/asstes/images/team-2.jpg";
import team3 from "../../public/asstes/images/team-3.jpg";
import team4 from "../../public/asstes/images/team-4.jpg";
import team5 from "../../public/asstes/images/team-5.jpg";
const index = () => {
  return (
    <>
      <AllPageHero home={"Home"} />
      {/* Team Start */}
      <div className="container-fluid py-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-3">
              <ul
                className="nav nav-pills mb-3 d-flex flex-column"
                id="pills-tab"
                role="tablist"
              >
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link active"
                    id="pills-home-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-home"
                    type="button"
                    role="tab"
                    aria-controls="pills-home"
                    aria-selected="true"
                  >
                    Cardilogists Depertment
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="pills-profile-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-profile"
                    type="button"
                    role="tab"
                    aria-controls="pills-profile"
                    aria-selected="false"
                  >
                    Orthopaedics Depertment
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="pills-contact-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-contact"
                    type="button"
                    role="tab"
                    aria-controls="pills-contact"
                    aria-selected="false"
                  >
                    Gastroenlogy Depertment
                  </button>
                </li>
              </ul>
            </div>
            <div className="col-lg-9">
              <div className="tab-content" id="pills-tabContent">
                <div
                  className="tab-pane fade show active"
                  id="pills-home"
                  role="tabpanel"
                  aria-labelledby="pills-home-tab"
                  tabIndex={0}
                >
                  <div className="row">
                    <div className="col-lg-12">
                      <h4
                        className="pt-3 pb-3"
                        style={{
                          fontWeight: "bold !important",
                          color: "#6B6A75",
                        }}
                      >
                        Cardilogists Depertment:
                      </h4>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-6 mt-3">
                      <div className="team-item">
                        <div
                          className="position-relative rounded-top"
                          style={{ zIndex: 1 }}
                        >
                          <Image
                            className="img-fluid rounded-top w-100"
                            src={team1}
                            alt=""
                          />
                          <div
                            style={{ width: 300 }}
                            className="shadow p-3 mb-5 bg-body rounded position-absolute top-100 start-50 translate-middle bg-light rounded p-1 d-flex justify-content-center"
                          >
                            <a
                              style={{ width: 100 }}
                              className="btn btn-primary btn-square mx-1"
                              href="doctors-appointment.html"
                            >
                              Book
                            </a>
                            <a
                              style={{ width: 100 }}
                              className="btn btn-primary btn-square"
                              href="./doctors-details.html"
                            >
                              Details
                            </a>
                          </div>
                        </div>
                        <div>
                          <div
                            className="alert"
                            style={{
                              backgroundColor: "#EEF9FF",
                              paddingTop: 50,
                            }}
                            role="alert"
                          >
                            <ul className="p-0">
                              <li className="">
                                <h4 className="fw-bolder mb-0">
                                  {" "}
                                  Dr. John Doe{" "}
                                </h4>
                                <div
                                  className="fst-italic"
                                  style={{ fontSize: 18 }}
                                >
                                  {" "}
                                  Implant Surgeon{" "}
                                </div>
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
                    </div>
                    <div className="col-lg-6 mt-3">
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
                            style={{ width: 200 }}
                            className="shadow p-3 mb-5 bg-body rounded position-absolute top-100 start-50 translate-middle bg-light rounded p-1 d-flex justify-content-center"
                          >
                            <a
                              style={{ width: 100 }}
                              className="btn btn-primary btn-square"
                              href="#"
                            >
                              Book
                            </a>
                          </div>
                        </div>
                        <div>
                          <div
                            className="alert"
                            style={{
                              backgroundColor: "#EEF9FF",
                              paddingTop: 50,
                            }}
                            role="alert"
                          >
                            <ul className="p-0">
                              <li className="">
                                <h4 className="fw-bolder mb-0">
                                  {" "}
                                  Dr. John Doe{" "}
                                </h4>
                                <div
                                  className="fst-italic"
                                  style={{ fontSize: 18 }}
                                >
                                  {" "}
                                  Implant Surgeon{" "}
                                </div>
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
                    </div>
                    <div className="col-lg-6 mt-3">
                      <div className="team-item">
                        <div
                          className="position-relative rounded-top"
                          style={{ zIndex: 1 }}
                        >
                          <Image
                            className="img-fluid rounded-top w-100"
                            src={team3}
                            alt=""
                          />
                          <div
                            style={{ width: 200 }}
                            className="shadow p-3 mb-5 bg-body rounded position-absolute top-100 start-50 translate-middle bg-light rounded p-1 d-flex justify-content-center"
                          >
                            <a
                              style={{ width: 100 }}
                              className="btn btn-primary btn-square"
                              href="#"
                            >
                              Book
                            </a>
                          </div>
                        </div>
                        <div>
                          <div
                            className="alert"
                            style={{
                              backgroundColor: "#EEF9FF",
                              paddingTop: 50,
                            }}
                            role="alert"
                          >
                            <ul className="p-0">
                              <li className="">
                                <h4 className="fw-bolder mb-0">
                                  {" "}
                                  Dr. John Doe{" "}
                                </h4>
                                <div
                                  className="fst-italic"
                                  style={{ fontSize: 18 }}
                                >
                                  {" "}
                                  Implant Surgeon{" "}
                                </div>
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
                    </div>
                    <div className="col-lg-6 mt-3">
                      <div className="team-item">
                        <div
                          className="position-relative rounded-top"
                          style={{ zIndex: 1 }}
                        >
                          <Image
                            className="img-fluid rounded-top w-100"
                            src={team4}
                            alt=""
                          />
                          <div
                            style={{ width: 200 }}
                            className="shadow p-3 mb-5 bg-body rounded position-absolute top-100 start-50 translate-middle bg-light rounded p-1 d-flex justify-content-center"
                          >
                            <a
                              style={{ width: 100 }}
                              className="btn btn-primary btn-square"
                              href="#"
                            >
                              Book
                            </a>
                          </div>
                        </div>
                        <div>
                          <div
                            className="alert"
                            style={{
                              backgroundColor: "#EEF9FF",
                              paddingTop: 50,
                            }}
                            role="alert"
                          >
                            <ul className="p-0">
                              <li className="">
                                <h4 className="fw-bolder mb-0">
                                  {" "}
                                  Dr. John Doe{" "}
                                </h4>
                                <div
                                  className="fst-italic"
                                  style={{ fontSize: 18 }}
                                >
                                  {" "}
                                  Implant Surgeon{" "}
                                </div>
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
                    </div>
                    <div className="col-lg-6 mt-3">
                      <div className="team-item">
                        <div
                          className="position-relative rounded-top"
                          style={{ zIndex: 1 }}
                        >
                          <Image
                            className="img-fluid rounded-top w-100"
                            src={team5}
                            alt=""
                          />
                          <div
                            style={{ width: 200 }}
                            className="shadow p-3 mb-5 bg-body rounded position-absolute top-100 start-50 translate-middle bg-light rounded p-1 d-flex justify-content-center"
                          >
                            <a
                              style={{ width: 100 }}
                              className="btn btn-primary btn-square"
                              href="#"
                            >
                              Book
                            </a>
                          </div>
                        </div>
                        <div>
                          <div
                            className="alert"
                            style={{
                              backgroundColor: "#EEF9FF",
                              paddingTop: 50,
                            }}
                            role="alert"
                          >
                            <ul className="p-0">
                              <li className="">
                                <h4 className="fw-bolder mb-0">
                                  {" "}
                                  Dr. John Doe{" "}
                                </h4>
                                <div
                                  className="fst-italic"
                                  style={{ fontSize: 18 }}
                                >
                                  {" "}
                                  Implant Surgeon{" "}
                                </div>
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
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="pills-profile"
                  role="tabpanel"
                  aria-labelledby="pills-profile-tab"
                  tabIndex={0}
                >
                  <div className="row">
                    <div className="col-lg-12">
                      <h4
                        className="pt-3 pb-3"
                        style={{
                          fontWeight: "bold !important",
                          color: "#6B6A75",
                        }}
                      >
                        ORTHOPAEDICS DEPERTMENT
                      </h4>
                    </div>
                    <div className="row">
                      <div className="col-lg-6 mt-3">
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
                              style={{ width: 200 }}
                              className="shadow p-3 mb-5 bg-body rounded position-absolute top-100 start-50 translate-middle bg-light rounded p-1 d-flex justify-content-center"
                            >
                              <a
                                style={{ width: 100 }}
                                className="btn btn-primary btn-square"
                                href="#"
                              >
                                Book
                              </a>
                            </div>
                          </div>
                          <div>
                            <div
                              className="alert"
                              style={{
                                backgroundColor: "#EEF9FF",
                                paddingTop: 50,
                              }}
                              role="alert"
                            >
                              <ul className="p-0">
                                <li className="">
                                  <h4 className="fw-bolder mb-0">
                                    {" "}
                                    Dr. John Doe{" "}
                                  </h4>
                                  <div
                                    className="fst-italic"
                                    style={{ fontSize: 18 }}
                                  >
                                    {" "}
                                    Implant Surgeon{" "}
                                  </div>
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
                      </div>
                      <div className="col-lg-6 mt-3">
                        <div className="team-item">
                          <div
                            className="position-relative rounded-top"
                            style={{ zIndex: 1 }}
                          >
                            <Image
                              className="img-fluid rounded-top w-100"
                              src={team1}
                              alt=""
                            />
                            <div
                              style={{ width: 200 }}
                              className="shadow p-3 mb-5 bg-body rounded position-absolute top-100 start-50 translate-middle bg-light rounded p-1 d-flex justify-content-center"
                            >
                              <a
                                style={{ width: 100 }}
                                className="btn btn-primary btn-square"
                                href="#"
                              >
                                Book
                              </a>
                            </div>
                          </div>
                          <div>
                            <div
                              className="alert"
                              style={{
                                backgroundColor: "#EEF9FF",
                                paddingTop: 50,
                              }}
                              role="alert"
                            >
                              <ul className="p-0">
                                <li className="">
                                  <h4 className="fw-bolder mb-0">
                                    {" "}
                                    Dr. John Doe{" "}
                                  </h4>
                                  <div
                                    className="fst-italic"
                                    style={{ fontSize: 18 }}
                                  >
                                    {" "}
                                    Implant Surgeon{" "}
                                  </div>
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
                      </div>
                      <div className="col-lg-6 mt-3">
                        <div className="team-item">
                          <div
                            className="position-relative rounded-top"
                            style={{ zIndex: 1 }}
                          >
                            <Image
                              className="img-fluid rounded-top w-100"
                              src={team3}
                              alt=""
                            />
                            <div
                              style={{ width: 200 }}
                              className="shadow p-3 mb-5 bg-body rounded position-absolute top-100 start-50 translate-middle bg-light rounded p-1 d-flex justify-content-center"
                            >
                              <a
                                style={{ width: 100 }}
                                className="btn btn-primary btn-square"
                                href="#"
                              >
                                Book
                              </a>
                            </div>
                          </div>
                          <div>
                            <div
                              className="alert"
                              style={{
                                backgroundColor: "#EEF9FF",
                                paddingTop: 50,
                              }}
                              role="alert"
                            >
                              <ul className="p-0">
                                <li className="">
                                  <h4 className="fw-bolder mb-0">
                                    {" "}
                                    Dr. John Doe{" "}
                                  </h4>
                                  <div
                                    className="fst-italic"
                                    style={{ fontSize: 18 }}
                                  >
                                    {" "}
                                    Implant Surgeon{" "}
                                  </div>
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
                      </div>
                      <div className="col-lg-6 mt-3">
                        <div className="team-item">
                          <div
                            className="position-relative rounded-top"
                            style={{ zIndex: 1 }}
                          >
                            <Image
                              className="img-fluid rounded-top w-100"
                              src={team4}
                              alt=""
                            />
                            <div
                              style={{ width: 200 }}
                              className="shadow p-3 mb-5 bg-body rounded position-absolute top-100 start-50 translate-middle bg-light rounded p-1 d-flex justify-content-center"
                            >
                              <a
                                style={{ width: 100 }}
                                className="btn btn-primary btn-square"
                                href="#"
                              >
                                Book
                              </a>
                            </div>
                          </div>
                          <div>
                            <div
                              className="alert"
                              style={{
                                backgroundColor: "#EEF9FF",
                                paddingTop: 50,
                              }}
                              role="alert"
                            >
                              <ul className="p-0">
                                <li className="">
                                  <h4 className="fw-bolder mb-0">
                                    {" "}
                                    Dr. John Doe{" "}
                                  </h4>
                                  <div
                                    className="fst-italic"
                                    style={{ fontSize: 18 }}
                                  >
                                    {" "}
                                    Implant Surgeon{" "}
                                  </div>
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
                      </div>
                      <div className="col-lg-6 mt-3">
                        <div className="team-item">
                          <div
                            className="position-relative rounded-top"
                            style={{ zIndex: 1 }}
                          >
                            <Image
                              className="img-fluid rounded-top w-100"
                              src={team5}
                              alt=""
                            />
                            <div
                              style={{ width: 200 }}
                              className="shadow p-3 mb-5 bg-body rounded position-absolute top-100 start-50 translate-middle bg-light rounded p-1 d-flex justify-content-center"
                            >
                              <a
                                style={{ width: 100 }}
                                className="btn btn-primary btn-square"
                                href="#"
                              >
                                Book
                              </a>
                            </div>
                          </div>
                          <div>
                            <div
                              className="alert"
                              style={{
                                backgroundColor: "#EEF9FF",
                                paddingTop: 50,
                              }}
                              role="alert"
                            >
                              <ul className="p-0">
                                <li className="">
                                  <h4 className="fw-bolder mb-0">
                                    {" "}
                                    Dr. John Doe{" "}
                                  </h4>
                                  <div
                                    className="fst-italic"
                                    style={{ fontSize: 18 }}
                                  >
                                    {" "}
                                    Implant Surgeon{" "}
                                  </div>
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
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="pills-contact"
                  role="tabpanel"
                  aria-labelledby="pills-contact-tab"
                  tabIndex={0}
                >
                  <div className="row">
                    <div className="col-lg-12">
                      <h4
                        className="pt-3 pb-3"
                        style={{
                          fontWeight: "bold !important",
                          color: "#6B6A75",
                        }}
                      >
                        Gastroenlogy Depertment
                      </h4>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-6 mt-3">
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
                            style={{ width: 200 }}
                            className="shadow p-3 mb-5 bg-body rounded position-absolute top-100 start-50 translate-middle bg-light rounded p-1 d-flex justify-content-center"
                          >
                            <a
                              style={{ width: 100 }}
                              className="btn btn-primary btn-square"
                              href="#"
                            >
                              Book
                            </a>
                          </div>
                        </div>
                        <div>
                          <div
                            className="alert"
                            style={{
                              backgroundColor: "#EEF9FF",
                              paddingTop: 50,
                            }}
                            role="alert"
                          >
                            <ul className="p-0">
                              <li className="">
                                <h4 className="fw-bolder mb-0">
                                  {" "}
                                  Dr. John Doe{" "}
                                </h4>
                                <div
                                  className="fst-italic"
                                  style={{ fontSize: 18 }}
                                >
                                  {" "}
                                  Implant Surgeon{" "}
                                </div>
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
                    </div>
                    <div className="col-lg-6 mt-3">
                      <div className="team-item">
                        <div
                          className="position-relative rounded-top"
                          style={{ zIndex: 1 }}
                        >
                          <Image
                            className="img-fluid rounded-top w-100"
                            src={team1}
                            alt=""
                          />
                          <div
                            style={{ width: 200 }}
                            className="shadow p-3 mb-5 bg-body rounded position-absolute top-100 start-50 translate-middle bg-light rounded p-1 d-flex justify-content-center"
                          >
                            <a
                              style={{ width: 100 }}
                              className="btn btn-primary btn-square"
                              href="#"
                            >
                              Book
                            </a>
                          </div>
                        </div>
                        <div>
                          <div
                            className="alert"
                            style={{
                              backgroundColor: "#EEF9FF",
                              paddingTop: 50,
                            }}
                            role="alert"
                          >
                            <ul className="p-0">
                              <li className="">
                                <h4 className="fw-bolder mb-0">
                                  {" "}
                                  Dr. John Doe{" "}
                                </h4>
                                <div
                                  className="fst-italic"
                                  style={{ fontSize: 18 }}
                                >
                                  {" "}
                                  Implant Surgeon{" "}
                                </div>
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
                    </div>
                    <div className="col-lg-6 mt-3">
                      <div className="team-item">
                        <div
                          className="position-relative rounded-top"
                          style={{ zIndex: 1 }}
                        >
                          <Image
                            className="img-fluid rounded-top w-100"
                            src={team3}
                            alt=""
                          />
                          <div
                            style={{ width: 200 }}
                            className="shadow p-3 mb-5 bg-body rounded position-absolute top-100 start-50 translate-middle bg-light rounded p-1 d-flex justify-content-center"
                          >
                            <a
                              style={{ width: 100 }}
                              className="btn btn-primary btn-square"
                              href="#"
                            >
                              Book
                            </a>
                          </div>
                        </div>
                        <div>
                          <div
                            className="alert"
                            style={{
                              backgroundColor: "#EEF9FF",
                              paddingTop: 50,
                            }}
                            role="alert"
                          >
                            <ul className="p-0">
                              <li className="">
                                <h4 className="fw-bolder mb-0">
                                  {" "}
                                  Dr. John Doe{" "}
                                </h4>
                                <div
                                  className="fst-italic"
                                  style={{ fontSize: 18 }}
                                >
                                  {" "}
                                  Implant Surgeon{" "}
                                </div>
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
                    </div>
                    <div className="col-lg-6 mt-3">
                      <div className="team-item">
                        <div
                          className="position-relative rounded-top"
                          style={{ zIndex: 1 }}
                        >
                          <Image
                            className="img-fluid rounded-top w-100"
                            src={team4}
                            alt=""
                          />
                          <div
                            style={{ width: 200 }}
                            className="shadow p-3 mb-5 bg-body rounded position-absolute top-100 start-50 translate-middle bg-light rounded p-1 d-flex justify-content-center"
                          >
                            <a
                              style={{ width: 100 }}
                              className="btn btn-primary btn-square"
                              href="#"
                            >
                              Book
                            </a>
                          </div>
                        </div>
                        <div>
                          <div
                            className="alert"
                            style={{
                              backgroundColor: "#EEF9FF",
                              paddingTop: 50,
                            }}
                            role="alert"
                          >
                            <ul className="p-0">
                              <li className="">
                                <h4 className="fw-bolder mb-0">
                                  {" "}
                                  Dr. John Doe{" "}
                                </h4>
                                <div
                                  className="fst-italic"
                                  style={{ fontSize: 18 }}
                                >
                                  {" "}
                                  Implant Surgeon{" "}
                                </div>
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
                    </div>
                    <div className="col-lg-6 mt-3">
                      <div className="team-item">
                        <div
                          className="position-relative rounded-top"
                          style={{ zIndex: 1 }}
                        >
                          <Image
                            className="img-fluid rounded-top w-100"
                            src={team5}
                            alt=""
                          />
                          <div
                            style={{ width: 200 }}
                            className="shadow p-3 mb-5 bg-body rounded position-absolute top-100 start-50 translate-middle bg-light rounded p-1 d-flex justify-content-center"
                          >
                            <a
                              style={{ width: 100 }}
                              className="btn btn-primary btn-square"
                              href="#"
                            >
                              Book
                            </a>
                          </div>
                        </div>
                        <div>
                          <div
                            className="alert"
                            style={{
                              backgroundColor: "#EEF9FF",
                              paddingTop: 50,
                            }}
                            role="alert"
                          >
                            <ul className="p-0">
                              <li className="">
                                <h4 className="fw-bolder mb-0">
                                  {" "}
                                  Dr. John Doe{" "}
                                </h4>
                                <div
                                  className="fst-italic"
                                  style={{ fontSize: 18 }}
                                >
                                  {" "}
                                  Implant Surgeon{" "}
                                </div>
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
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Team End */}
    </>
  );
};

export default index;
