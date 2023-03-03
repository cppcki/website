
import Header from "@/components/Header";
import Button from "@/components/Button";

type NavbarProps = {
  isLoggedIn?: boolean;
}

function Navbar(props: NavbarProps) {
  const { isLoggedIn } = props;

  return (
    <nav className="sm:flex justify-between py-8">
      <Header/>
      <ul className="flex justify-center sm:justify-start gap-10 my-auto mt-5">
        <li>
          <Button href="/about">about</Button>
        </li>
        <li>
          <Button href="/events">events</Button> 
        </li>
        <li>
          <Button
            variant="outline"
            href={isLoggedIn ? "/dashboard": "/login"}>
            {isLoggedIn ? "portal" : "login"}
          </Button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;