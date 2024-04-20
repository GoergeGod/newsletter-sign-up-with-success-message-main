const input = document.getElementById("input");
const formulario = document.getElementById("formulario");
const flex = document.querySelector(".flex");


let spanError = document.createElement("span");
spanError.textContent = "Valid email required";

formulario.addEventListener("submit", (evento) => {
  if (validarEnvio()) {
    mostrarMensaje();
  } else{
    evento.preventDefault();
  }
});

input.addEventListener("input", (evento) => {
  valorInput = evento.target.value;
  if (valorInput.includes("@") && valorInput.length > 5) {
    input.classList.remove("error");
    flex.removeChild(spanError);
  } else if (valorInput === "") {
    input.classList.remove("error");
    flex.removeChild(spanError);
  } else {
    input.classList.add("error");
    spanError.classList.add("span");
    flex.appendChild(spanError);
  }
});

function validarEnvio() {
  let valorInput = input.value;

  if (valorInput.includes("@") && valorInput.length > 5) {
    return true;
  } else {
    return false;
  }
}



function mostrarMensaje(  ) {
   
    const body = document.body;

    while(body.firstChild) {
        body.removeChild(body.firstChild)
    }
    const contenido = document.createRange().createContextualFragment(`
    
    <div class='contenedor-success'>
    <div class='contenido-success'>
    <div class='con-img'></div>
    <h1>Thanks for subscribing!</h1> 
      <p>A confirmation email has been sent to<span>${valorInput}.</span> Please open it and click the button inside toconfirm your subscription.</p>
       <button id='boton-success' class="boton">Dismiss message</button>
       </div>
    </div>
    `)
    body.appendChild(contenido)

    const boton = document.getElementById('boton-success');

    boton.addEventListener('click', () => {
        location.reload();
    })
}


