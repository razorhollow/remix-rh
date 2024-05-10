import { Link } from "@remix-run/react";
export default function Thanks() {
  return (
    <div className="bg-gray-100 p-4 rounded-md shadow-lg max-w-md mx-auto mt-6">
      <h2 className="text-lg text-center font-semibold text-gray-800">Thank You for Reaching Out!</h2>
      <p className="text-gray-600 text-center mt-2">
        We appreciate your interest. Our team will get back to you as soon as possible to assist with your inquiries.
      </p>
      <div className="mt-4 flex justify-center">
        <Link to="/">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Return Home
          </button>
        </Link>
      </div>
    </div>
  );
}