import React from "react";
import { useState } from "react";
import myPic from './images/mypic.jpg'

export default function Contact() {
  const [data, setData] = useState({
    namee: "",
    email: "",
    phone: "",
    message: "",
  });
 
  function handleChange(e) {
    e.preventDefault();
    setData({ ...data, [e.target.name]: e.target.value });
  }
  function onSubmit() {
    if(data.namee.length > 0 &&  data.email.length > 0 && data.phone.length > 0 &&  data.message.length > 0){
    alert(
      `my name is : ${data.namee} and my email is : ${data.email} and my Mobile numb is: ${data.phone} and my message is : ${data.message}`
    );
    } else{
        alert('All fields are mendatory')
    }
   
  }
  return (
    <div className="row container mx-auto">
        <div className="col-md-6 mt-2 ">
        <h4 className="mx-auto mt-2 "><i>About Contact</i></h4>
          
        <div className="card " style={{ width: "25rem" }}>
            <img
              className="card-img-top"
              src={myPic}
            />
            <div className="card-body">
              <h5 className="card-title">Abu Bakar</h5>
              <p className="card-text">
                Hye! this is my 5th mini project 
            if you want to contact with me kindly click on the following links
            or fill the side contact section
              </p>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">React </li>
              <li className="list-group-item">Bootstrap</li>
              <li className="list-group-item">HTML & SCSS or SASS</li>
            </ul>
            
            <div className="card-body">
              <a className="card-link" href="https://github.com/abu0978123">
                Go to my Github
              </a>
              <a className="card-link" href="https://instagram.com/khapery_">
                Insta
              </a>
            </div>
          </div>
        </div>

          
        
      <div className="col-md-6   mt-2">
      <h4 className="mx-auto mt-2"><i>Contact Section</i></h4>
        <form>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="textHelp"
              name="namee"
              value={data.namee}
              onChange={(e) => {
                handleChange(e);
              }}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              name="email"
              value={data.email}
              onChange={(e) => {
                handleChange(e);
              }}
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Phone Number
            </label>
            <input
              type="number"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="numberHelp"
              name="phone"
              value={data.phone}
              onChange={(e) => {
                handleChange(e);
              }}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Message
            </label>
            <textarea
              className="form-control"
              id="floatingTextarea"
              name="message"
              value={data.message}
              onChange={(e) => {
                handleChange(e);
              }}
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary" onClick={onSubmit}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
