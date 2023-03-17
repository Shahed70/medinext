import styles from "./Global.module.css"
const AllPageHero = ({home, data}) => {
  return (
    <>
      {/* Hero Start */}
      <div
        className={`container-fluid bg-primary py-5 ${styles.heroHeader} mb-5`}
      >
        <div className="row py-3">
          <div className="col-12 text-center">
            <h1 className="display-3 text-white animated zoomIn">{data}</h1>
            <a href={home} className="h4 text-white">
             {home}
            </a>
            <i className="far fa-circle text-white px-2" />
            <a href={data} className="h4 text-white">
              {data}
            </a>
          </div>
        </div>
      </div>
      {/* Hero End */}
    </>
  );
};

export default AllPageHero;
