import { generateForm } from './createSticky';
import { NoteData } from './dataHandler';
import plusImg from './images/Plus.png';
import { getImage } from './utilities';
import { cardData } from './cardInfo';

export const StickyComponent = () => {
    // prob put data here 
    generateForm();

    const stickyLayout = document.createElement('div');
    stickyLayout.classList.add('stickyContainer');

    const includeCard = document.createElement('div');
    includeCard.classList.add('Card');
    includeCard.id = 'includeCard';
    stickyLayout.appendChild(includeCard);
    includeCard.appendChild(getImage(plusImg));

    const currentData = new NoteData(stickyLayout, includeCard);

    const priorityHandler = () => {
        const submitBtn = document.querySelector('#submitForm');

        submitBtn.addEventListener('click', (e) => {
            const title = document.querySelector('#TITLE');
            const taskOrProject = document.querySelector('#Project');
            const message = document.querySelector('#Message');
            const priority = document.querySelector('#Priority').value;
            const currentCardData = cardData(title.value, message.value, priority, taskOrProject.value);
            //console.log(currentCardData.priority);
            currentData.NotePriority(currentCardData.priority);
            e.stopPropagation();
        });
    };

    includeCard.onclick = () => { 
        document.querySelector('.modal').classList.toggle('show');
        priorityHandler();
    };

    return {
        stickyLayout
    }
}