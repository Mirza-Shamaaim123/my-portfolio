"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function ReadCvModal({ buttonBgColor, buttonTextColor }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          type="button"
          className="
    inline-flex rounded-lg px-4 py-2 items-center font-medium
    cursor-pointer transition-colors duration-300
    text-white dark:text-white
    hover:text-green-500
  "
        >
          READ CV
        </button>
      </DialogTrigger>

      <DialogContent className="w-[90vw] max-w-6xl bg-[#0c0c0c] text-white p-8 rounded-2xl border border-green-500/20 shadow-xl max-h-[85vh] overflow-y-auto scrollbar-hide">
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold tracking-wide">
            <span className="text-white">SHAMAAIM</span>{" "}
            <span className="text-gray-300">NAEEM</span>
          </DialogTitle>
        </DialogHeader>

        <div className="mt-6 space-y-10">

          {/* Contact */}
          <div className="space-y-1 text-gray-300">
            <p>
              <span className="font-semibold text-white">Email:</span>{" "}
              shamaaimmirza902@gmail
            </p>
            <p>
              <span className="font-semibold text-white">Phone:</span>{" "}
              +92 3700615423
            </p>
          </div>

          {/* Summary */}
          <div>
            <h3 className="font-semibold text-white text-lg">Summary</h3>
            <p className="text-gray-300 leading-relaxed mt-1">
              I am a web developer with more than enough experience writing
              HTML, CSS, and JS. I'm motivated, result-focused and seeking a
              successful team-oriented company with opportunity to grow.
            </p>
          </div>

          {/* Experience */}
          <div>
            <h3 className="text-green-500 font-semibold text-xl tracking-wide">
              EXPERIENCE
            </h3>

            <div className="mt-6 space-y-8">

              {/* Internship - X Logic Solution */}
              <div className="flex justify-between">
                <div>
                  <p className="text-lg font-semibold text-white">X Logic Solution</p>
                  <p className="text-gray-400">Faisalabad, Pakistan</p>
                  <p className="text-gray-400">Sep 2025 – Present</p>
                </div>
                <div className="text-right">
                  <p className="text-gray-200 font-semibold">Backend Developer</p>
                  <p className="text-gray-400 text-sm">Ongoing</p>
                </div>
              </div>

            </div>
          </div>


          {/* EDUCATION */}
          <div>
            <h3 className="text-green-500 font-semibold text-xl tracking-wide">
              EDUCATION
            </h3>

            <div className="mt-6 space-y-8">

              <div className="flex justify-between">
                <div>
                  <p className="text-lg font-semibold text-white">
                    Govt. Municipal Graduate College
                  </p>
                  <p className="text-gray-400">Faisalabad, Pakistan</p>
                  <p className="text-gray-400">Aug 2020 – Jul 2022</p>
                </div>
                <p className="text-gray-300">ICS</p>
              </div>

              <div className="flex justify-between">
                <div>
                  <p className="text-lg font-semibold text-white">
                    The Arqam School
                  </p>
                  <p className="text-gray-400">Faisalabad, Pakistan</p>
                  <p className="text-gray-400">Mar 2018 – Jun 2020</p>
                </div>
                <p className="text-gray-300">Matriculation</p>
              </div>

            </div>
          </div>

          {/* PROJECTS */}
          <div>
            <h3 className="text-green-500 font-semibold text-xl tracking-wide">
              PROJECTS
            </h3>

            <p className="mt-3 text-gray-300 leading-relaxed">
              Are you curious about what happens when creativity collides with
              technical prowess? Dive into my portfolio and let the projects do
              the talking. You might just discover your next go-to web wizard in
              the process!
            </p>
          </div>

          {/* SKILLS */}
          <div>
            <h3 className="text-green-500 font-semibold text-xl tracking-wide">
              SKILLS
            </h3>

            <ul className="mt-3 space-y-1 text-gray-200">
              <li>Laravel</li>
              <li>PHP</li>
              <li>Next.js</li>
              <li>React</li>
              <li>Tailwind CSS</li>
            </ul>
          </div>

          {/* INTERESTS */}
          <div>
            <h3 className="text-green-500 font-semibold text-xl tracking-wide">
              INTERESTS
            </h3>

            <p className="mt-3 text-gray-300">
              Badminton, programming, Gaming, Music
            </p>
          </div>

        </div>
      </DialogContent>
    </Dialog>
  );
}
