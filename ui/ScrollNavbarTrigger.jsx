'use client';
import { useEffect, useState } from "react";
import BottomNav from "./BottomNav";

const ScrollNavbarTrigger = () => {

  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {

    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      };
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return isScrolled ? <BottomNav></BottomNav> : null;
};

export default ScrollNavbarTrigger;