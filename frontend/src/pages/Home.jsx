import React from "react";
import Navbar from "../components/layout/Navbar";
import { PartyPopper, Megaphone } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-black">
      <Navbar />

      <div className="flex flex-1 px-6 py-4 gap-6">
        <main className="flex-1 bg-white rounded-2xl p-6 shadow-lg">
          <h2 className="text-xl text-black font-semibold mb-4 flex items-center gap-2">
            <Megaphone className="w-5 h-5 text-blue-500" />
            University Updates
          </h2>

          <div className="space-y-4">
            <div className="p-4 border rounded-xl hover:bg-blue-50">
              <h3 className="font-semibold">Annual Tech Symposium 2025</h3>
              <p className="text-sm text-gray-600">
                Explore innovation and AI breakthroughs — 25th Oct, Main Auditorium.
              </p>
            </div>
            <div className="p-4 border rounded-xl hover:bg-blue-50">
              <h3 className="font-semibold">Semester Mid Exams</h3>
              <p className="text-sm text-gray-600">
                Exams start from 20th Oct. Check university portal for schedule.
              </p>
            </div>
            <div className="p-4 border rounded-xl hover:bg-blue-50">
              <h3 className="font-semibold">New Research Grant Program</h3>
              <p className="text-sm text-gray-600">
                Apply for innovation grants by 30th Oct to fund your research.
              </p>
            </div>
            <div className="p-4 border rounded-xl hover:bg-blue-50">
              <h3 className="font-semibold">Library Digitization Initiative</h3>
              <p className="text-sm text-gray-600">
                The digital library now includes 500+ new e-books for all departments.
              </p>
            </div>
          </div>

          <h2 className="text-xl text-black font-semibold mb-4 mt-8 flex items-center gap-2">
            <PartyPopper className="w-5 h-5 text-pink-500" />
            Club Updates
          </h2>

          <div className="space-y-4">
            <div className="p-4 border rounded-xl hover:bg-pink-50">
              <h3 className="font-semibold">Dance Club Auditions</h3>
              <p className="text-sm text-gray-600">
                Join the rhythm! Auditions open on 22nd Oct, Cultural Hall.
              </p>
            </div>
            <div className="p-4 border rounded-xl hover:bg-pink-50">
              <h3 className="font-semibold">Coding Club Hackathon</h3>
              <p className="text-sm text-gray-600">
                48-hour hackathon on campus — prizes worth ₹50,000. Register by 18th Oct.
              </p>
            </div>
            <div className="p-4 border rounded-xl hover:bg-pink-50">
              <h3 className="font-semibold">Photography Exhibition</h3>
              <p className="text-sm text-gray-600">
                Explore student photography — 28th Oct, Art Gallery Hall.
              </p>
            </div>
            <div className="p-4 border rounded-xl hover:bg-pink-50">
              <h3 className="font-semibold">Drama Club Performance</h3>
              <p className="text-sm text-gray-600">
                Don’t miss “The Modern Hamlet” play — 30th Oct, Open Theatre.
              </p>
            </div>
            <div className="p-4 border rounded-xl hover:bg-pink-50">
              <h3 className="font-semibold">Music Club Jam Session</h3>
              <p className="text-sm text-gray-600">
                Open mic & jam session — 27th Oct, Student Activity Center.
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
