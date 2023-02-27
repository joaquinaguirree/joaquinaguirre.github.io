function obtenerDatos(){
    $.ajax({
        type: 'GET',
        url: 'https://randomuser.me/api/',
        dataType: 'json',
      }).done(function(data){
        const user = data.results[0];
        document.getElementById("imagen-perfil").src = user.picture.large;
        document.getElementById("nombre").innerHTML = "Hola! Yo soy " + user.name.title + " " + user.name.first + " " + user.name.last;
        document.getElementById("email").innerHTML = "Email: " + user.email;
        document.getElementById("telefono").innerHTML = "Telefono: " + user.phone;
        document.getElementById("pais").innerHTML = "País: " + user.location.country;
        document.getElementById("ciudad").innerHTML = "Ciudad: " + user.location.city;
      })
}

window.addEventListener("load", () => {
  const loader = document.querySelector(".loader");
  
  loader.classList.add("loader-hidden");

  loader.addEventListener("transitionend", () => {
    document.body.removeChild("loader");
  })
})

const scrollBtn = document.getElementById("scroll-btn");
const info = document.getElementById("personal-info")

scrollBtn.addEventListener("click", function() {
  window.scrollTo({
    top:info.offsetTop - 120,
    behavior: 'smooth'
  });
});