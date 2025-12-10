export const metadata = {
  title: "My App",
  description: "Next.js app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
