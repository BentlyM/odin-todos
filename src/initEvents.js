import Tabs from './tabs.js';
import { getComponent } from './utilities.js';

export const initializeEvents = () => {
    const container = document.querySelector('.container');
    let activeComponent = null; // Track the currently active component

    document.querySelectorAll('.content-sect').forEach(item => {
        item.addEventListener('click', (event) => {
            const component = Tabs().changeTitle(event.target.textContent);
            const existingComponent = container.querySelector(`[data-component="${component}"]`);

            // Hide all components
            container.querySelectorAll('[data-component]').forEach(el => {
                el.style.display = 'none';
            });

            if (existingComponent) {
                // If the component node already exists, show it
                if(existingComponent.className === "stickyContainer"){
                    existingComponent.style.display = 'grid';
                }else{
                    existingComponent.style.display = 'block';
                }
            } else {
                // If the component node doesn't exist, create and append it
                const componentNode = getComponent(component);
                componentNode.dataset.component = component;
                container.appendChild(componentNode);
            }

            // Update activeComponent to the current component
            activeComponent = component;
            event.stopImmediatePropagation();
        });
    });
}

export const selectionEvent = () => {
    const projectSelect = document.querySelector('#Project');
    const formTitle = document.querySelector('#formTitle');
    const text = document.querySelector('.text-message');

    projectSelect.addEventListener('change', (event) => {
        formTitle.innerText = (event.target.value === 'None') ? 'Task' : 'Project';
        text.innerText = (event.target.value === 'None') ? 'Message' : 'Description';
    });
}
