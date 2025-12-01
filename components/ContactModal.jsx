"use client";

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { motion } from "motion/react"; // Using motion for animation

export default function ContactModal({ isOpen, setIsOpen }) {
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="w-[90vw] max-w-md bg-[#0c0c0c] text-white p-8 rounded-2xl border border-green-500/30 shadow-2xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold mb-4 text-green-400 text-center">
            Get in Touch
          </DialogTitle>
        </DialogHeader>

        <motion.form
          className="space-y-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          onSubmit={(e) => {
            e.preventDefault();
            alert("Message Sent! 😊");
            setIsOpen(false);
          }}
        >
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 rounded-md bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-1 transition-all duration-300"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 rounded-md bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-1 transition-all duration-300"
            required
          />
          <textarea
            placeholder="Your Message"
            className="w-full p-3 rounded-md bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-1 transition-all duration-300"
            rows={4}
            required
          />

          <motion.button
            type="submit"
            whileHover={{ scale: 1.03, backgroundColor: "#16a34a" }}
            whileTap={{ scale: 0.97 }}
            className="w-full bg-green-500 hover:bg-green-600 transition-colors duration-300 py-2 rounded-md font-semibold shadow-lg"
          >
            Send Message
          </motion.button>
        </motion.form>
      </DialogContent>
    </Dialog>
  );
}
