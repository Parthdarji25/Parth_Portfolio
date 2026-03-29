import { useState } from "react";

function getSimpleReply(message) {
  const text = message.toLowerCase();

  if (text.includes("hello") || text.includes("hi") || text.includes("hey")) {
    return "Hello. You can ask about skills, projects, or contact details.";
  }

  if (text.includes("skill") || text.includes("tech") || text.includes("stack")) {
    return "Core skills include React, Node.js, CSS, OpenAI integration, automation, and full-stack product development.";
  }

  if (text.includes("project") || text.includes("work") || text.includes("build")) {
    return "Current projects focus on AI chatbots, automation workflows, and full-stack systems with modern UI.";
  }

  if (text.includes("contact") || text.includes("email") || text.includes("hire")) {
    return "Use the Contact section to send a message for collaboration, project work, or freelance opportunities.";
  }

  if (text.includes("name") || text.includes("who are you")) {
    return "This portfolio belongs to Parth Darji, a Full Stack Developer and Gen AI Engineer.";
  }

  return "I can currently help with simple portfolio questions like skills, projects, and contact.";
}

export default function Chatbot() {
  const [msg, setMsg] = useState("");
  const [chat, setChat] = useState([
    { bot: "Hi. Ask something simple about this portfolio." }
  ]);
  const [open, setOpen] = useState(true);

  const send = () => {
    if (!msg.trim()) {
      return;
    }

    const newChat = [...chat, { user: msg }];
    setChat(newChat);

    setTimeout(() => {
      setChat([...newChat, { bot: getSimpleReply(msg) }]);
    }, 500);

    setMsg("");
  };

  if (!open) {
    return (
      <button
        className="btn btn-primary chatbot-toggle"
        style={{
          position: "fixed",
          right: 20,
          bottom: 20,
          zIndex: 15,
          padding: "10px 18px"
        }}
        onClick={() => setOpen(true)}
        aria-label="Open chat"
      >
        Amrok Chat
      </button>
    );
  }

  return (
    <div
      className="glass chatbot-shell"
      style={{
        position: "fixed",
        bottom: 20,
        right: 20,
        padding: 14,
        background: "rgba(245,241,236,0.92)",
        zIndex: 15
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "12px",
          marginBottom: "12px"
        }}
      >
        <div style={{ fontWeight: 800 }}>Chat</div>
        <button
          type="button"
          onClick={() => setOpen(false)}
          aria-label="Close chat"
          style={{
            border: "none",
            background: "rgba(255,255,255,0.5)",
            color: "var(--text)",
            width: "32px",
            height: "32px",
            borderRadius: "50%",
            cursor: "pointer",
            fontSize: "1rem",
            lineHeight: 1
          }}
        >
          x
        </button>
      </div>

      <div
        style={{
          height: 150,
          overflow: "auto",
          color: "var(--muted)",
          lineHeight: "1.7",
          marginBottom: "12px",
          fontSize: "0.94rem"
        }}
      >
        {chat.map((c, i) => (
          <div
            key={i}
            style={{
              marginBottom: "8px",
              padding: "10px 12px",
              borderRadius: "12px",
              background: c.user ? "rgba(196, 122, 82, 0.12)" : "rgba(255,255,255,0.58)"
            }}
          >
            {c.user || c.bot}
          </div>
        ))}
      </div>

      <input
        className="input"
        value={msg}
        onChange={(e) => setMsg(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            send();
          }
        }}
        placeholder="Ask about skills or projects"
      />
      <button onClick={send} className="btn btn-primary" style={{ marginTop: "12px", width: "100%" }}>
        Send
      </button>
    </div>
  );
}
