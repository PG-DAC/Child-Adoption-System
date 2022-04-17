import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from 'axios'
import { toast } from "react-toastify";
//import "react-toastify/dist/ReactToastify.css";



const EditChildProfile = ({ match }) => {
  const url = 'http://localhost:8081/'
  
    const history = useHistory();
  const childID = match.params.childId;


    const [values, setValues] = useState({

      childId:"",
      age:"",
      bloodGroup:"",
      colourComplexity:"",
      deficiency:"",
      education:"",
      gender:"",
      medicalHistory:"",
      name:"",
      other:"",
      status:"",
      image:"",
      user_id:"",
      
    });
    
    // destructuring variables from state
    const {childId, age, bloodGroup, colourComplexity, deficiency, education, gender, medicalHistory, name, other, status, image, user_id } =
      values;
  
    useEffect(() => {
      const getChild = () => {
        axios.get(`http://localhost:8081/admin/${childID}`)
          .then((res) => {
            setValues(res.data.data);
          })
          .catch((err) => {});
      };
      getChild();
    }, [childID]);
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      let childData = new FormData();
      childData.append("age", age);
      childData.append("bloodGroup",  bloodGroup);
      childData.append("colourComplexity", colourComplexity);
      childData.append("deficiency", deficiency);
      childData.append("education", education);
      childData.append("gender", gender);
      childData.append("medicalHistory", medicalHistory);
      childData.append("name", name);
      childData.append("other", other);
      childData.append("status", status);
      childData.append("image", image);
      childData.append("user_id", user_id);
      console.log([...childData]);
  
      try {
        const res = await axios.put(`http://localhost:8081/admin/update/${childID}`, childData).then((response) => {});
        // let res = await put.(token, hotelData, match.params.hotelId);
        toast.success("Child Updated");
        console.log("Accommodation Updated ===> ", res);
        history.push("/aviewchilds");
      } catch (err) {
        console.log(err);
        if (err.response.status === 400) toast.error(err.response.data);
      }
    };
  
    const handleImageChange = (e) => {
      // console.log(e.target.files[0]);
     // setPreview(URL.createObjectURL(e.target.files[0]));
      setValues({ ...values, image: e.target.files[0] });
    };
  
    const handleChange = (e) => {
      setValues({ ...values, [e.target.name]: e.target.value });
    };
  
    const addChild = () => (
      <form onSubmit={handleSubmit}>
      <div className="form-group">
      
      <input
        type="text"
        name="age"
        onChange={handleChange}
        placeholder="age"
        className="form-control m-2"
        value={age}
      />

     <input
        type="text"
        name="bloodGroup"
        onChange={handleChange}
        placeholder="bloodGroup"
        className="form-control m-2"
        value={bloodGroup}
      />
      <textarea
        name="colourComplexity"
        onChange={handleChange}
        placeholder="colourComplexity"
        className="form-control m-2"
        value={colourComplexity}
      />

      <input
        type="text"
        name="deficiency"
        onChange={handleChange}
        placeholder="deficiency"
        className="form-control m-2"
        value={deficiency}
      />

<input
        type="text"
        name="education"
        onChange={handleChange}
        placeholder="education"
        className="form-control m-2"
        value={education}
      />

<input
        type="text"
        name="gender"
        onChange={handleChange}
        placeholder="gender"
        className="form-control m-2"
        value={gender}
      />

<input
        type="text"
        name="medicalHistory"
        onChange={handleChange}
        placeholder="medicalHistory"
        className="form-control m-2"
        value={medicalHistory}
      />

<input
        type="text"
        name="name"
        onChange={handleChange}
        placeholder="name"
        className="form-control m-2"
        value={name}
      />

<input
        type="text"
        name="other"
        onChange={handleChange}
        placeholder="other"
        className="form-control m-2"
        value={other}
      />

<input
        type="text"
        name="status"
        onChange={handleChange}
        placeholder="status"
        className="form-control m-2"
        value={status}
      />

     <label className="btn btn-outline-secondary btn-block m-2 text-left">
        Image
        <input
          type="file"
          name="image"
          onChange={handleImageChange}
          accept="image/*"
          hidden
        />
      </label>

      </div>
  
      <button className="btn btn-outline-primary m-2">Update</button>
    </form>
  );
  
  return (
    <>
      <div className="container-fluid bg-light p-1.5 text-center">
        <h2>Child update</h2>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-10">
            <br />
            {addChild()}
          </div>
          <div className="col-md-2">
            {/* <img
              src={preview}
              alt="preview_image"
              className="img img-fluid m-2"
            /> */}
            <img
              src={url + "/" + image}
              alt=""
              className="card-image img img-fluid"
            />
            
            {/* <pre>{JSON.stringify(values, null, 4)}</pre> */}
          </div>
        </div>
      </div>
    </>
  );
  };
  
  
  
  
  export default EditChildProfile;
  