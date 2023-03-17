import AllPageHero from "@/components/AllPageHero";
import AppoinmentForm from "@/components/AppoinmentForm";
import Image from "next/image";
import team2 from '../../public/asstes/images/team-2.jpg'
const index = () => {
    return (
        <>
        <AllPageHero home={'Home'} data={`Your doctor`}/>
  {/* Appointment Section Start */}
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
                Cardilogists Department:
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
                    className="shadow p-3 mb-5 bg-body rounded position-absolute top-100 start-50 translate-middle bg-light rounded p-1"
                  >
                    <h4 className="fw-bolder mb-0"> Dr. John Doe </h4>
                    <div className="fst-italic" style={{ fontSize: 18 }}>
                      {" "}
                      Implant Surgeon{" "}
                    </div>
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
}

export default index;



