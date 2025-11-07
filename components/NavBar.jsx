'use client';
import logo from '@/public/Logo/Logo.png';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LuCalendarClock } from "react-icons/lu";


const NavBar = () => {

  /* ----------------Get-Current-Pathname-------------- */
  const pathName = usePathname();
  /* ---------------------Nav-Links-------------------- */
  const navLinks = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "Company", path: "/company" },
    { id: 3, name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="container flex justify-between items-center py-6 text-white">

      {/* ----------------Logo-Section---------------- */}
      <div>
        <Image className='' width={200} height={100} src={logo} alt="Logo" />
      </div>
      {/* ----------------Menu-Section---------------- */}
      <div className='flex items-center gap-5'>
        {/* -----------------Menu Links--------------- */}
        <ul className='flex gap-3'>
          {navLinks.map(link => (
            <li key={link.id}>
              <Link href={link?.path} className={pathName === link?.path ? 'font-bold text-white' : 'text-gray-400'}>
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
        {/* ------------------- Button----------------- */}
        <button className='flex items-center gap-2 button'><LuCalendarClock /> Book A Call</button>
      </div>

    </nav>
  );
};

export default NavBar;