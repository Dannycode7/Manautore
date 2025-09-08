let nav_bar=document.querySelector(".nav-bar");

window.addEventListener('scroll',()=>{
    if(window.scrollY> 50){
        nav_bar.classList.add('active')
    }
    else{
        nav_bar.classList.remove('active')
    }
})

let listes=document.getElementById("listes");
let bars=document.getElementById("bars");
let croix=document.getElementById("croix");

bars.addEventListener('click',()=>{
        croix.style.display="block";
        bars.style.display="none";
        listes.classList.toggle('active')
})
croix.addEventListener('click',()=>{
    bars.style.display="block";
    croix.style.display="none";
    listes.classList.toggle('active')
})

const fleurs = [
  {
    img: "https://i.pinimg.com/736x/ef/74/a4/ef74a4a26f5fd3980a5212b0bf33c3fc.jpg",
    name: "Huile de palme",
    description: "Huile rouge naturelle extraite des palmiers du Kongo Central.",
  },
  {
    img: "https://i.pinimg.com/736x/1f/ff/ed/1fffed7a0a221b24b4b3b7a1f19694fc.jpg",
    name: "Miel",
    description: "Miel pur et bio, récolté dans les ruches traditionnelles.",
  },
  {
    img: "https://i.pinimg.com/1200x/48/24/14/482414c78eb99db90a8e16f7c953d49e.jpg",
    name: "Huile",
    description: "Huile végétale artisanale produite localement.",
  },
  {
    img: "https://i.pinimg.com/736x/2c/25/c0/2c25c07e518dd77caa2ea9b814972d2d.jpg",
    name: "Farine de maïs",
    description: "Farine utilisée pour la préparation du foufou et d’autres plats.",
  },
  {
    img: "https://i.pinimg.com/736x/d3/52/44/d3524461467895ff044132330e6ab85e.jpg",
    name: "Farine de manioc",
    description: "Manioc transformé en farine, base de la chikwangue et du foufou.",
  },
  {
    img: "https://i.pinimg.com/1200x/75/c8/55/75c855b1126f183dc70e96fad2333b88.jpg",
    name: "Arachides",
    description: "Arachides locales utilisées pour pâte, huile et collations.",
  },
];

let flores = document.getElementById("flore");

function mesfleurs(fleurs) {
  fleurs.forEach(produit => {
    let cartes = document.createElement("div");
    cartes.classList.add("big");
    cartes.innerHTML = `
      <img src="${produit.img}" alt="${produit.name}">
      <h3>${produit.name}</h3>
      <p>${produit.description}</p>
      <a href="https://wa.me/243841165856" target="_blank" class="btn-whatsapp"><i class="fa-brands fa-whatsapp"></i></a>
    `;
    flores.appendChild(cartes);
  });
}

mesfleurs(fleurs);
