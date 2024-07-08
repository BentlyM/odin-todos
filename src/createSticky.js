import { initializeEvents } from "./initEvents";
import { Modal } from './modal.js';

export function generateSticky(generateCard){
    const stickyContainer = document.querySelector('.stickyContainer');

    /* in generate sticky prob gonna have to add the prompt functionality here so */
    const currentModal = new Modal('None');
    currentModal.classList.toggle('show');
    
    initializeEvents().container.appendChild(currentModal);

    if(currentModal.classList[1] === 'show') return;
    
    stickyContainer.appendChild(generateCard(currentModal));
}