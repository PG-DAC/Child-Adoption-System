import React from 'react';
import '../../registration.css';
import Navbar from '../layout/Navbar';
import UserFunctions from '../../Axios/UserAxios';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import classNames from 'classnames';
import Footer from '../layout/Footer';

const Parent = () => {
  const history = useHistory();

  const { register, errors, getValues } = useForm();

  const onRegister = (e) => {
    
    e.preventDefault();
    const name = e.target.elements.name.value;
    const email = e.target.elements.email.value;
    const mobile = e.target.elements.mobile.value;
    const password = e.target.elements.password.value;
    if (e.target.elements.name.value.length === 0) {
      alert('enter name')
    } else if (e.target.elements.email.value.length === 0) {
      alert('enter email')
    } else if (e.target.elements.mobile.value === 0) {
      alert('enter mobile')
    }else if (e.target.elements.mobile.value.length === 0) {
      alert('enter mobile')
    } else if (e.target.elements.password.value.length === 0) {
      alert('enter password')
    } else if (e.target.elements.confirm_password.value.length === 0) {
      alert('enter password again')
    } else if (e.target.elements.password.value !== e.target.elements.confirm_password.value) {
      alert('enter correct password')
    }else {
    const add = {
      name: name,
      mobileNumber: mobile,
      email: email,
      password: password,

    };

    UserFunctions.registerParent(add).then((res) => {
      history.push('/login');
    });
    }
  };

  return (
    <div>
      <Navbar /><br></br><br></br><br></br>
      <div className="card bg-light">
        <article className="card-body w-100 mx-auto" style={{ maxWidth: 500 }}>
          <h4 className="card-title mt-3 text-center">
            Create User Account
          </h4>
          <p className="text-center">Get started with your account</p>
          <form onSubmit={onRegister}>
            <div className="form-group input-group">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  <i className="fa fa-user"></i>
                </span>
              </div>
              <input
                type="text"
                placeholder="Full Name"
                className={classNames('form-control', {
                  'is-invalid': errors.name,
                })}
                name="name"
                ref={register({
                  required: 'this field is required.',
                  pattern: {
                    message: "name can't be blank.",
                  },
                })}></input>
              {errors.name && (
                <div className="invalid-feedback">{errors.name.message}</div>
              )}
            </div><br></br>

            <div className="form-group input-group">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  <i className="fa fa-envelope"></i>
                </span>
              </div>
              <input
                type="text"
                className={classNames('form-control', {
                  'is-invalid': errors.email,
                })}
                placeholder="E-mail Address"
                name="email"
                ref={register({
                  required: 'this field is required.',
                  pattern: {
                    value: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                    message: 'please enter a valid e-mail address.',
                  },
                })}></input>
              {errors.email && (
                <div className="invalid-feedback">{errors.email.message}</div>
              )}
            </div><br></br>

            <div className="form-group input-group">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  <i className="fa fa-phone"></i>
                </span>
              </div>
              <select className="custom-select" style={{ maxWidth: 80 }}>
                <option selected="">+91</option>
              </select>
              <input
                className={classNames('form-control', {
                  'is-invalid': errors.mobile,
                })}
                name="mobile"
                placeholder="Mobile Number"
                type="text"
                ref={register({
                  required: 'this field is required.',
                  pattern: {
                    value: / /,
                    message: 'please enter a valid 10 digit mobile number.',
                  },
                })}></input>
              {errors.mobile && (
                <div className="invalid-feedback">{errors.mobile.message}</div>
              )}
            </div><br></br>

            <div className="form-group input-group">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  <i className="fa fa-lock"></i>
                </span>
              </div>
              <input
                type="password"
                className={classNames('form-control', {
                  'is-invalid': errors.password,
                })}
                placeholder="Enter Your Password"
                name="password"
                ref={register({
                  required: 'this field required.',
                  pattern: {
                    value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/,
                    message:
                      '6 to 20 characters which contain at least one numeric digit, one uppercase and one lowercase letter.',
                  },
                })}></input>
              {errors.password && (
                <div className="invalid-feedback">
                  {errors.password.message}
                </div>
              )}
            </div><br></br>

            <div className="form-group input-group">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  <i className="fa fa-lock"></i>
                </span>
              </div>
              <input
                type="password"
                className={classNames('form-control', {
                  'is-invalid': errors.confirm_password,
                })}
                placeholder="Confirm Your Password"
                name="confirm_password"
                ref={register({
                  required: 'this field required.',
                  validate: (value) =>
                    value === getValues('password') ||
                    "password doesn't match.",
                })}></input>
              {errors.confirm_password && (
                <div className="invalid-feedback">
                  {errors.confirm_password.message}
                </div>
              )}
            </div><br></br>

            <div className="form-group">
              <button  type="submit" className="btn btn-primary btn-block">
                create Account
              </button>
            </div>
            <p className="text-center">
              Have an account? <a href="/login">Log In</a>
            </p>
          </form>
        </article>
      </div><Footer />
    </div>
  );
};

export default Parent;
