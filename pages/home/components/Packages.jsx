import PackageSlide from "./PackageSlide";

const Packages = () => {
    return (
        <>
        {/* Packages Start */}
        <div className="container-fluid py-5">
          <div className="container">
            <div className="shadow p-5 mb-5 bg-body rounded">
              <div className="row g-5">
                <div className="col-lg-5">
                  <div className="section-title mb-4">
                    <h5 className="position-relative d-inline-block text-primary text-uppercase">
                      Our Package Plan
                    </h5>
                    <h1 className="display-6 mb-0">
                      We Offer Best{' '}
                      <span style={{ color: '#F57E57' }}>Packages</span> In
                      Bangladesh
                    </h1>
                  </div>
                  <p className="mb-4">
                    Tempor erat elitr rebum at clita. Diam dolor diam ipsum et
                    tempor sit. Aliqu diam amet diam et eos labore. Clita erat
                    ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus
                    clita duo justo eirmod magna dolore erat amet
                  </p>
                  <h5
                    className="text-uppercase text-primary wow fadeInUp"
                    data-wow-delay="0.3s"
                  >
                    Call for Appointment
                  </h5>
                  <h1 className="wow fadeInUp" data-wow-delay="0.6s">
                    +012 345 6789
                  </h1>
                </div>
                <div className="col-lg-7">
                    <PackageSlide />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Packages End */}
      </>
    );
}

export default Packages;