import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center bg-slate-700">
      <div className="text-bold text-4xl text-green-50 animate-pulse">
        404 | Page Not Found
      </div>
      <Link
        to="/"
        className="text-4xl text-gray-400 mt-24 px-4 py-3 border rounded border-slate-500"
      >
        Go back
      </Link>
    </div>
  );
};

export default Error;
