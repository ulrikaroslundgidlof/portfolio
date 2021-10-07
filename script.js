  //Image gallery
  function myFunction(imgs) {
    // Get the expanded image
    let expandImg = document.getElementById("expandedImg");
    // Get the image text
    let imgText = document.getElementById("imgtext");
    // Use the same src in the expanded image as the image being clicked on from the grid
    expandImg.src = imgs.src;
    // Use the value of the alt attribute of the clickable image as text inside the expanded image
    imgText.innerHTML = imgs.alt;
    // Show the container element (hidden with CSS)
    expandImg.parentElement.style.display = "block";
  }

//Darkmode/lightmode
function darkModeFunction(){
  let wrapper = document.getElementById("wrapper");
  if (document.getElementById("darkMode").checked){
    wrapper.classList.add("classLightMode");    
    document.getElementById("logo").src = "images/ulrikaroslundgidlof-blacklogo.png";
  }
  else{
    wrapper.classList.remove("classLightMode");    
    document.getElementById("logo").src = "images/ulrikaroslundgidlof-logo.png";
  }
  
}
document.getElementById("darkMode").addEventListener("change", darkModeFunction);


