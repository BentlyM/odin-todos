import { initializeEvents } from "./initEvents";
import { Modal } from './modal.js';

export function generateForm(){

    /* in generate sticky prob gonna have to add the prompt functionality here so */
    const currentModal = new Modal('None');
    currentModal.classList.toggle('show');
    
    initializeEvents().container.appendChild(currentModal);

    // might have to call generateSticky here? or inside submit button event listener inside of the modal
}

export function generateSticky(generateCard){
    const stickyContainer = document.querySelector('.stickyContainer');
    const title = document.querySelector('#TITLE'); // test to see if i can grab value.
    

    stickyContainer.appendChild(generateCard);
    
}


