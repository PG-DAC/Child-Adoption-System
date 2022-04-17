import React from 'react';
import { useHistory } from 'react-router-dom';
import '../../login.css';
import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';
import UserFunctions from '../../Axios/UserAxios';
import { useForm } from 'react-hook-form';
import classNames from 'classnames';

const Login = () => {
  const history = useHistory();

  const { register, errors } = useForm();

  const onLogin = (e) => {
    e.preventDefault()
    const email = e.target.elements.email.value;
    const pass = e.target.elements.password.value;

    // console.log(email)
    const emailandpass = {
      email: email,
      password: pass,
    };

   
    UserFunctions.login(emailandpass).then((res) => {
      console.log(res.data);
      console.log('hii');
      sessionStorage.setItem('user', JSON.stringify(res.data));
      if (res.data.role === 'ADMIN'){
      alert('Login Succesfully')
       history.push('/admin-dash');
    }
      else if(res.data.role === 'PARENT') {
      alert('Login Succesfully')
       history.push('/parentdash');
      }   else{
        alert('Please enter valid Email or Password')
    }
    });
  };

  return (
    <div>
      <Navbar />
      <br></br><br></br><br></br>
      <div id="login">
        <h3 className="text-center text-Black pt-5">Login form</h3>
        <div className="container">
          <div
            id="login-row"
            className="row justify-content-center align-items-center">
            <div id="login-column" className="col-md-6">
              <div id="login-box" className="col-md-12">
                <form
                  id="login-form"
                  className="form"
                  onSubmit={onLogin}>
                
                  <h3 className="text-center text-info">Login</h3>
                  <div className="form-group">
                    <label htmlFor="email" className="text-info">
                      Email Address :
                    </label>
                    <br></br>
                    <input
                      type="text"
                      className={classNames('form-control', {
                        'is-invalid': errors.email,
                      })}
                      id="username"
                      name="email"
                      ref={register({
                        required: 'this field is required.',
                        pattern: {
                          value: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                          message: 'please enter a valid e-mail address.',
                        },
                      })}></input>
                    {errors.email && (
                      <div className="invalid-feedback">
                        {errors.email.message}
                      </div>
                    )}
                  </div>
                  <div className="form-group">
                    <label htmlFor="password" className="text-info">
                      Password :
                    </label>
                    <br></br>
                    <input
                      type="password"
                      className={classNames('form-control', {
                        'is-invalid': errors.password,
                      })}
                      name="password"
                      id="password"
                      ref={register({
                        required: 'this field is required.',
                       
                      })}></input>
                    {errors.password && (
                      <div className="invalid-feedback">
                        {errors.password.message}
                      </div>
                    )}
                  </div>
                  <div className="form-group">
                    <label htmlFor="remember-me" className="text-info">
                      <span>Remember me</span> 
                      <span>
                        <input
                          id="remember-me"
                          name="remember-me"
                          type="checkbox"></input>
                      </span>
                    </label>
                    <br></br>
                    <input
                      style={{ marginLeft: 190 }}
                      type="submit"
                      name="submit"
                      className="btn btn-info btn-md"
                      value="login"></input>
                      
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div><Footer />
    </div>
  );
};
export default Login;
