import React, { useState } from 'react';

const EventTabsVertical = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [registered, setRegistered] = useState(false);

  const events = [
    {
      title: "Fashion Event",
      date: "July 15, 2025",
      location: "Grand Hall, City Center",
      description: "Showcase of the latest trends and creative fashion collections by leading designers."
    },
    {
      title: "Medical Conference",
      date: "July 25, 2025",
      location: "HealthTech Auditorium",
      description: "Focused on healthcare innovations and discussions around modern medical technology."
    },
    {
      title: "AI and Robotics Summit",
      date: "August 10, 2025",
      location: "Innovation Hub",
      description: "Explore AI-powered tools and next-gen robots shaping future industries."
    },
    {
      title: "Sustainable Tech Expo",
      date: "August 22, 2025",
      location: "EcoTech Pavilion",
      description: "Promoting green innovation and tech solutions for a sustainable future."
    }
  ];

  const handleEventClick = (event) => {
    setSelectedEvent(event);
    setRegistered(false); // Reset registration state
  };

  const handleRegistration = (response) => {
    if (response === 'yes') {
      setRegistered(true);
    } else {
      setSelectedEvent(null);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      <h2 className="text-center text-3xl font-bold mb-10 text-gray-700">Upcoming Events</h2>

      <div className="space-y-6">
        {events.map((event, index) => (
          <div
            key={index}
            className="w-full border border-gray-200 p-6 rounded-xl shadow-sm hover:bg-blue-50 cursor-pointer transition"
            onClick={() => handleEventClick(event)}
          >
            <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
            <p className="text-sm text-gray-500">{event.date} — {event.location}</p>
            <p className="text-sm mt-2 text-gray-700">{event.description}</p>
          </div>
        ))}
      </div>

      {selectedEvent && !registered && (
        <div className="mt-10 bg-white border rounded-xl p-6 shadow-md">
          <h4 className="text-lg font-semibold text-gray-800 mb-2">Register for {selectedEvent.title}?</h4>
          <p className="text-gray-600 mb-4">{selectedEvent.description}</p>
          <div className="flex gap-4">
            <button
              onClick={() => handleRegistration('yes')}
              className="bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-md"
            >
              Yes
            </button>
            <button
              onClick={() => handleRegistration('no')}
              className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-md"
            >
              No
            </button>
          </div>
        </div>
      )}

      {registered && selectedEvent && (
        <div className="mt-6 text-center text-green-600 font-medium">
          Successfully registered for <b>{selectedEvent.title}</b>!
        </div>
      )}
    </div>
  );
};

export default EventTabsVertical;
