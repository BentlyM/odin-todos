import Tabs from './tabs.js';
import { getComponent } from './utilities.js';

export const initializeEvents = () => {

    const container = document.querySelector('.container');

    document.querySelectorAll('.content-sect').forEach(item => {
        item.addEventListener('click', (event) => {
            const component = Tabs().changeTitle(event.target.textContent);
            if(component && container.childNodes[0]){
                container.replaceChild(getComponent(component), container.childNodes[0]);
            }else{
                container.appendChild(getComponent(component));
            }
        })
    })

    
}