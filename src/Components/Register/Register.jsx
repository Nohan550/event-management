import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Register = () => {

  const {createUser} =useContext(AuthContext)
  const handleRegister = e =>{
        e.preventDefault()
         const name =e.target.name.value;
         const email =e.target.Email.value;
         const password =e.target.Password.value;

        //  if(password.length <6){
        //   console.log('password must be 6 characters or more')
        //  }
      createUser(email,password,name)
       .then(result =>{
         console.log(result.user)
       })
      .catch((error) => {
       const errorCode = error.code;
       const errorMessage = error.message;
       console.log(errorCode,errorMessage) 
       // ..
     })
  }
    return (
        <div className="hero min-h-[559px] bg-base-200">
        <div className="hero-content flex-col ">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Register now!</h1>
      
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
             <form onSubmit={handleRegister} className="card-body">
             <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" placeholder="name" name="name" className="input input-bordered" required />
              </div>

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
                  <p className="label-text-alt text-base">Already Registered? Please <Link className="link link-hover text-teal-600 font-semibold" to="/login">Login</Link></p>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-accent text-white">Register</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default Register;