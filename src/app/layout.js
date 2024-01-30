import "./globals.css";

export const metadata = {
  title: "Mis 15 Sofi",
  description: "Invitación a mi fiesta de 15",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
