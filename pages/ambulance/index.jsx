import AllPageHero from "@/components/AllPageHero";
import styles from "./ambulance.module.css"
const about = () => {
  return (
    <>
      <AllPageHero home={"Home"} data={`Ambulance`} />
      {/* Ambulance Start */}
      <div className={`container-fluid bg-primary ${styles.bgAppointment } my-5`}>
        <div className="container">
          <div className="row gx-5">
            <div className="col-lg-6 py-5">
              <div className="py-5">
                <h1 className="text-white mb-4">
                  We Are A Certified and Award Winning Dental Clinic You Can
                  Trust
                </h1>
                <p className="text-white mb-0" style={{ textAlign: "justify" }}>
                  Eirmod sed tempor lorem ut dolores. Aliquyam sit sadipscing
                  kasd ipsum. Dolor ea et dolore et at sea ea at dolor, justo
                  ipsum duo rebum sea invidunt voluptua. Eos vero eos vero ea et
                  dolore eirmod et. Dolores diam duo invidunt lorem. Elitr ut
                  dolores magna sit. Sea dolore sanctus sed et. Takimata
                  takimata sanctus sed.
                </p>
              </div>
            </div>
            <div className="col-lg-6 p-3">
              <div className="appointment-form h-100 d-flex flex-column justify-content-center text-center p-5 ">
                <h1 className="text-white mb-4">Call Ambulance Service</h1>
                <p></p>
                <h1 className="text-white">+012 345 6789</h1>
                <p />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Ambulance End */}
    </>
  );
};

export default about;
