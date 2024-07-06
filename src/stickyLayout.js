import plusImg from './images/Plus.png'
import { getImage } from './utilities';
import { initializeEvents } from './initEvents';

export const StickyComponent = () => {

    const stickyLayout = document.createElement('div');
    stickyLayout.classList.add('stickyContainer');

    const includeCard = document.createElement('div');
    includeCard.classList.add('Card');
    includeCard.id = 'includeCard';
    stickyLayout.appendChild(includeCard);
    includeCard.appendChild(getImage(plusImg));
    initializeEvents().click(includeCard);

    return {
        stickyLayout
    }
}