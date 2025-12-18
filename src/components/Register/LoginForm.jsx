// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// export default function LoginForm() {
//   const [email, setEmail] = useState("");
//   const [phone, setPhone] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (!email || !phone) {
//       alert("Please fill all fields");
//       return;
//     }

//     console.log("Login Data:", { email, phone });
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-sky-100 to-sky-300 px-4">
//       <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-6 sm:p-8">
//         <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
//           Login
//         </h2>

//         <form onSubmit={handleSubmit} className="space-y-5">
//           {/* Email */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               Email Address
//             </label>
//             <input
//               type="email"
//               placeholder="Enter your email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//               required
//             />
//           </div>

//           {/* Phone */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               Phone Number
//             </label>
//             <input
//               type="tel"
//               placeholder="Enter phone number"
//               value={phone}
//               onChange={(e) => setPhone(e.target.value)}
//               className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//               required
//             />
//           </div>

//           {/* Forgot Password */}
//           <div className="flex justify-end">
//             <Link
//               to="/forgot-password"
//               className="text-sm text-blue-600 hover:underline"
//             >
//               Forgot password?
//             </Link>
//           </div>

//           {/* Button */}
//           <button
//             type="submit"
//             className="w-full  bg-[#0e276b] hover:bg-blue-700 text-white rounded-md font-semibold transition"
//           >
//             Login
//           </button>
//         </form>

//         {/* Signup link */}
//         <p className="mt-6 text-center text-sm text-gray-600">
//           Don’t have an account?{" "}
//           <Link
//             to="/athletes/register"
//             className="text-blue-600 font-medium hover:underline"
//           >
//             Register Now
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// }

import React, { useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  // Dummy data (example)
  const dummyUsers = [
    { email: "archana@example.com", phone: "9876543210" },
    { email: "john@example.com", phone: "1234567890" },
    { email: "alice@example.com", phone: "9998887777" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !phone) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please fill all fields!",
      });
      return;
    }

    // Check against dummy data
    const userFound = dummyUsers.find(
      (user) => user.email === email && user.phone === phone
    );

    if (userFound) {
      Swal.fire({
        icon: "success",
        title: "Login Successful",
        text: `Welcome back, ${email}!`,
        timer: 2000,
        showConfirmButton: false,
      });

      // Optional: reset fields
      setEmail("");
      setPhone("");
    } else {
      Swal.fire({
        icon: "error",
        title: "Invalid Credentials",
        text: "Email or Phone number is incorrect!",
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-sky-100 to-sky-300 px-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-6 sm:p-8">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
          Login
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number
            </label>
            <input
              type="tel"
              placeholder="Enter phone number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Forgot Password */}
          <div className="flex justify-end">
            <Link
              to="/forgot-password"
              className="text-sm text-blue-600 hover:underline"
            >
              Forgot password?
            </Link>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-[#0e276b] hover:bg-blue-700 text-white rounded-md font-semibold transition"
          >
            Login
          </button>
        </form>

        {/* Signup link */}
        <p className="mt-6 text-center text-sm text-gray-600">
          Don’t have an account?{" "}
          <Link
            to="/athletes/register"
            className="text-blue-600 font-medium hover:underline"
          >
            Register Now
          </Link>
        </p>
      </div>
    </div>
  );
}
