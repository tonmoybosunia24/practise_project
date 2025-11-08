'use client';
import { motion } from "motion/react"
import logo from '@/public/Logo/Menu.png';
import { usePathname } from "next/navigation";
import Link from "next/link";
import { LuCalendarClock } from "react-icons/lu";
import Image from "next/image";

const BottomNav = () => {

  /* ----------------Get-Current-Pathname-------------- */
  const pathName = usePathname();
  /* ---------------------Nav-Links-------------------- */
  const navLinks = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "Company", path: "/company" },
    { id: 3, name: "Contact", path: "/contact" },
  ];

  return (
    <motion.div
      className="fixed bottom-0 left-1/2 transform -translate-x-1/2 z-50"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: -30 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center bg-quaternary border-2 border-[#181962] rounded-full p-1.5 pl-2">
        <div>
          <Image width={40} height={40} src={logo} alt="Logo" />
        </div>
        <nav className='flex items-center gap-[30px]'>
          <ul className='flex gap-[30px]'>
            {navLinks.map(link => (
              <li key={link.id}>
                <Link href={link?.path} className={pathName === link?.path ? 'font-bold text-white' : 'text-gray-400'}>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          {/* ------------------- Button----------------- */}
          <a className='flex items-center gap-2 button'><LuCalendarClock /> Book A Call</a>
        </nav>
      </div>

    </motion.div>
  );
};

export default BottomNav;