import { initializeEvents } from "./initEvents";
import { Modal } from './modal.js';
import { cardData } from "./cardInfo.js";
import folderImg from './images/folder.png';
import { getImage } from "./utilities.js";

export function generateForm(){

    /* in generate sticky prob gonna have to add the prompt functionality here so */
    const currentModal = new Modal();
    currentModal.classList.toggle('show');
    
    initializeEvents().container.appendChild(currentModal);
    initializeEvents().selectionEvent();

    // might have to call generateSticky here? or inside submit button event listener inside of the modal
}

export function generateSticky(generateCard) {
    const stickyContainer = document.querySelector('.stickyContainer');
    const title = document.querySelector('#TITLE');
    const taskOrProject = document.querySelector('#Project');
    const priority = document.querySelector('#Priority').value;
    const message = document.querySelector('#Message');
  
    let cardColor;
    switch (priority) {
      case 'High':
        cardColor = 'red';
        break;
      case 'Medium':
        cardColor = 'orange';
        break;
      case 'Low':
        cardColor = 'green';
        break;
      default:
        cardColor = 'gray';
    }
  
    generateCard.style.borderLeft = `8px solid ${cardColor}`;

    const currentData = cardData(title.value, message.value);

    if(taskOrProject.value === "Project"){
        const projectFolderImg = getImage(folderImg, 150, 150);
        generateCard.classList.add('projectFolder');
        generateCard.appendChild(projectFolderImg);
        
    }else{
      generateCard.appendChild(currentData.cardInfoContainer);
      generateCard.classList.add('stickyTask');
    }

    stickyContainer.appendChild(generateCard);
  }


