import React from "react";
import { CiMail } from "react-icons/ci";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { BsCart } from "react-icons/bs";
import { FaChevronDown } from "react-icons/fa6";
import { FaRegUser } from "react-icons/fa";
import { BiHeartSquare } from "react-icons/bi";
import { FaRegHeart } from "react-icons/fa";

import { CiSearch } from "react-icons/ci";
function Header() {
  return (
    <div>
      <header>
        <div className="bg-background hidden md:block">
          <div className="container mx-auto flex justify-between text-white items-center py-2">
            <div className="flex items-center gap-10">
              <div className="flex items-center gap-2 cursor-pointer">
                <CiMail />
                <a href="mailto:tradig@gmail.com">
                  <p>tradig@gmail.com</p>
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MdOutlinePhoneInTalk className="cursor-pointer" />
                <a href="tel:+1234567890">
                  {" "}
                  <p>+977 984514548554</p>
                </a>
              </div>
            </div>
            <div className="flex items-center gap-10">
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-2">
                  <p>English</p>
                  <FaChevronDown />
                </div>
                <div className="flex items-center gap-2">
                  <p>USD</p>
                  <FaChevronDown />
                </div>

                <div className="flex items-center gap-2">
                  <p>Login</p>
                  <FaRegUser />
                </div>
                <div className="flex items-center gap-2">
                  <p>Wishlist</p>
                  <FaRegHeart />
                </div>
              </div>

              <div>
                <BsCart />
              </div>
            </div>
          </div>
        </div>

        <section className=" flex justify-between items-center container  mx-auto ">
          <div className="flex items-center gap-24">
            <h1>HEKTO</h1>
            <nav className="flex items-center gap-5 list-none">
              <li>Home</li>
              <li>Products</li>
              <li>Blogs</li>
              <li>Shop</li>
              <li>Contact</li>
            </nav>
          </div>

          <div className="flex items-center gap-5">
            <input type="text"  className="border-2"/>

            <CiSearch />
          </div>
        </section>
      </header>
    </div>
  );
}

export default Header;
