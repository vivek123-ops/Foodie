import React from "react";

const Footer = () => {
  return (
    <>
      {" "}
      <footer className="pb-3 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Foodie Partner Dashboard
      </footer>
    </>
  );
};

export default Footer;
