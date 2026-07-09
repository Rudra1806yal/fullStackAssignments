import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  const features = [
    {
      emoji: "📚",
      title: "Assignments",
      description: "Create, edit and organize your assignments with ease.",
    },
    {
      emoji: "✅",
      title: "Task Manager",
      description: "Track pending and completed tasks in one place.",
    },
    {
      emoji: "📅",
      title: "Schedule",
      description: "Keep up with classes, deadlines and exams.",
    },
    {
      emoji: "📈",
      title: "Progress",
      description: "Monitor your productivity and completed work.",
    },
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #4f46e5, #06b6d4)",
        color: "white",
        fontFamily: "Arial, sans-serif",
        padding: "40px",
      }}
    >
      {/* Hero Section */}
      <div style={{ textAlign: "center", marginBottom: "60px" }}>
        <h1
          style={{
            fontSize: "3.5rem",
            marginBottom: "15px",
          }}
        >
          🎓 Student Task Manager
        </h1>

        <p
          style={{
            fontSize: "1.2rem",
            maxWidth: "700px",
            margin: "auto",
            lineHeight: "1.6",
          }}
        >
          Manage assignments, organize study schedules, and never miss another
          deadline.
        </p>
      </div>

      {/* Statistics */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "25px",
          marginBottom: "60px",
        }}
      >
        {[
          { value: "1200+", label: "Students" },
          { value: "3500+", label: "Assignments" },
          { value: "98%", label: "Task Completion" },
        ].map((item, index) => (
          <div
            key={index}
            style={{
              width: "220px",
              padding: "25px",
              borderRadius: "15px",
              background: "rgba(255,255,255,0.15)",
              textAlign: "center",
              backdropFilter: "blur(8px)",
            }}
          >
            <h2 style={{ margin: 0 }}>{item.value}</h2>
            <p>{item.label}</p>
          </div>
        ))}
      </div>

      {/* Features */}
      <div>
        <h2
          style={{
            textAlign: "center",
            marginBottom: "30px",
          }}
        >
          Why Use This App?
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "25px",
          }}
        >
          {features.map((feature, index) => (
            <div
              key={index}
              style={{
                background: "white",
                color: "#333",
                borderRadius: "15px",
                padding: "25px",
                textAlign: "center",
                boxShadow: "0 10px 20px rgba(0,0,0,0.15)",
                transition: "0.3s",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-8px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <div style={{ fontSize: "3rem" }}>{feature.emoji}</div>

              <h3>{feature.title}</h3>

              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Quote */}
      <div
        style={{
          marginTop: "70px",
          textAlign: "center",
          fontSize: "1.1rem",
        }}
      >
        <p>
          "Success doesn't come from what you do occasionally, it comes from
          what you do consistently."
        </p>
      </div>
    </div>
  );
}