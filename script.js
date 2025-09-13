let bars=document.getElementById('bars');
let Xbars=document.getElementById('xbars');
let nav=document.getElementById("nav");

bars.addEventListener('click',()=>{
    bars.style.display="none";
    Xbars.style.display="block";
    nav.classList.toggle('active')
})

Xbars.addEventListener('click',()=>{
    Xbars.style.display="none";
    bars.style.display="block";
    nav.classList.toggle('active')
})
let nav_bar=document.getElementById('nav-bar')

window.addEventListener('scroll',()=>{
    if(window.scrollY>50){
        nav_bar.classList.add('active')
    }
    else{
         nav_bar.classList.remove('active')
    }
})

let produits=document.getElementById('produits')

const aliments=[
    {
        img:"https://i.pinimg.com/736x/77/e1/d7/77e1d74c73de93db5955fc1d8ffcc9a2.jpg",
        name:"manioc",
        description:"Manioc des tres bonnes qualitee",
    },
     {
        img:"https://i.pinimg.com/736x/7b/b3/ac/7bb3ac2513c21b0146f3908aa36e8cbf.jpg",
        name:"Huile de palme",
        description:"Manioc des tres bonnes qualitee",
    },
     {
        img:"https://i.pinimg.com/736x/79/11/a8/7911a835d0e02dca6bb4ee1600ad8f7b.jpg",
        name:"Miel",
        description:"Manioc des tres bonnes qualitee",
    },
     {
        img:"https://i.pinimg.com/1200x/fd/39/22/fd3922012bff87a23f03bc4ea5353d7f.jpg",
        name:"Mais",
        description:"Manioc des tres bonnes qualitee",
    },
]

function afficherproduits(){
    aliments.forEach(prod=>{
        let cartes=document.createElement("div")
        cartes.innerHTML=`
        <div class="cartes">
        <img src="${prod.img}" alt="">
        <div class="prod-write">
        <h1>${prod.name}</h1>
        <p>${prod.description}</p>
        <a href="https://wa.me/243841165856" target="_blank"><button>Commander</button></a>
        </div>
        </div>`;
        produits.appendChild(cartes)
    })
}
afficherproduits()
