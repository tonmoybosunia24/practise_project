import logo from '@/public/Logo/Logo.png';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-quaternary text-white">
      {/* -------------------Footer Container------------------- */}
      <div className='container margin-section-lg'>
        {/* -----------------------Footer-Top------------------- */}
        <div className='flex justify-between items-center'>
          {/* ---------------------Left-Side-------------------- */}
          <div className='space-y-7 pb-14 text-lg'>
            <Image src={logo} alt="Logo" />
            <p className='text-tertiary'>472B,Olivia Four, Rangpur <br />
              80-309 Gdansk, Bangladesh
            </p>
            <p>blackdevs@agency</p>
            <div className='flex gap-5'>
              <Link className='border-b' href="">Linkedin</Link>
              <Link className='border-b' href="">Instagram</Link>
              <Link className='border-b' href="">Behance</Link>
            </div>
          </div>
          {/* ---------------------Right-Side------------------- */}
          <div className='space-y-9'>
            <div className='flex gap-4'>
              <div className='relative w-8 h-8 border border-white rounded-full'>
                <div className='absolute bottom-0.5 -left-0.5 w-3 h-3 bg-blue-600 rounded-full'></div>
              </div>
              <div>
                <h3 className='text-xl'>Websites</h3>
                <p className='text-tertiary'>Get awesome products from our UI/UX team</p>
              </div>
            </div>
            <div className='flex gap-4'>
              <div className='relative w-8 h-8 border border-white rounded-full'>
                <div className='absolute top-0.5 -right-0.5 w-3 h-3 bg-blue-600 rounded-full'></div>
              </div>
              <div>
                <h3 className='text-xl'>Branding</h3>
                <p className='text-tertiary'>Let’s make some branding and communication solutions</p>
              </div>
            </div>
            <div className='flex gap-4'>
              <div className='relative w-8 h-8 border border-white rounded-full'>
                <div className='absolute bottom-0.5 -right-0.5 w-3 h-3 bg-blue-600 rounded-full'></div>
              </div>
              <div>
                <h3 className='text-xl'>Development</h3>
                <p className='text-tertiary'>Let's develop exceptional digital products & services</p>
              </div>
            </div>
          </div>
        </div>
        {/* ---------------------Footer-Bottom------------------ */}
        <div className='pt-5 border-t border-t-[#F8F8FF/12] text-tertiary text-center'><p>©2025 BlackDevs, All rights reserved.</p></div>
      </div>
    </footer>
  );
};
export default Footer;