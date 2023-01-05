import { onNavigate } from "../main.js";

export const home = () => {
    const container = document.createElement('div');
    container.classList.add('containerHome');
  
 const view = ` 
    <div class="">
        <p>Hola, estas en el HOME!</p>
    </div>`
   

    container.innerHTML = view;

    return container;
}