import Image from "next/image"
import Link from "next/link"
import Team1 from "../../../public/asstes/images/team-1.jpg"
import Team2 from "../../../public/asstes/images/team-2.jpg"
import Team3 from "../../../public/asstes/images/team-3.jpg"
import Team4 from "../../../public/asstes/images/team-4.jpg"
import Team5 from "../../../public/asstes/images/team-5.jpg"

const Team = () => {
    return (
        <>
        {/* Team Start */}
        <div className="container-fluid py-5">
          <div className="container">
            <div className="row g-5">
              <div className="col-lg-4">
                <div className="section-title bg-light rounded h-100 p-5">
                  <h5 className="position-relative d-inline-block text-primary text-uppercase">
                    Our Doctors
                  </h5>
                  <h1 className="display-6 mb-4">
                    Meet Our Certified &amp; Experienced Doctors
                  </h1>
                  <Link href="doctors" className="btn btn-primary py-3 px-5">
                    View All
                  </Link>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="team-item">
                  <div
                    className="position-relative rounded-top"
                    style={{ zIndex: 1 }}
                  >
                    <Image
                      className="img-fluid rounded-top w-100"
                      src={Team1}
                      alt=""
                    />
                    <div
                      style={{ width: 300 }}
                      className="shadow p-3 mb-5 bg-body rounded position-absolute top-100 start-50 translate-middle bg-light rounded p-1 d-flex justify-content-center"
                    >
                      <Link
                        style={{ width: 100 }}
                        className="btn btn-primary btn-square mx-1"
                        href="/doctorAppointment"
                      >
                        Book
                      </Link>
                      <Link
                        style={{ width: 100 }}
                        className="btn btn-primary btn-square"
                        href="/doctors"
                      >
                        Details
                      </Link>
                    </div>
                  </div>
                  <div className="team-text position-relative bg-light text-center rounded-bottom p-4 pt-5">
                    <h4 className="mb-2">Dr. John Doe</h4>
                    <p className="text-primary mb-0">Implant Surgeon</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="team-item">
                  <div
                    className="position-relative rounded-top"
                    style={{ zIndex: 1 }}
                  >
                    <Image
                      className="img-fluid rounded-top w-100"
                      src={Team2}
                      alt=""
                    />
                    <div
                      style={{ width: 300 }}
                      className="shadow p-3 mb-5 bg-body rounded position-absolute top-100 start-50 translate-middle bg-light rounded p-1 d-flex justify-content-center"
                    >
                      <Link
                        style={{ width: 100 }}
                        className="btn btn-primary btn-square mx-1"
                        href="/doctorAppointment"
                      >
                        Book
                      </Link>
                      <Link
                        style={{ width: 100 }}
                        className="btn btn-primary btn-square"
                        href="/doctors"
                      >
                        Details
                      </Link>
                    </div>
                  </div>
                  <div className="team-text position-relative bg-light text-center rounded-bottom p-4 pt-5">
                    <h4 className="mb-2">Dr. John Doe</h4>
                    <p className="text-primary mb-0">Implant Surgeon</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="team-item">
                  <div
                    className="position-relative rounded-top"
                    style={{ zIndex: 1 }}
                  >
                    <Image
                      className="img-fluid rounded-top w-100"
                      src={Team3}
                      alt=""
                    />
                    <div
                      style={{ width: 300 }}
                      className="shadow p-3 mb-5 bg-body rounded position-absolute top-100 start-50 translate-middle bg-light rounded p-1 d-flex justify-content-center"
                    >
                      <Link
                        style={{ width: 100 }}
                        className="btn btn-primary btn-square mx-1"
                        href="/doctorAppointment"
                      >
                        Book
                      </Link>
                      <Link
                        style={{ width: 100 }}
                        className="btn btn-primary btn-square"
                        href="/doctors"
                      >
                        Details
                      </Link>
                    </div>
                  </div>
                  <div className="team-text position-relative bg-light text-center rounded-bottom p-4 pt-5">
                    <h4 className="mb-2">Dr. John Doe</h4>
                    <p className="text-primary mb-0">Implant Surgeon</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="team-item">
                  <div
                    className="position-relative rounded-top"
                    style={{ zIndex: 1 }}
                  >
                    <Image
                      className="img-fluid rounded-top w-100"
                      src={Team4}
                      alt=""
                    />
                    <div
                      style={{ width: 300 }}
                      className="shadow p-3 mb-5 bg-body rounded position-absolute top-100 start-50 translate-middle bg-light rounded p-1 d-flex justify-content-center"
                    >
                      <Link
                        style={{ width: 100 }}
                        className="btn btn-primary btn-square mx-1"
                        href="/doctorAppointment"
                      >
                        Book
                      </Link>
                      <Link
                        style={{ width: 100 }}
                        className="btn btn-primary btn-square"
                        href="/doctors"
                      >
                        Details
                      </Link>
                    </div>
                  </div>
                  <div className="team-text position-relative bg-light text-center rounded-bottom p-4 pt-5">
                    <h4 className="mb-2">Dr. John Doe</h4>
                    <p className="text-primary mb-0">Implant Surgeon</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="team-item">
                  <div
                    className="position-relative rounded-top"
                    style={{ zIndex: 1 }}
                  >
                    <Image
                      className="img-fluid rounded-top w-100"
                      src={Team5}
                      alt=""
                    />
                    <div
                      style={{ width: 300 }}
                      className="shadow p-3 mb-5 bg-body rounded position-absolute top-100 start-50 translate-middle bg-light rounded p-1 d-flex justify-content-center"
                    >
                      <Link
                        style={{ width: 100 }}
                        className="btn btn-primary btn-square mx-1"
                        href="/doctorAppointment"
                      >
                        Book
                      </Link>
                      <Link
                        style={{ width: 100 }}
                        className="btn btn-primary btn-square"
                        href="/doctors"
                      >
                        Details
                      </Link>
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
        {/* Team End */}
      </>
    );
}

export default Team;