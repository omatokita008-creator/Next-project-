export default function Home() {
  return (
    <div className="container">
      <h1>Ray Anonymous</h1>
      <p>Créer ton lien anonyme :</p>

      <input id="pseudo" type="text" placeholder="Ton pseudo" />

      <button onClick={() => {
        const pseudo = document.getElementById("pseudo").value.trim();
        if(!pseudo) return alert("Entre un pseudo !");
        window.location.href = `/${pseudo}`;
      }}>
        Générer mon lien
      </button>
    </div>
  );
}