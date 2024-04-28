function Navbar(){ 
  const handleAbout = () => {
    document.getElementById("calculator").style.display = "none";
    document.getElementById("about").style.display = "flex";
    document.getElementById("contact").style.display = "none";
  }
  const handleCalculator = () => {
    document.getElementById("calculator").style.display = "flex";
    document.getElementById("about").style.display = "none";
    document.getElementById("contact").style.display = "none";
  }
  const handleContact = () => {
    document.getElementById("calculator").style.display = "none";
    document.getElementById("about").style.display = "none";
    document.getElementById("contact").style.display = "flex";
  }
  return(
    <nav className="w-full h-gr5 flex justify-center text-gr4">
      <ul className="flex text-white gap-10 p-2">
        <li><button onClick={() => handleAbout()}>About</button></li>
        <li><button onClick={() => handleCalculator()}>Calculator</button></li>
        <li><button onClick={() => handleContact()}>Contact</button></li>
      </ul>
    </nav>
  )

}

export default Navbar;
