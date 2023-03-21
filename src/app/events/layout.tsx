import "@/app/globals.css";
import Navbar from "@/components/Navbar";
import EventCard from "@/components/EventCard";

import Zavala from "@/assets/images/smile_zavala.jpg";

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
        <EventCard
          title="CKI Raid Night"
          details="Eyes up Dangos! Come help your fellow members slay a king in Destiny 2 as we all try to navigate the dangers of King's Fall. "
          thumbnail={Zavala}
          tags="social"
          date= "4/20/2023"
          time="@ 7 p.m."
          location= "Remotely @ Your Home"
          />
      </body>
    </html>
  );
}