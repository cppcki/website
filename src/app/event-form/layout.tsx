//copied from about
import "@/app/globals.css";
import Navbar from "@/components/Navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="max-w-7xl m-auto px-8">
        <Navbar/>
        {children}
      </body>
    </html>
  );
}