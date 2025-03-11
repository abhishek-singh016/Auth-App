// import {Link} from 'react-router-dom';

// export default function Header() {
//   return (
//     <div className='bg-slate-200'>
//         <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
//             <Link to='/'>
//             <h1 className='font-bold'>Auth App</h1>
//             </Link>
//             <ul className='flex gap-4'>
//                 <Link to='/'>
//                 <li>Home</li>
//                 </Link>
                
//                 <Link to='/about'>
//                 <li>About</li>
//                 </Link>
                
//                 <Link to='/sign-in'>
//                 <li>Sign In</li>
//                 </Link>
            
//             </ul>
//         </div>
//     </div>
//   )
// }


import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div className="bg-slate-200">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        {/* Logo */}
        <Link to="/">
          <h1 className="font-bold text-xl">Auth App</h1>
        </Link>

        {/* Navigation */}
        <ul className="flex gap-6 text-lg">
          <li>
            <Link to="/" className="hover:text-blue-600 transition duration-200">Home</Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-blue-600 transition duration-200">About</Link>
          </li>
          <li>
            <Link to="/sign-in" className="hover:text-blue-600 transition duration-200">Sign In</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

