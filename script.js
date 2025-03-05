function toggleMode() {
  const html = document.documentElement 
  html.classList.toggle('light') 

//pegar a tag imag
  const img =document.querySelector("#profile img ")
    //subistituir a imagem
    if(html.classList.contains("light")) {
     //   se estiver light  adicionar, adicioa imagem  light
     img.setAttribute('src','./assets/romero-light.png')
    }  else{
    //se estiver sem light modo, manter a imagem a normal
     img.setAttribute('src', './assets/foto.romero.jpg')
    }
    }

