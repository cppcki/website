
import Header from "@/components/Header";
import Button from "@/components/Button";

function Navbar() {
  return (
    <nav className="flex justify-between py-8">
      <Header/>
      <ul className="flex gap-10 my-auto">
        <li>
          <Button href="/about">about</Button> 
        </li>        
        <li>
          <Button href="/events">events</Button> 
        </li>        
        <li>
          <Button variant="outline" href="/login">login</Button> 
        </li>        
      </ul>
    </nav>
  );
}

export default Navbar;