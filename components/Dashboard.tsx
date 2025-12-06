"use client";

import { useEffect, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import { EventClickArg } from "@fullcalendar/core";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";

const INITIAL_EVENTS = [
  {
    title: "Математика",
    start: "2025-12-01T09:00:00",
    end: "2025-12-01T10:30:00",
    teacher: "Әлия Мұқаметқызы",
    room: "101 аудитория",
    type: "lesson",
  },
  {
    title: "Сурет",
    start: "2025-12-03T11:00:00",
    end: "2025-12-03T12:30:00",
    teacher: "Нұрлан Өтеген",
    room: "202 аудитория",
    type: "lesson",
  },
  {
    title: "Музыка",
    start: "2025-12-05T08:30:00",
    end: "2025-12-05T10:00:00",
    teacher: "Меруерт Бақыт",
    room: "103 аудитория",
    type: "lesson",
  },
];

export default function Calendar() {
  const [selectedEvent, setSelectedEvent] = useState<any>(null);
  const [events, setEvents] = useState<any[]>(INITIAL_EVENTS);

  // 🔹 Активитилерді localStorage-тен оқимыз
  useEffect(() => {
    if (typeof window === "undefined") return;

    const stored = window.localStorage.getItem("activities");
    if (!stored) return;

    try {
      const activities = JSON.parse(stored) as any[];
      const mapped = activities.map((a) => ({
        title: a.title,
        start: `${a.date}T${a.startTime}`,
        end: `${a.date}T${a.endTime}`,
        teacher: a.teacher,
        room: a.room,
        description: a.description,
        type: "activity",
      }));

      setEvents([...INITIAL_EVENTS, ...mapped]);
    } catch (e) {
      console.error("Failed to parse activities", e);
    }
  }, []);

  const handleEventClick = (clickInfo: EventClickArg) => {
    const event = clickInfo.event;
    const props = event.extendedProps as any;

    setSelectedEvent({
      title: event.title,
      start: event.start,
      end: event.end,
      teacher: props.teacher,
      room: props.room,
      description: props.description,
      type: props.type || "lesson",
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-16 relative">
      <h2 className="text-3xl font-bold text-[#6B4EFF] text-center mb-6">
        Күнтізбе
      </h2>
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        events={events}
        height={600}
        eventClick={handleEventClick}
      />

      {selectedEvent && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 transition-opacity duration-300"
          onClick={() => setSelectedEvent(null)}
        >
          <div
            className="bg-white p-8 rounded-xl shadow-lg max-w-sm w-full animate-fadeIn"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-xl font-bold mb-2">{selectedEvent.title}</h3>

            <p className="text-gray-700 mb-2">
              Түрі:{" "}
              {selectedEvent.type === "activity"
                ? "Шығармашылық активити"
                : "Сабақ"}
            </p>

            <p className="text-gray-700">
              Күні: {selectedEvent.start.toLocaleDateString()}
              <br />
              Уақыты:{" "}
              {selectedEvent.start.toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })}{" "}
              -{" "}
              {selectedEvent.end.toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </p>

            {selectedEvent.teacher && (
              <p className="text-gray-700 mt-1">
                Мұғалімі / Жауапты: {selectedEvent.teacher}
              </p>
            )}

            {selectedEvent.room && (
              <p className="text-gray-700">Орыны: {selectedEvent.room}</p>
            )}

            {selectedEvent.description && (
              <p className="text-gray-700 mt-3">
                <span className="font-semibold">Сипаттамасы:</span>{" "}
                {selectedEvent.description}
              </p>
            )}

            <button
              className="mt-4 px-4 py-2 bg-[#6B4EFF] text-white rounded hover:bg-purple-600"
              onClick={() => setSelectedEvent(null)}
            >
              Жабу
            </button>
          </div>
        </div>
      )}

      <style jsx>{`
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-in-out;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
