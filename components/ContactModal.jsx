"use client";

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

export default function ContactModal({ isOpen, setIsOpen }) {
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="w-[90vw] max-w-md bg-[#0c0c0c] text-white p-8 rounded-2xl border border-green-500/20 shadow-xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold mb-4">Get in Touch</DialogTitle>
        </DialogHeader>

        <form
          className="space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
            alert("Message Sent! 😊");
            setIsOpen(false);
          }}
        >
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 rounded-md bg-gray-800 text-white focus:outline-none"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 rounded-md bg-gray-800 text-white focus:outline-none"
            required
          />
          <textarea
            placeholder="Your Message"
            className="w-full p-3 rounded-md bg-gray-800 text-white focus:outline-none"
            rows={4}
            required
          />
          <button
            type="submit"
            className="w-full bg-green-500 hover:bg-green-600 transition-colors duration-300 py-2 rounded-md font-semibold"
          >
            Send Message
          </button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
