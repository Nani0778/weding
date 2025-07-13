// App.js
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CalendarHeart, GalleryHorizontalEnd, Heart, Send } from "lucide-react";

const App = () => {
  return (
    <div className="font-sans bg-pink-50 text-gray-800">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-pink-100 via-pink-200 to-pink-100 text-center p-6">
        <h1 className="text-4xl md:text-6xl font-bold text-pink-600 mb-4">You're Invited!</h1>
        <h2 className="text-2xl md:text-3xl text-gray-700">Tanmay & Ananya</h2>
        <p className="text-lg mt-2 text-gray-600">Together with their families invite you to celebrate their wedding</p>
        <div className="mt-6">
          <Button className="bg-pink-600 hover:bg-pink-700 text-white text-lg px-6 py-2 rounded-full">
            Save the Date - 20 Dec 2025
          </Button>
        </div>
      </section>

      {/* Couple Section */}
      <section className="py-12 px-6 bg-white text-center">
        <h3 className="text-3xl font-semibold mb-6 text-pink-500">Meet the Couple</h3>
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          <Card className="w-64 shadow-lg">
            <CardContent className="p-4">
              <img src="/groom.jpg" alt="Groom" className="rounded-full w-32 h-32 mx-auto mb-4" />
              <h4 className="text-xl font-bold">Tanmay Mukkerla</h4>
              <p className="text-gray-600">The Groom</p>
            </CardContent>
          </Card>
          <Heart className="text-pink-400 w-8 h-8 hidden md:block" />
          <Card className="w-64 shadow-lg">
            <CardContent className="p-4">
              <img src="/bride.jpg" alt="Bride" className="rounded-full w-32 h-32 mx-auto mb-4" />
              <h4 className="text-xl font-bold">Ananya Reddy</h4>
              <p className="text-gray-600">The Bride</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Event Details */}
      <section className="py-12 px-6 bg-pink-100 text-center">
        <h3 className="text-3xl font-semibold mb-6 text-pink-700">Event Details</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <CardContent className="p-6">
              <CalendarHeart className="mx-auto text-pink-600 w-10 h-10 mb-2" />
              <h4 className="text-xl font-bold">Wedding Ceremony</h4>
              <p className="text-gray-700">20th Dec, 2025 • 6:00 PM</p>
              <p className="text-gray-600">Venue: Taj Convention, Hyderabad</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <CalendarHeart className="mx-auto text-pink-600 w-10 h-10 mb-2" />
              <h4 className="text-xl font-bold">Reception</h4>
              <p className="text-gray-700">21st Dec, 2025 • 7:00 PM</p>
              <p className="text-gray-600">Venue: Park Hyatt, Hyderabad</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <CalendarHeart className="mx-auto text-pink-600 w-10 h-10 mb-2" />
              <h4 className="text-xl font-bold">Haldi & Mehendi</h4>
              <p className="text-gray-700">19th Dec, 2025 • 11:00 AM</p>
              <p className="text-gray-600">At Home, Kukatpally</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-12 px-6 bg-white text-center">
        <h3 className="text-3xl font-semibold mb-6 text-pink-600">Gallery</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <img src="/gallery1.jpg" alt="Gallery 1" className="rounded-xl shadow-md" />
          <img src="/gallery2.jpg" alt="Gallery 2" className="rounded-xl shadow-md" />
          <img src="/gallery3.jpg" alt="Gallery 3" className="rounded-xl shadow-md" />
          <img src="/gallery4.jpg" alt="Gallery 4" className="rounded-xl shadow-md" />
        </div>
      </section>

      {/* RSVP Section */}
      <section className="py-12 px-6 bg-pink-50 text-center">
        <h3 className="text-3xl font-semibold mb-4 text-pink-700">RSVP</h3>
        <p className="mb-6 text-gray-600">Let us know if you'll be joining us on our special day.</p>
        <form className="max-w-xl mx-auto grid gap-4">
          <input
            type="text"
            placeholder="Your Name"
            className="px-4 py-2 rounded border border-gray-300"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="px-4 py-2 rounded border border-gray-300"
          />
          <textarea
            placeholder="Message / Wishes"
            rows={4}
            className="px-4 py-2 rounded border border-gray-300"
          ></textarea>
          <Button className="bg-pink-600 hover:bg-pink-700 text-white text-lg px-6 py-2 rounded-full">
            <Send className="inline w-5 h-5 mr-2" />
            Send RSVP
          </Button>
        </form>
      </section>

      {/* Footer */}
      <footer className="bg-pink-600 text-white text-center p-4">
        <p>© 2025 Tanmay & Ananya Wedding. Designed with 💖 by Praneet.</p>
      </footer>
    </div>
  );
};

export default App;
