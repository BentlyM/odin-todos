import Tabs from './tabs.js';

export const initializeEvents = () => {
    document.querySelectorAll('.content-sect').forEach(item => {
        item.addEventListener('click', (event) => {
            console.log(event.target.textContent);
            Tabs().changeTitle(event.target.textContent);
    })
})}