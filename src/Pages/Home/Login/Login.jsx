import { Link } from 'react-router-dom';
import login from '../../../assets/assets/images/login/login.svg'
import { useContext } from 'react';
import { AuthContext } from '../../../Providers/AuthProvider';

const Login = () => {
    const {signIn} = useContext(AuthContext);
    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log( email, password);
        signIn(email,password)
        .then(res => {console.log(res.user)})
        .then(err =>{console.log(err);})
    }
    return (
        <div className="hero min-h-screen">
  <div className="hero-content  flex-row gap-20">
    <div className="w-1/2 ">
      <img className='w-4/5' src={login} alt="" />
    </div>
    <div className="card-body flex h-screen items-center border w-1/2">
        <h1 className='text-5xl font-bold'>Login</h1>
      <form onSubmit={handleLogin}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password' placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <input type="submit" value="Sign In"  className='bg-[#FF3811] py-2 rounded-md text-white font-semibold text-md'/>
        </div>
      </form>
      <h3 className='text-center my-2'>New to car Doctor? <Link to={'/signup'} className='text-orange-600 font-bold hover:link'>  Sign Up</Link></h3>
    </div>
  </div>
</div>
    );
};

export default Login;