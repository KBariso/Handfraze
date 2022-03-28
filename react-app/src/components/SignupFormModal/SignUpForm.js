import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Redirect } from 'react-router-dom';
import { signUp } from '../../store/session';
import { useHistory } from "react-router-dom";
import { useEffect } from 'react';
import { login } from '../../store/session';
import './SignUpForm.css';

const SignUpForm = () => {
  const [errors, setErrors] = useState([]);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();
  const history = useHistory();

  const onSignUp = async (e) => {
    e.preventDefault();

    if (!username.length) {
      setErrors(["Please provide a username"])
    } else if (!email.length) {
      setErrors(["Please enter an email"])
    } else if (!password.length) {
      setErrors(["Please enter a password"])
    } else if (!repeatPassword.length) {
      setErrors(["Please re-enter your password"])
    } else if (password !== repeatPassword) {
      setErrors(["Password and re-entered password do not match!"])
    } else {
      setErrors([])
    }




    if (password === repeatPassword) {
      const data = await dispatch(signUp(username, email, password));
      if (data) {
        setErrors(data)
      }
    }



  };

//   useEffect(() => {
//     const errors = [];
//     if (username.length <= 3) {
//       setErrors(["Requested Username is too short"])
//     }
//   setErrors(errors)

// },[username])



  const demoLogin = (e) => {
    e.preventDefault();
    const email = "demo@aa.io";
    const password = "password";
    dispatch(login(email, password));
    history.push("/home/about")
  }

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/home' />;
  }

  return (
    <div className='LoginFormContainer'>

    <form className='loginForm' onSubmit={onSignUp}>
      <div>
        {errors.map((error, ind) => (
          <div key={ind}>{error}</div>
        ))}
      </div>
      <div className="input-parent">
        <label className='loginLabel'>User Name</label>
        <input
        className='inputLogin'
          type='text'
          name='username'
          onChange={updateUsername}
          value={username}
        ></input>
      </div>
      <div className="input-parent">
        <label>Email</label>
        <input
         className='inputLogin'
          type='email'
          name='email'
          onChange={updateEmail}
          value={email}
        ></input>
      </div>
      <div className="input-parent">
        <label>Password</label>
        <input
        className='inputLogin'
          type='password'
          name='password'
          onChange={updatePassword}
          value={password}
        ></input>
      </div>
      <div className="input-parent">
        <label>Repeat Password</label>
        <input
        className='inputLogin'
          type='password'
          name='repeat_password'
          onChange={updateRepeatPassword}
          value={repeatPassword}
          required={true}
        ></input>
      </div>
      <div className='ModalSignupDemo'>

      <button className='buttonLogin'type='submit'>Sign Up</button>
       <button className='demoButtonLogin' type="submit" onClick={demoLogin}>
                    User Demo Login
                </button>
      </div>
    </form>
    </div>
  );
};

export default SignUpForm;
