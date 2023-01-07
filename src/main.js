import { register } from "./templates/viewRegister.js";
import { login } from "./templates/viewLogin.js";
// console.log(login())


import './components/Register.js'
// console.log("loginn", login)

const root = document.querySelector('#root');

const routes = {
    '/': register,
    '/login':login
}

// console.log("ubicacion",window.location.pathname)


export const onNavigate = (pathname) => {
    window.history.pushState(
        {},
        pathname,
        window.location.origin + pathname
    );
    while(root.firstChild){
        root.removeChild(root.firstChild);
    }
    root.appendChild(routes[pathname]());
};

const prints = routes[window.location.pathname];

window.onpopstate = () => {
    root.appendChild(prints());

}
root.appendChild(prints());





