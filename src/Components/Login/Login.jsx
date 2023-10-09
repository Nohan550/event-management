import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";


const Login = () => {
   const {logIn} = useContext(AuthContext)
  const location = useLocation() ;
  const navigate = useNavigate() 
   const handleLogin = e =>{
    e.preventDefault()
    const email =e.target.Email.value;
    const password =e.target.Password.value;
    logIn(email,password)
    .then( result => {
      console.log(result.user)
      navigate(location?.state ? location.state : "/") 
    })
    .catch( error => {
      console.log(error.message)
    })
   }
    return (
        <div className="hero min-h-[559px] bg-base-200">
        <div className="hero-content flex-col ">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
      
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="email" name="Email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" placeholder="password" name="Password" className="input input-bordered" required />
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