import { generateForm } from './createSticky';
import { NoteData } from './dataHandler';
import plusImg from './images/Plus.png'
import { getImage } from './utilities';

export const StickyComponent = () => {
    // prob put data here 

    const stickyLayout = document.createElement('div');
    stickyLayout.classList.add('stickyContainer');

    const includeCard = document.createElement('div');
    includeCard.classList.add('Card');
    includeCard.id = 'includeCard';
    stickyLayout.appendChild(includeCard);
    includeCard.appendChild(getImage(plusImg));
    includeCard.onclick = () => {generateForm()};

    if(stickyLayout){
        console.log('first try');
        new NoteData(stickyLayout , includeCard);
    }

    return {
        stickyLayout
    }
}