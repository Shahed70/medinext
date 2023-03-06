import AllPageHero from "@/components/AllPageHero";
import Image from "next/image";
import dpmnt1 from "../../public/asstes/images/1.jpg";
import dpmnt2 from "../../public/asstes/images/2.jpg";
import team1 from "../../public/asstes/images/team-1.jpg";
import team2 from "../../public/asstes/images/team-2.jpg";
import team3 from "../../public/asstes/images/team-3.jpg";
const index = () => {
    return (
        <>
    <AllPageHero home={`Department`}  data={`Cardiology`}/>    
  {/* Cardilogists Start */}
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
                  <Image src={team2} alt="" width="100%" />
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <h4
                    className="pt-4 pb-3"
                    style={{ fontWeight: "bold !important", color: "#6B6A75" }}
                  >
                    CARDILOGISTS DEPERTMENT
                  </h4>
                </div>
                <div className="row">
                  <div className="col-lg-12">
                    <p style={{ textAlign: "justify" }}>
                      Medicative Hospital adipisicing elit. Doloremque illum
                      iure dolor dolore impedit adipisci, quibusdam dicta
                      facilis molestias libero, odit sint doloribus numquam
                      aliquid quasi, suscipit eum iste praesentiu Quam ipsa rem
                      blanditiis reiciendis veniam aperiam aspernatur iure error
                      aut neque unde dicta open laboriosam, expedita, impedit,
                      consequuntur placeat voluptates medicative molestias,
                      deleniti officia maxime reprehenderit placeat fugit? Aut
                      consectetur nemo vitae earum maxime magnam enim iure
                      reiciendis totam necessitatibus corrupti a velit
                      laboriosam libero, commodi dicta recusandae.
                    </p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <div className="alert alert-secondary" role="alert">
                    <div className="">
                      <h4
                        style={{
                          fontWeight: "bold !important",
                          color: "#6B6A75"
                        }}
                      >
                        Opening Hour:
                      </h4>
                      <hr />
                    </div>
                    <ul className="p-0">
                      <li className="d-flex justify-content-between">
                        <span> Mon - Tue : </span>
                        <div className="value pull-right">
                          {" "}
                          10.00 am - 6.00 pm{" "}
                        </div>
                      </li>
                      <hr className="mt-3 mb-3" />
                      <li className="d-flex justify-content-between">
                        <span> Wed - Thu :</span>
                        <div className="value pull-right">
                          {" "}
                          10.00 am - 4.00 pm{" "}
                        </div>
                      </li>
                      <hr className="mt-3 mb-3" />
                      <li className="d-flex justify-content-between">
                        <span> Friday : </span>
                        <div className="value pull-right">
                          {" "}
                          01.00 pm - 5.00 pm{" "}
                        </div>
                      </li>
                      <hr className="mt-3 mb-3" />
                      <li className="d-flex justify-content-between">
                        <span> Saturday : </span>
                        <div className="value pull-right">
                          {" "}
                          10.00 am - 4.00 pm{" "}
                        </div>
                      </li>
                      <hr className="mt-3 mb-3" />
                      <li className="d-flex justify-content-between">
                        <span> Sunday : </span>
                        <div className="value pull-right"> Closed </div>
                      </li>
                      <hr className="mt-3 mb-3" />
                    </ul>
                  </div>
                </div>
              </div>
              <div className="row">
                {/* <div class="col-lg-6">
                              <div class="alert alert-primary" role="alert">
                                  <h6 style="font-weight: bold !important;color: #6B6A75;">TREATMENTS FEE</h6>
                                  <hr>
                                  <table class="table">
                                      <tr>
                                          <th>Treatment Name</th>
                                          <th>Price</th>
                                          <th class="text-center">Booking</th>
                                      </tr>
                                      <tr>
                                          <td>Cardilogists Test</td>
                                          <td>$105</td>
                                          <td class="text-center"><button
                                                  class="btn btn-sm btn-danger">Book</button></td>
                                      </tr>
                                      <tr>
                                          <td>Orthopaedics Test</td>
                                          <td>$30</td>
                                          <td class="text-center"><button
                                                  class="btn btn-sm btn-danger">Book</button></td>
                                      </tr>
                                      <tr>
                                          <td>Cancer Blood</td>
                                          <td>$80</td>
                                          <td class="text-center"><button
                                                  class="btn btn-sm btn-danger">Book</button></td>
                                      </tr>
                                      <tr>
                                          <td>Gastroenterology Test</td>
                                          <td>$20</td>
                                          <td class="text-center"><button
                                                  class="btn btn-sm btn-danger">Book</button></td>
                                      </tr>
                                      <tr>
                                          <td>Orthopaedics Test</td>
                                          <td>$90</td>
                                          <td class="text-center"><button
                                                  class="btn btn-sm btn-danger">Book</button></td>
                                      </tr>
                                  </table>
                              </div>
                          </div> */}
                <div className="col-lg-12">
                  <div className="alert alert-success" role="alert">
                    <h6
                      style={{
                        fontWeight: "bold !important",
                        color: "#6B6A75"
                      }}
                    >
                      INVESTIGATIONS FEE
                    </h6>
                    <hr />
                    <table className="table">
                      <tbody>
                        <tr>
                          <th>Investigations Name</th>
                          <th>Price</th>
                          <th className="text-center">Booking</th>
                        </tr>
                        <tr>
                          <td>Cardilogists Test</td>
                          <td>$105</td>
                          <td className="text-center">
                            <button className="btn btn-sm btn-danger">
                              Book
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td>Orthopaedics Test</td>
                          <td>$30</td>
                          <td className="text-center">
                            <button className="btn btn-sm btn-danger">
                              Book
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td>Cancer Blood</td>
                          <td>$80</td>
                          <td className="text-center">
                            <button className="btn btn-sm btn-danger">
                              Book
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td>Gastroenterology Test</td>
                          <td>$20</td>
                          <td className="text-center">
                            <button className="btn btn-sm btn-danger">
                              Book
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td>Orthopaedics Test</td>
                          <td>$90</td>
                          <td className="text-center">
                            <button className="btn btn-sm btn-danger">
                              Book
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <h4
                    className="pt-3 pb-3"
                    style={{ fontWeight: "bold !important", color: "#6B6A75" }}
                  >
                    OUR EXPERIENCED CARDILOGISTS:
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
                        style={{ width: 200 }}
                        className="shadow p-3 mb-5 bg-body rounded position-absolute top-100 start-50 translate-middle bg-light rounded p-1 d-flex justify-content-center"
                      >
                        <a
                          style={{ width: 100 }}
                          className="btn btn-primary btn-square"
                          href="doctors-appointment.html"
                        >
                          Book
                        </a>
                      </div>
                    </div>
                    <div className="team-text position-relative bg-light text-center rounded-bottom p-4 pt-5">
                      <h4 className="mb-2">Dr. John Doe</h4>
                      <p className="text-primary mb-0">Implant Surgeon</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 mt-3">
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
                          href="doctors-appointment.html"
                        >
                          Book
                        </a>
                      </div>
                    </div>
                    <div className="team-text position-relative bg-light text-center rounded-bottom p-4 pt-5">
                      <h4 className="mb-2">Dr. John Doe</h4>
                      <p className="text-primary mb-0">Implant Surgeon</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 mt-3">
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
                    <div className="team-text position-relative bg-light text-center rounded-bottom p-4 pt-5">
                      <h4 className="mb-2">Dr. John Doe</h4>
                      <p className="text-primary mb-0">Implant Surgeon</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 mt-3">
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
                    <div className="team-text position-relative bg-light text-center rounded-bottom p-4 pt-5">
                      <h4 className="mb-2">Dr. John Doe</h4>
                      <p className="text-primary mb-0">Implant Surgeon</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 mt-3">
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
                    <div className="team-text position-relative bg-light text-center rounded-bottom p-4 pt-5">
                      <h4 className="mb-2">Dr. John Doe</h4>
                      <p className="text-primary mb-0">Implant Surgeon</p>
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
                  <Image src={dpmnt2} alt="" width="100%" />
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <h4
                    className="pt-4 pb-3"
                    style={{ fontWeight: "bold !important", color: "#6B6A75" }}
                  >
                    ORTHOPAEDICS DEPERTMENT
                  </h4>
                </div>
                <div className="row">
                  <div className="col-lg-12">
                    <p style={{ textAlign: "justify" }}>
                      Medicative Hospital adipisicing elit. Doloremque illum
                      iure dolor dolore impedit adipisci, quibusdam dicta
                      facilis molestias libero, odit sint doloribus numquam
                      aliquid quasi, suscipit eum iste praesentiu Quam ipsa rem
                      blanditiis reiciendis veniam aperiam aspernatur iure error
                      aut neque unde dicta open laboriosam, expedita, impedit,
                      consequuntur placeat voluptates medicative molestias,
                      deleniti officia maxime reprehenderit placeat fugit? Aut
                      consectetur nemo vitae earum maxime magnam enim iure
                      reiciendis totam necessitatibus corrupti a velit
                      laboriosam libero, commodi dicta recusandae.
                    </p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <div className="alert alert-secondary" role="alert">
                    <div className="">
                      <h4
                        style={{
                          fontWeight: "bold !important",
                          color: "#6B6A75"
                        }}
                      >
                        Opening Hour:
                      </h4>
                      <hr />
                    </div>
                    <ul className="p-0">
                      <li className="d-flex justify-content-between">
                        <span> Mon - Tue : </span>
                        <div className="value pull-right">
                          {" "}
                          10.00 am - 6.00 pm{" "}
                        </div>
                      </li>
                      <hr className="mt-3 mb-3" />
                      <li className="d-flex justify-content-between">
                        <span> Wed - Thu :</span>
                        <div className="value pull-right">
                          {" "}
                          10.00 am - 4.00 pm{" "}
                        </div>
                      </li>
                      <hr className="mt-3 mb-3" />
                      <li className="d-flex justify-content-between">
                        <span> Friday : </span>
                        <div className="value pull-right">
                          {" "}
                          01.00 pm - 5.00 pm{" "}
                        </div>
                      </li>
                      <hr className="mt-3 mb-3" />
                      <li className="d-flex justify-content-between">
                        <span> Saturday : </span>
                        <div className="value pull-right">
                          {" "}
                          10.00 am - 4.00 pm{" "}
                        </div>
                      </li>
                      <hr className="mt-3 mb-3" />
                      <li className="d-flex justify-content-between">
                        <span> Sunday : </span>
                        <div className="value pull-right"> Closed </div>
                      </li>
                      <hr className="mt-3 mb-3" />
                    </ul>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <div className="alert alert-success" role="alert">
                    <h6
                      style={{
                        fontWeight: "bold !important",
                        color: "#6B6A75"
                      }}
                    >
                      INVESTIGATIONS FEE
                    </h6>
                    <hr />
                    <table className="table">
                      <tbody>
                        <tr>
                          <th>Investigations Name</th>
                          <th>Price</th>
                          <th className="text-center">Booking</th>
                        </tr>
                        <tr>
                          <td>Cardilogists Test</td>
                          <td>$105</td>
                          <td className="text-center">
                            <button className="btn btn-sm btn-danger">
                              Book
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td>Orthopaedics Test</td>
                          <td>$30</td>
                          <td className="text-center">
                            <button className="btn btn-sm btn-danger">
                              Book
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td>Cancer Blood</td>
                          <td>$80</td>
                          <td className="text-center">
                            <button className="btn btn-sm btn-danger">
                              Book
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td>Gastroenterology Test</td>
                          <td>$20</td>
                          <td className="text-center">
                            <button className="btn btn-sm btn-danger">
                              Book
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td>Orthopaedics Test</td>
                          <td>$90</td>
                          <td className="text-center">
                            <button className="btn btn-sm btn-danger">
                              Book
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <h4
                    className="pt-3 pb-3"
                    style={{ fontWeight: "bold !important", color: "#6B6A75" }}
                  >
                    OUR EXPERIENCED CARDILOGISTS:
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
                    <div className="team-text position-relative bg-light text-center rounded-bottom p-4 pt-5">
                      <h4 className="mb-2">Dr. John Doe</h4>
                      <p className="text-primary mb-0">Implant Surgeon</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 mt-3">
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
                    <div className="team-text position-relative bg-light text-center rounded-bottom p-4 pt-5">
                      <h4 className="mb-2">Dr. John Doe</h4>
                      <p className="text-primary mb-0">Implant Surgeon</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 mt-3">
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
                    <div className="team-text position-relative bg-light text-center rounded-bottom p-4 pt-5">
                      <h4 className="mb-2">Dr. John Doe</h4>
                      <p className="text-primary mb-0">Implant Surgeon</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 mt-3">
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
                    <div className="team-text position-relative bg-light text-center rounded-bottom p-4 pt-5">
                      <h4 className="mb-2">Dr. John Doe</h4>
                      <p className="text-primary mb-0">Implant Surgeon</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 mt-3">
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
                    <div className="team-text position-relative bg-light text-center rounded-bottom p-4 pt-5">
                      <h4 className="mb-2">Dr. John Doe</h4>
                      <p className="text-primary mb-0">Implant Surgeon</p>
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
                  <Image src={dpmnt1} alt="" width="100%" />
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <h4
                    className="pt-4 pb-3"
                    style={{ fontWeight: "bold !important", color: "#6B6A75" }}
                  >
                    CARDILOGISTS DEPERTMENT
                  </h4>
                </div>
                <div className="row">
                  <div className="col-lg-12">
                    <p style={{ textAlign: "justify" }}>
                      Medicative Hospital adipisicing elit. Doloremque illum
                      iure dolor dolore impedit adipisci, quibusdam dicta
                      facilis molestias libero, odit sint doloribus numquam
                      aliquid quasi, suscipit eum iste praesentiu Quam ipsa rem
                      blanditiis reiciendis veniam aperiam aspernatur iure error
                      aut neque unde dicta open laboriosam, expedita, impedit,
                      consequuntur placeat voluptates medicative molestias,
                      deleniti officia maxime reprehenderit placeat fugit? Aut
                      consectetur nemo vitae earum maxime magnam enim iure
                      reiciendis totam necessitatibus corrupti a velit
                      laboriosam libero, commodi dicta recusandae.
                    </p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <div className="alert alert-secondary" role="alert">
                    <div className="">
                      <h4
                        style={{
                          fontWeight: "bold !important",
                          color: "#6B6A75"
                        }}
                      >
                        Opening Hour:
                      </h4>
                      <hr />
                    </div>
                    <ul className="p-0">
                      <li className="d-flex justify-content-between">
                        <span> Mon - Tue : </span>
                        <div className="value pull-right">
                          {" "}
                          10.00 am - 6.00 pm{" "}
                        </div>
                      </li>
                      <hr className="mt-3 mb-3" />
                      <li className="d-flex justify-content-between">
                        <span> Wed - Thu :</span>
                        <div className="value pull-right">
                          {" "}
                          10.00 am - 4.00 pm{" "}
                        </div>
                      </li>
                      <hr className="mt-3 mb-3" />
                      <li className="d-flex justify-content-between">
                        <span> Friday : </span>
                        <div className="value pull-right">
                          {" "}
                          01.00 pm - 5.00 pm{" "}
                        </div>
                      </li>
                      <hr className="mt-3 mb-3" />
                      <li className="d-flex justify-content-between">
                        <span> Saturday : </span>
                        <div className="value pull-right">
                          {" "}
                          10.00 am - 4.00 pm{" "}
                        </div>
                      </li>
                      <hr className="mt-3 mb-3" />
                      <li className="d-flex justify-content-between">
                        <span> Sunday : </span>
                        <div className="value pull-right"> Closed </div>
                      </li>
                      <hr className="mt-3 mb-3" />
                    </ul>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <div className="alert alert-success" role="alert">
                    <h6
                      style={{
                        fontWeight: "bold !important",
                        color: "#6B6A75"
                      }}
                    >
                      INVESTIGATIONS FEE
                    </h6>
                    <hr />
                    <table className="table">
                      <tbody>
                        <tr>
                          <th>Investigations Name</th>
                          <th>Price</th>
                          <th className="text-center">Booking</th>
                        </tr>
                        <tr>
                          <td>Cardilogists Test</td>
                          <td>$105</td>
                          <td className="text-center">
                            <button className="btn btn-sm btn-danger">
                              Book
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td>Orthopaedics Test</td>
                          <td>$30</td>
                          <td className="text-center">
                            <button className="btn btn-sm btn-danger">
                              Book
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td>Cancer Blood</td>
                          <td>$80</td>
                          <td className="text-center">
                            <button className="btn btn-sm btn-danger">
                              Book
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td>Gastroenterology Test</td>
                          <td>$20</td>
                          <td className="text-center">
                            <button className="btn btn-sm btn-danger">
                              Book
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td>Orthopaedics Test</td>
                          <td>$90</td>
                          <td className="text-center">
                            <button className="btn btn-sm btn-danger">
                              Book
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <h4
                    className="pt-3 pb-3"
                    style={{ fontWeight: "bold !important", color: "#6B6A75" }}
                  >
                    OUR EXPERIENCED CARDILOGISTS:
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
                    <div className="team-text position-relative bg-light text-center rounded-bottom p-4 pt-5">
                      <h4 className="mb-2">Dr. John Doe</h4>
                      <p className="text-primary mb-0">Implant Surgeon</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 mt-3">
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
                    <div className="team-text position-relative bg-light text-center rounded-bottom p-4 pt-5">
                      <h4 className="mb-2">Dr. John Doe</h4>
                      <p className="text-primary mb-0">Implant Surgeon</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 mt-3">
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
                    <div className="team-text position-relative bg-light text-center rounded-bottom p-4 pt-5">
                      <h4 className="mb-2">Dr. John Doe</h4>
                      <p className="text-primary mb-0">Implant Surgeon</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 mt-3">
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
                    <div className="team-text position-relative bg-light text-center rounded-bottom p-4 pt-5">
                      <h4 className="mb-2">Dr. John Doe</h4>
                      <p className="text-primary mb-0">Implant Surgeon</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 mt-3">
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
                    <div className="team-text position-relative bg-light text-center rounded-bottom p-4 pt-5">
                      <h4 className="mb-2">Dr. John Doe</h4>
                      <p className="text-primary mb-0">Implant Surgeon</p>
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
  {/* Cardilogists End */}
</>

    );
}

export default index;