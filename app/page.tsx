export default function Home() {
  return (
    <main style={{ padding: "4rem", fontFamily: "system-ui, sans-serif" }}>
      <h1 style={{ fontSize: "3rem", marginBottom: "1rem" }}>
        Temp-Hive 🐝
      </h1>

      <p style={{ fontSize: "1.25rem", maxWidth: "600px" }}>
        Temp-Hive connects local businesses with college students for
        short-term, paid work. Fast. Trusted. Local.
      </p>

      <div style={{ marginTop: "2rem" }}>
        <a
          href="#"
          style={{
            padding: "0.75rem 1.25rem",
            background: "black",
            color: "white",
            borderRadius: "6px",
            marginRight: "1rem",
            textDecoration: "none",
          }}
        >
          I’m a Business
        </a>

        <a
          href="#"
          style={{
            padding: "0.75rem 1.25rem",
            border: "1px solid black",
            borderRadius: "6px",
            textDecoration: "none",
          }}
        >
          I’m a Student
        </a>
      </div>
    </main>
  );
}
