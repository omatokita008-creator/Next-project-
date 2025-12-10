export const metadata = {
  title: "Ray Anonymous",
  description: "Envoyer des messages anonymes"
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}