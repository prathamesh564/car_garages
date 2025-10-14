"use client";

import { useRouter } from "next/navigation";

export default function Events() {
  const router = useRouter();

  const schedule = [
    {
      day: "Day 1",
      date: "October 25, 2025",
      events: [
        {
          name: "Robo Soccer",
          time: "10:00 AM - 12:30 PM",
          venue: "Main Auditorium",
          coordinator: "Prof. Ravi Kumar",
        },
        {
          name: "Science Talent Hunt (Round 1)",
          time: "1:00 PM - 3:30 PM",
          venue: "Physics Lab",
          coordinator: "Dr. Meera Rao",
        },
      ],
    },
    {
      day: "Day 2",
      date: "October 26, 2025",
      events: [
        {
          name: "Line Follower Robotics",
          time: "10:00 AM - 1:00 PM",
          venue: "Innovation Hall",
          coordinator: "Mr. Sandeep Shetty",
        },
        {
          name: "Science Talent Hunt (Finals)",
          time: "2:00 PM - 4:30 PM",
          venue: "Seminar Hall B",
          coordinator: "Dr. Meera Rao",
        },
      ],
    },
    {
      day: "Day 3",
      date: "October 27, 2025",
      events: [
        {
          name: "Cultural Concert Night",
          time: "6:00 PM - 9:30 PM",
          venue: "Open Air Stage",
          coordinator: "Cultural Committee",
        },
        {
          name: "Valedictory & Prize Distribution",
          time: "10:00 AM - 12:00 PM",
          venue: "Main Auditorium",
          coordinator: "Fest Committee",
        },
      ],
    },
  ];

  function goToRegister(eventName) {
    alert(`Redirecting to registration page for ${eventName}`);
    router.push("/Register");
  }

  return (
    <center>
      <div
        style={{
          backgroundColor: "lightblue",
          minHeight: "100vh",
          padding: "40px",
        }}
      >
        <h1
          style={{
            fontSize: "40px",
            backgroundColor: "darkslateblue",
            color: "white",
            padding: "10px",
            borderRadius: "10px",
            marginBottom: "30px",
          }}
        >
          🎓 College Fest 2025 – Event Schedule
        </h1>

        {schedule.map((dayData, index) => (
          <div
            key={index}
            style={{
              backgroundColor: "white",
              borderRadius: "15px",
              width: "90%",
              marginBottom: "40px",
              boxShadow: "0px 4px 10px rgba(0,0,0,0.3)",
              padding: "20px",
            }}
          >
            <h2
              style={{
                color: "darkslateblue",
                fontSize: "28px",
                marginBottom: "20px",
              }}
            >
              {dayData.day} – {dayData.date}
            </h2>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "15px",
              }}
            >
              {dayData.events.map((event, eventIndex) => (
                <div
                  key={eventIndex}
                  style={{
                    backgroundColor:
                      eventIndex % 2 === 0 ? "#e0ecff" : "#f9fbff",
                    padding: "15px",
                    borderRadius: "10px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    boxShadow: "0px 2px 6px rgba(0,0,0,0.1)",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      gap: "6px",
                    }}
                  >
                    <h3
                      style={{
                        fontSize: "18px",
                        color: "darkslateblue",
                        margin: 0,
                      }}
                    >
                      {event.name}
                    </h3>
                    <p style={{ margin: 0, fontSize: "15px", color: "#222" }}>
                      🕓 {event.time}
                    </p>
                    <p style={{ margin: 0, fontSize: "15px", color: "#222" }}>
                      📍 {event.venue}
                    </p>
                    <p style={{ margin: 0, fontSize: "15px", color: "#444" }}>
                      👤 {event.coordinator}
                    </p>
                  </div>

                  <button
                    style={{
                      backgroundColor: "green",
                      color: "white",
                      border: "none",
                      padding: "10px 15px",
                      borderRadius: "8px",
                      cursor: "pointer",
                      fontSize: "14px",
                    }}
                    onClick={() => goToRegister(event.name)}
                  >
                    Register
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </center>
  );
}
