let format24h = true;
let idioma = "pt";

  const botaoLang = document.getElementById("toggleLang");
  const botao = document.getElementById("toggleFormat");


  botaoLang.addEventListener("click", () => {
    idioma = idioma === "pt" ? "en" : "pt";
    
    atualizarIdioma();
  });
  
  botao.addEventListener("click", () => {
    format24h = !format24h;
   atualizarIdioma();
  });

  function atualizarIdioma() {
    const titulo = document.querySelector("h1");
    

    if (idioma === "pt") {
      titulo.innerText = "Relógio Mundial";
      botao.innerText = format24h ? "Mudar para 12h" : "Mudar para 24h";
      botaoLang.innerText = "PT (🇧🇷)";
    } else {
      titulo.innerText = "World Clock";
      botao.innerText = format24h ? "Switch to 12h" : "Switch to 24h";
      botaoLang.innerText = "EN (🇺🇸)";
  }
 }
  
  function atualizarRelogio() {
   const agora = new Date();
   
  let horas = agora.getHours();
  let minutos = agora.getMinutes();
  let segundos = agora.getSeconds();
  let dia = agora.getDate();
  let mes = agora.getMonth() + 1;
    
    let sufixo = "";
    
    if (!format24h) {
      sufixo = horas >= 12 ? "PM" : "AM";
      horas = horas % 12 || 12;
    }

  horas = String(horas).padStart(2, '0');
  minutos = String(minutos).padStart(2, '0');
  segundos = String(segundos).padStart(2, '0');
  dia = String(dia).padStart(2, '0');
  mes = String(mes).padStart(2, '0');
  
  const horario = format24h
  ? `${horas}:${minutos}:${segundos}`
  : `${horas}:${minutos}:${segundos} ${sufixo}`;

  const data = `${dia}/${mes}`;
  
  document.getElementById("relogio").innerText = horario;
  document.getElementById("data").innerText = data;
}

 setInterval(atualizarRelogio, 1000);
 atualizarRelogio();
 atualizarIdioma();
