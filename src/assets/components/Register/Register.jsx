import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from "../../firebase/firebase.config";
import { useState } from "react";
import { FaRegEye,FaRegEyeSlash } from 'react-icons/fa';

const Register = () => {
    const [registerError,setRegisterError]=useState('');
    const [showPassword,setShowPassword]=useState(false);
    const [accepted,setAccepted]=useState(false);
    const handleRegister=e=>{
        
        e.preventDefault();
        const email=e.target.email.value;
        const password=e.target.password.value;
        const accepted=e.target.terms.checked;
        console.log(email,password,accepted);
        setRegisterError('');
        createUserWithEmailAndPassword(auth,email,password)
        .then(result=>{
             console.log(result.user);
        })
        .catch(error=>{
            console.log(error,'error.message');
            setRegisterError(error.message);
        })
        if(password.length<6){
            setRegisterError('password should be at least 6 character longer');
            return;
        }
        else if(!/[A-Z]/.test(password)){
            setRegisterError('There should be one upper case');
            return;
        }
        else if(!accepted){
            setRegisterError("Fisrt accept our terms and conditions");
            return;
        }
    }

    const auth = getAuth(app);

    return (
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">
       <form onSubmit={handleRegister}>
       <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <div style={{ position: 'relative' }}>
  <input
    type={showPassword ? 'text' : 'password'}
    placeholder="password"
    name="password"
    className="input input-bordered"
  />
  <span
    onClick={() => setShowPassword(!showPassword)}
    style={{
      position: 'absolute',
      top: '50%',
      right: '10px', // Adjust this value to position the icon as needed
      transform: 'translateY(-50%)',
      cursor: 'pointer',
    }}
  >
    {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
  </span>
</div>

          <label >
            <br />
            <input className="mb-4" type="checkbox" name="terns" id="terms" />
            <label htmlFor="terms" className="ml-2"><a href="">Accept terms and conditions</a></label>
            <br />
            
          </label>
          <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Register</button>
          
        </div>
       </form>
       
      </div>
      {
            registerError && <p className="text-3xl text-red-700">{registerError}</p>
          }
    </div>
  </div>
</div>
    );
};

export default Register;