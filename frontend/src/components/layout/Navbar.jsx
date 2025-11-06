import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between px-8 py-4 bg-black/30 backdrop-blur-md shadow-md">
      {/* Logo / App Name */}
      <Link to = "/home" className="text-2xl font-bold text-white">ClubManagement</Link>

      {/* Nav Links */}
      <div className="space-x-6 text-gray-200">
        <Link to="/home" className="hover:text-white transition">Home</Link>
        <Link to="/qna" className="hover:text-white transition">Q&A</Link>
        <Link to="/profile" className="hover:text-white transition">Profile</Link>
      </div>
    </nav>
  );
}
