import "../style/globals.css";

export const metadata = {
  title: "Pizzaiolo Woodfire Pizza Catering | Sydney, Australia",
  description:
    "We provide authentic mobile woodfire pizza catering for parties, events, and weddings in Sydney.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
