import React from 'react'
//icones
import { BiUser, BiBriefcase, BiBookAlt, BiEnvelope, BiHome } from "react-icons/bi";
import { Link } from "react-scroll";

export default function Navbar() {
  return (
    <nav className='navbar'>
        <div className='navbar_container'>
            <div className='navbar_style'>
              <div className='navbar_button'>
                <Link to='accueil' activeClass='active' spy={true} smooth={true} className='navbar_icones'>
                <BiHome />
                </Link>
                <Link to='presentation' activeClass='active' spy={true} smooth={true} className='navbar_icones'>
                <BiUser />
                </Link>
                <Link to='skills' activeClass='active' spy={true} smooth={true} className='navbar_icones'>
                <BiBookAlt/>
                </Link>
                <Link to='work' activeClass='active' spy={true} smooth={true} className='navbar_icones'>
                <BiBriefcase />
                </Link>
                <Link to='contact' activeClass='active' spy={true} smooth={true} className='navbar_icones'>
                <BiEnvelope />
                </Link>
                </div>
            </div>
        </div>
    </nav>
  )
}
