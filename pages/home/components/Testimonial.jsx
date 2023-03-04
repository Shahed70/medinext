import Slider from "react-slick";
import styles from "../home.module.css"
const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="container-fluid bg-primary py-5 my-5">
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-7">
           <div className={styles.testimonialSlider}>
           <Slider {...settings}>
              <div>
                <div className="price-item  ">
                  <div className="">
                    <img
                      className="img-fluid img-fluid mx-auto rounded"
                      src="https://images.pexels.com/photos/39853/woman-girl-freedom-happy-39853.jpeg?auto=compress&cs=tinysrgb&w=600"
                      alt=""
                    />
                    <div
                      className="d-flex align-items-center justify-content-center bg-light rounded pt-2 px-3 position-absolute top-100 start-50 translate-middle"
                      style={{ zIndex: 2 }}
                    ></div>
                  </div>
                </div>
              </div>
              <div>
                <div className="price-item ">
                  <div className="position-relative">
                    <img
                      className="img-fluid img-fluid mx-auto rounded"
                      src="https://images.pexels.com/photos/214574/pexels-photo-214574.jpeg?auto=compress&cs=tinysrgb&w=600"
                      alt=""
                    />
                    <div
                      className="d-flex align-items-center justify-content-center bg-light rounded pt-2 px-3 position-absolute top-100 start-50 translate-middle"
                      style={{ zIndex: 2 }}
                    ></div>
                  </div>
                </div>
              </div>
              <div>
                <div className="price-item">
                  <div className="position-relative">
                    <img
                      className="img-fluid img-fluid mx-auto rounded"
                      src="https://images.pexels.com/photos/296282/pexels-photo-296282.jpeg?auto=compress&cs=tinysrgb&w=600"
                      alt=""
                    />
                    <div
                      className="d-flex align-items-center justify-content-center bg-light rounded pt-2 px-3 position-absolute top-100 start-50 translate-middle"
                      style={{ zIndex: 2 }}
                    ></div>
                  </div>
                </div>
              </div>
            </Slider>
           </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
