"use client";
import { useState } from "react";
import { supabase } from "../../lib/supabase";

export default function Send() {
  const [pseudo, setPseudo] = useState("");
  const [from, setFrom] = useState("");
  const [message, setMessage] = useState("");

  async function sendMessage() {
    if (!pseudo || !from || !message) return alert("Complète tous les champs.");

    await supabase.from("messages").insert({
      to: pseudo,
      from,
      message,
      timestamp: new Date()
    });

    alert("Message envoyé !");
  }

  return (
    <div className="container">
      <h2>Envoyer un message anonyme</h2>

      <input placeholder="Pseudo du destinataire" onChange={e => setPseudo(e.target.value)} />
      <input placeholder="Ton pseudo (ou Anonyme)" onChange={e => setFrom(e.target.value)} />
      <textarea placeholder="Ton message..." onChange={e => setMessage(e.target.value)} />

      <button onClick={sendMessage}>Envoyer</button>
    </div>
  );
}