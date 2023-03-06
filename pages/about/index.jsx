import AllPageHero from "@/components/AllPageHero";
import Image from "next/image";
import About1 from "../../public/asstes/images/about.jpg";
const about = () => {
  return (
    <>

      <AllPageHero home={'Home'} data={`About`}/>
      {/* About Start */}
      <div className="container-fluid py-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-7">
              <div className="section-title mb-4">
                <h5 className="position-relative d-inline-block text-primary text-uppercase">
                  About Us
                </h5>
                <h1 className="display-5 mb-0">
                  The Best Dental Clinic That You Can Trust
                </h1>
              </div>
              <h4 className="text-body fst-italic mb-4">
                Diam dolor diam ipsum sit. Clita erat ipsum et lorem stet no
                lorem sit clita duo justo magna dolore
              </h4>
              <p className="mb-4">
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum et
                tempor sit. Aliqu diam amet diam et eos labore. Clita erat ipsum
                et lorem et sit, sed stet no labore lorem sit. Sanctus clita duo
                justo et tempor eirmod magna dolore erat amet
              </p>
              <div className="row g-3">
                <div className="col-sm-6 " data-wow-delay="0.3s">
                  <h5 className="mb-3">
                    <i className="fa fa-check-circle text-primary me-3" />
                    Award Winning
                  </h5>
                  <h5 className="mb-3">
                    <i className="fa fa-check-circle text-primary me-3" />
                    Professional Staff
                  </h5>
                </div>
                <div className="col-sm-6 " data-wow-delay="0.6s">
                  <h5 className="mb-3">
                    <i className="fa fa-check-circle text-primary me-3" />
                    24/7 Opened
                  </h5>
                  <h5 className="mb-3">
                    <i className="fa fa-check-circle text-primary me-3" />
                    Fair Prices
                  </h5>
                </div>
              </div>
              <a
                href="appointment.html"
                className="btn btn-primary py-3 px-5 mt-4 "
                data-wow-delay="0.6s"
              >
                Make Appointment
              </a>
            </div>
            <div className="col-lg-5" style={{ minHeight: 500 }}>
              <div className="position-relative h-100 shadow-lg p-3 mb-5 bg-body rounded">
                <Image
                  className="position-absolute w-100 h-100 rounded "
                  data-wow-delay="0.9s"
                  src={About1}
                  style={{ objectFit: "cover" }}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* About End */}
    </>
  );
};

export default about;
