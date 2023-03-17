import { useState } from "react";

const AppoinmentForm = () => {
    const [formData, setFormData] = useState({
        drName:'',
        name: '',
        age: '',
        gender: 'male',
        maritalStatus: '',
        trdxNum:''
      });
    
      const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
      };
    return (
        
        <div className="col-lg-12 mt-3">
          <div className="row">
            <div className="col-lg-12">
              <div className="appointment-form h-100 d-flex flex-column justify-content-center text-center p-5 ">
                <h1 className="text-white mb-4">Make Appointment</h1>
                <form onSubmit={handleSubmit}>
                  <div className="row g-3">
                    <div className="col-lg-12 col-sm-12">
                      <input
                        type="text"
                        className="form-control bg-light border-0"
                        value={formData.name} onChange={handleInputChange} 
                        defaultValue="Dr. John Doe"
                        placeholder="Dr. John Doe"
                        readOnly=""
                      />
                    </div>
                    <div className="col-lg-12 col-sm-12">
                      <input
                       value={formData.name} onChange={handleInputChange} 
                        required
                        className="form-control bg-light border-0"
                        placeholder="Your Name"
                      />
                    </div>
                    <div className="col-lg-12 col-sm-12">
                      <input
                        type="text"
                        value={formData.age} onChange={handleInputChange} 
                        className="form-control bg-light border-0"
                        placeholder="Your Age"
                        required
                      />
                    </div>
                    <div className="col-lg-12 col-sm-12">
                      <select className="form-select bg-light border-0"  onChange={handleInputChange}>
                        <option value={"male"}>Male</option>
                        <option value={"female"}>Female</option>
                      </select>
                    </div>

                     
                    <div className="col-lg-12 col-sm-12">
                      <select className="form-select bg-light border-0"  onChange={handleInputChange}>
                        <option value={"Married"}>Married</option>
                        <option value={"Unmarried"}>Unmarried</option>
                      </select>
                    </div>

                    <div className="col-lg-12 col-sm-12">
                      <input
                        type="date"
                        className="form-control bg-light border-0"
                        required
                      />
                    </div>
                    <div className="col-lg-12 col-sm-12">
                      <input
                        type="text"
                        className="form-control bg-light border-0"
                        value={formData.name} onChange={handleInputChange}
                        placeholder="Your TRDX No."
                        required
                      />
                    </div>
                    <div className="col-lg-12">
                      <button
                        className="btn btn-dark w-100 py-2"
                        type="submit"
                      >
                        Make Appointment
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
    );
}

export default AppoinmentForm;