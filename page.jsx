"use client";

import { useState, useEffect } from "react";
import { supabase } from "../../../lib/supabase";

export default function Messages({ params }) {
  const pseudo = params.pseudo;

  const [passwordInput, setPasswordInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [authorized, setAuthorized] = useState(false);

  async function checkPassword() {
    const savedPassword = localStorage.getItem(`pwd_${pseudo}`);

    if (!savedPassword) {
      alert("Aucun mot de passe enregistré pour ce pseudo.");
      return;
    }

    if (passwordInput !== savedPassword) {
      alert("Mot de passe incorrect.");
      return;
    }

    setAuthorized(true);
    loadMessages();
  }

  async function loadMessages() {
    const { data } = await supabase
      .from("messages")
      .select("*")
      .eq("to", pseudo)
      .order("timestamp", { ascending: false });

    setMessages(data);
  }

  if (!authorized) {
    return (
      <div className="container">
        <h1>Messages de {pseudo}</h1>

        <input
          type="password"
          placeholder="Mot de passe"
          value={passwordInput}
          onChange={(e) => setPasswordInput(e.target.value)}
        />

        <button onClick={checkPassword}>Valider</button>
      </div>
    );
  }

  return (
    <div className="container">
      <h1>Messages reçus</h1>

      {messages.map((msg, index) => (
        <div key={index} className="message-item">
          <p><b>{msg.from} :</b></p>
          <p>{msg.message}</p>
        </div>
      ))}
    </div>
  );
}