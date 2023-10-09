import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";


const Login = () => {
  const login =useContext(AuthContext)
       const handleLogin = ()=>{
             emailAndPassword()
       }
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col ">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
      
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" placeholder="password" className="input input-bordered" required />
                <label className="label">
                  <p  className="label-text-alt text-base">Don't have an acount? <Link className="link link-hover text-teal-500 font-semibold" to="/register">Register</Link></p>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-accent text-white">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default Login;