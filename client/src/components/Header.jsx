import {Link} from 'react-router-dom';
import {useSelector} from 'react-redux';

export default function Header() {
const{currentUser} = useSelector(state => state.user);
  return (
    <div className='bg-slate-200'>
        <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
            <Link to='/'>
            <h1 className='font-bold'>Auth App</h1>
            </Link>
            <ul className='flex gap-4'>
                <Link to='/'>
                <li>Home</li>
                </Link>

                <Link to='/about'>
                <li>About</li>
                </Link>

                <Link to='/profile'>
                {currentUser ? (
                  <img src={currentUser.profilePicture} alt="profile"  className= 'h-7 w-7 rounded-full object-cover'/>
                ) : (
                    <li>Sign In</li>
                  )
                }

                </Link>

            </ul>
        </div>
    </div>
  )
}

// import { Link } from "react-router-dom";
// import { useSelector } from "react-redux";

// export default function Header() {
//   const { currentUser } = useSelector((state) => state.user);
//   return (
//     <div className="bg-slate-200">
//       <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
//         {/* Logo */}
//         <Link to="/">
//           <h1 className="font-bold text-xl">Auth App</h1>
//         </Link>

//         {/* Navigation */}
//         <ul className="flex gap-6 text-lg">
//           <li>
//             <Link
//               to="/"
//               className="hover:text-blue-600 transition duration-200"
//             >
//               Home
//             </Link>
//           </li>
//           <li>
//             <Link
//               to="/about"
//               className="hover:text-blue-600 transition duration-200"
//             >
//               About
//             </Link>
//           </li>
//           <li>
//             <Link
//               to="/sign-in"
//               className="hover:text-blue-600 transition duration-200"
//             >
//               {currentUser ? (
//                 <img
//                   src={currentUser.profilePicture}
//                   alt="Profile"
//                   className="w-8 h-8 rounded-full border-2 border-gray-300"
//                 />
//               ) : (
//                 "Sign In"
//               )}
//             </Link>
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// }
