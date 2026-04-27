//  import React from 'react';
//  import { Link } from 'react-router-dom';
// import '../../styles/auth-shared.css';

// const ChooseRegister = () => {
//   return (
    
//     <div className="auth-page-wrapper" style={{padding:"16px", backgroundColor:"black"}}>
      
//       <div className="auth-card" role="region" aria-labelledby="choose-register-title"  >
        
//         <header>
//           <h1 id="choose-register-title" className="auth-title">Register</h1>
//           <p className="auth-subtitle">Pick how you want to join the platform.</p>
//         </header>
//         <div style={{display:'flex', flexDirection:'column', gap:'16px'}}>
//           <Link to="/user/register" className="auth-submit" style={{textDecoration:'none'}}>
//             Register as normal user
//           </Link>
//           <Link to="/food-partner/register" className="auth-submit" style={{textDecoration:'none'}}>
//             Register as food partner
//           </Link>
//         </div>
//         <div className="auth-alt-action" style={{marginTop:'4px'}}>
//           Already have an account? <Link to="/user/login">Sign in</Link>
//         </div>
//       </div>
//     </div>
    
//   );
// };

// export default ChooseRegister;






import React from "react";
import { Link } from "react-router-dom";

const ChooseRegister = () => {
  return (
    <div className="min-h-screen flex flex-col  gap-8 items-center justify-center bg-gradient-to-r from-red-500 via-orange-400 to-yellow-300 p-6">
      
      {/* Brand - Outside Card */}
      <h1 className="text-8xl font-extrabold text-white mb-15 drop-shadow-lg tracking-wide text-center">
        🍴 Zomato Food Reel
      </h1>

      {/* Auth Card */}
      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8  flex flex-col gap-10 h-70">
        
        {/* Title & Subtitle */}
        <header className="text-center">
          <h2
           // id="choose-register-title"
            className="text-2xl font-semibold text-gray-800"
          >
            Register
          </h2>
          <p className="text-gray-600 text-sm">
            Pick how you want to join the platform.
          </p>
        </header>

        {/* Register Options */}
        <div className="flex flex-col gap-13">
          <Link
            to="/user/register"
            className=" text-white text-center py-3 rounded-xl font-medium shadow-md hover:bg-green-400 transition"
          >
            Register as Normal User
          </Link>
          <Link
            to="/food-partner/register"
            className=" text-white text-center py-3 rounded-xl font-medium shadow-md hover:bg-green-400 transition"
          >
            Register as Food Partner
          </Link>
        </div>

        {/* Sign in */}
        <div className="text-center text-sm text-gray-700 ">
          Already have an account?{" "}
          <Link
            to="/user/login"
            className="text-blue-500 font-medium hover:bg-blue-300 transition"
          >
            Sign in
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ChooseRegister;
