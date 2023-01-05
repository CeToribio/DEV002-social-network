import { register } from "./templates/viewRegister.js";
import { login } from "./templates/viewLogin.js";
import { home } from "./templates/viewHome.js";
// console.log(login())
import './components/Register.js'
// console.log("loginn", login)
import './components/Login.js'

const root = document.querySelector('#root');

const routes = {
    '/': register,
    '/login':login,
    '/home': home
}

// console.log("ubicacion",window.location.pathname)


export const onNavigate = (pathname) => {
    window.history.pushState(
        {state:pathname},
        pathname,
        window.location.origin + pathname
    );
    while(root.firstChild){
        root.removeChild(root.firstChild);
    }
    root.appendChild(routes[pathname]());
};

// let prints = routes[window.location.pathname];

root.appendChild(routes[window.location.pathname]());

window.onpopstate = (e) => {
    console.log(e.state);
    root.innerHTML = "";
    // onNavigate(e.state.state)
    root.appendChild(routes[window.location.pathname]());
}







