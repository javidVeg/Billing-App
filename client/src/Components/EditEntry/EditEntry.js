//TUTORIAL//
import React, { useState, useEffect } from "react"
// import { useNavigate } from "react-router";
import TableService from "../../Service/TableService"
import { useParams, useNavigate } from "react-router-dom";

const FormData = props => {
    const initialFormState = {
        _id: null,
        firstName: '',
        lastName: '',
        phoneNumber: '',
        published: false
    };
    console.log(initialFormState)
    
//----------THIS IS CALLED INITIALIZING----------//
    const navigate = useNavigate();
//--PULLS PARAM FROM URL ':id'--//
    const { id } = useParams();
    console.log(id)
//----------------------------------------------//
    const [currentFormData, setCurrentFormData] = useState(initialFormState);
    const [message, setMessage] = useState("");

//----------PROGRAMMATIC NAVIGATION---------//   
    const getFormData = id => {
        TableService.get(id)
        .then(response => {
            setCurrentFormData(response.data);
            console.log(response.data);
        })
        .catch(e => {
            console.log(e);
        });
    };
    

    useEffect(() => {
        getFormData(id);
    }, [id]);
 
    
//----------HANDLES THE INPUT TO ENABLE TYPING AND MODIFICATIONS BY DESTRUCTURING----------//
    const handleInputChange = event =>{
        const { name, value } = event.target;
        setCurrentFormData({ ...currentFormData, [name]: value });
    };
    

    const updatePublished = status => {
        var data = {
            id: currentFormData.id,
            firstName: currentFormData.firstName,
            lastName: currentFormData.lastName,
            phoneNumber: currentFormData.phoneNumber,
            published: status
        };

        TableService.update(currentFormData._id, data)
        .then(response => {
            setCurrentFormData({ ...currentFormData, published: status });
            console.log(response.data);
            setMessage("The status was updated successfully!")
        })
        .catch(e => {
            console.log(e);
        });
    };

    const updateFormData = () => {
        TableService.update(currentFormData._id, currentFormData)
          .then(response => {
            console.log(response.data);
            setMessage("The form data was updated successfully!");
          })
          .catch(e => {
            console.log(e);
          });
      };
    
      const deleteFormData = () => {
        TableService.remove(currentFormData._id)
          .then(response => {
            console.log(response.data);
            navigate("/listAll");
          })
          .catch(e => {
            console.log(e);
          });
      };

      return (
        <div>
        {currentFormData ? (
          <div className="edit-form">
            <h4>Form Data</h4>
            <form>
              <div className="form-group">
                <label htmlFor="firstName">First Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="firstName"
                  name="firstName"
                  value={currentFormData.firstName}
                  onChange={handleInputChange}
                />
              </div>

            <div className="form-group">
                <label htmlFor="lastName">Last Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="lastName"
                  name="lastName"
                  value={currentFormData.lastName}
                  onChange={handleInputChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="phoneNumber">Phone Number</label>
                <input
                  type="text"
                  className="form-control"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={currentFormData.phoneNumber}
                  onChange={handleInputChange}
                />
              </div>
  
              <div className="form-group">
                <label>
                  <strong>Status:</strong>
                </label>
                {currentFormData.published ? "Published" : "Pending"}
              </div>
            </form>
  
            {currentFormData.published ? (
              <button
                className="badge badge-primary mr-2"
                onClick={() => updatePublished(false)}
              >
                UnPublish
              </button>
            ) : (
              <button
                className="badge badge-primary mr-2"
                onClick={() => updatePublished(true)}
              >
                Publish
              </button>
            )}
  
            <button className="badge badge-danger mr-2" onClick={deleteFormData}>
              Delete
            </button>
  
            <button
              type="submit"
              className="badge badge-success"
              onClick={updateFormData}
            >
              Update
            </button>
            <p>{message}</p>
          </div>
        ) : (
          <div>
            <br />
            <p>Please click on a Form...</p>
          </div>
        )}
      </div>
    );
  
};

export default FormData;