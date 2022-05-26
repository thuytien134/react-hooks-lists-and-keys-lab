import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
const linkElement = links.map(link => {
  let myhref = `#${link}`
 return <a key={link} href={myhref} >{link}</a> 
})
  return (
  <nav>
   {linkElement}
  </nav>
  );
}

export default NavBar;
