
console.log(screen.width);
console.log(screen.availWidth);
if(screen.availWidth<540){
  document.getElementById("MobileNavBar").hidden=false;
  document.getElementById("TOP").remove();
}else if(screen.availWidth>539){
  document.getElementById("MobileNavBar").remove();
  document.getElementById("TOP").hidden=false;
}


