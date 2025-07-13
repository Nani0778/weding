import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";
import { db } from "../firebase/firebaseConfig";
import { collection, addDoc } from "firebase/firestore";

const useFirebase = false; // Set true for Firebase, false for Google Sheets

const RSVP = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (useFirebase) {
      await addDoc(collection(db, "rsvps"), formData);
      alert("RSVP submitted to Firebase!");
    } else {
      fetch("https://sheetdb.io/api/v1/YOUR_SHEETDB_API", {
        method: "POST",
        body: JSON.stringify({ data: formData }),
        headers: { "Content-Type": "application/json" },
      }).then(() => alert("RSVP submitted to Google Sheets!"));
    }
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="py-12 px-6 bg-pink-50 text-center">
      <h3 className="text-3xl font-semibold mb-4 text-pink-700">RSVP</h3>
      <p className="mb-6 text-gray-600">Let us know if you'll be joining us!</p>
      <form onSubmit={handleSubmit} className="max-w-xl mx-auto grid gap-4">
        <input name="name" type="text" placeholder="Your Name" required value={formData.name} onChange={handleChange}
               className="px-4 py-2 rounded border border-gray-300" />
        <input name="email" type="email" placeholder="Email Address" required value={formData.email} onChange={handleChange}
               className="px-4 py-2 rounded border border-gray-300" />
        <textarea name="message" placeholder="Message / Wishes" rows={4} value={formData.message} onChange={handleChange}
                  className="px-4 py-2 rounded border border-gray-300"></textarea>
        <Button type="submit" className="bg-pink-600 hover:bg-pink-700 text-white text-lg px-6 py-2 rounded-full">
          <Send className="inline w-5 h-5 mr-2" /> Send RSVP
        </Button>
      </form>
    </section>
  );
};

export default RSVP;
