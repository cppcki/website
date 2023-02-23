import Navbar from "@/components/Navbar";
import Button from "@/components/Button";

import Tenants from "@/components/Tenants";

import getSession from "@/utils/getServerSession";

function Hero() {
  return (
    <div className="mt-10 flex justify-center flex-col">
      <div className="my-6">
        <h3 className="text-center lg:text-6xl md:text-5xl text-4xl font-black capitalize">we love service</h3>
        <h1 className="text-center lg:text-8xl md:text-7xl text-5xl font-black capitalize">so matcha! 🍵</h1>
      </div>
      <p className="text-xl max-w-2xl text-center mx-auto">
        Become part of one of the largest collegiate community service, leadership development, and friendship organization in the world.
      </p>
      <div className="flex justify-center gap-x-10 my-10">
        <Button variant="fill" href="/login" className="first-letter:capitalize">join us</Button>
        <Button variant="outline" className="first-letter:capitalize">explore events</Button>
      </div>
    </div>
  );
}

type EventItemProps = {
  title: string;
  description: string;
}

function EventItem(props: EventItemProps) {
  const { title, description } = props;
  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
}

function Events() {
  return (
    <div className="mt-20">
      <div className="mb-10">
        <h1 className="font-extrabold text-center text-5xl first-letter:capitalize">upcoming events</h1>
        <p className="text-center text-xl my-3">Like what you&apos;re seeing? Come on out and hang with us!</p>
      </div>
      <div>
        <EventItem
          title="CKI goes Ice Skating"
          description="admada djas dadasdasdj asdjasdsfs dfsfsfs fs fsf sf sfsffd."
        />
      </div>
    </div>
  );
}

export default async function Home() {
  const session = await getSession();

  return (
    <main className="max-w-7xl m-auto px-8">
      <Navbar isLoggedIn={session ? true : false}/>
      <Hero/>
      <Tenants/>
    </main>
  );
}