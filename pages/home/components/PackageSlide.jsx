import Link from "next/link";
import Slider from "react-slick";

const PackageSlide = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    
  };
  return (

      <Slider {...settings}>
        <div>
          <div className="price-item pb-4 mx-2">
            <div className="position-relative">
              <img
                className="img-fluid rounded-top"
                src="https://images.pexels.com/photos/39853/woman-girl-freedom-happy-39853.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
              />
              <div
                className="d-flex align-items-center justify-content-center bg-light rounded pt-2 px-3 position-absolute top-100 start-50 translate-middle"
                style={{ zIndex: 2 }}
              >
                <h2 className="text-primary m-0">$35</h2>
              </div>
            </div>
            <div className="position-relative text-center bg-light border-bottom border-primary py-5 p-4">
              <h4>Teeth Whitening</h4>
              <hr className="text-primary w-50 mx-auto mt-0" />
              <div className="d-flex justify-content-between mb-3">
                <span>Modern Equipment</span>
                <i className="fa fa-check text-primary pt-1" />
              </div>
              <div className="d-flex justify-content-between mb-3">
                <span>Professional Dentist</span>
                <i className="fa fa-check text-primary pt-1" />
              </div>
              <div className="d-flex justify-content-between mb-2">
                <span>24/7 Call Support</span>
                <i className="fa fa-check text-primary pt-1" />
              </div>
              <Link
                href="/doctorAppointment"
                className="btn btn-primary py-2 px-4 position-absolute top-100 start-50 translate-middle"
              >
                Book Now
              </Link>
            </div>
          </div>
        </div>
        <div>
          <div className="price-item pb-4  mx-2">
            <div className="position-relative">
              <img
                className="img-fluid rounded-top"
                src="https://images.pexels.com/photos/214574/pexels-photo-214574.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
              />
              <div
                className="d-flex align-items-center justify-content-center bg-light rounded pt-2 px-3 position-absolute top-100 start-50 translate-middle"
                style={{ zIndex: 2 }}
              >
                <h2 className="text-primary m-0">$49</h2>
              </div>
            </div>
            <div className="position-relative text-center bg-light border-bottom border-primary py-5 p-4">
              <h4>Dental Implant</h4>
              <hr className="text-primary w-50 mx-auto mt-0" />
              <div className="d-flex justify-content-between mb-3">
                <span>Modern Equipment</span>
                <i className="fa fa-check text-primary pt-1" />
              </div>
              <div className="d-flex justify-content-between mb-3">
                <span>Professional Dentist</span>
                <i className="fa fa-check text-primary pt-1" />
              </div>
              <div className="d-flex justify-content-between mb-2">
                <span>24/7 Call Support</span>
                <i className="fa fa-check text-primary pt-1" />
              </div>
              <Link
                href="/doctorAppointment"
                className="btn btn-primary py-2 px-4 position-absolute top-100 start-50 translate-middle"
              >
                Book Now
              </Link>
            </div>
          </div>
        </div>
        <div>
          <div className="price-item pb-4  mx-2">
            <div className="position-relative">
              <img
                className="img-fluid rounded-top"
                src="https://images.pexels.com/photos/296282/pexels-photo-296282.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
              />
              <div
                className="d-flex align-items-center justify-content-center bg-light rounded pt-2 px-3 position-absolute top-100 start-50 translate-middle"
                style={{ zIndex: 2 }}
              >
                <h2 className="text-primary m-0">$99</h2>
              </div>
            </div>
            <div className="position-relative text-center bg-light border-bottom border-primary py-5 p-4">
              <h4>Root Canal</h4>
              <hr className="text-primary w-50 mx-auto mt-0" />
              <div className="d-flex justify-content-between mb-3">
                <span>Modern Equipment</span>
                <i className="fa fa-check text-primary pt-1" />
              </div>
              <div className="d-flex justify-content-between mb-3">
                <span>Professional Dentist</span>
                <i className="fa fa-check text-primary pt-1" />
              </div>
              <div className="d-flex justify-content-between mb-2">
                <span>24/7 Call Support</span>
                <i className="fa fa-check text-primary pt-1" />
              </div>
              <Link
                href="/doctorAppointment"
                className="btn btn-primary py-2 px-4 position-absolute top-100 start-50 translate-middle"
              >
                Book Now
              </Link>
            </div>
          </div>
        </div>
      </Slider>
  
  );
};

export default PackageSlide;
