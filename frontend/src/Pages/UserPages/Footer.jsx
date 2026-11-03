import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      {" "}
      <footer className="border-t border-gray-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <Link to="/user/home" className="text-xl font-extrabold">
            Food<span className="text-primary">ie.</span>
          </Link>

          <p className="text-sm text-muted">
            Fresh food, happy moments. © {new Date().getFullYear()} Foodie.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
