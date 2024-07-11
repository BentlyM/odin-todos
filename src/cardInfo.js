export function cardData(title , message) {
    const cardInfoContainer = document.createElement('div');
    cardInfoContainer.style.maxWidth = '80%';


    const titleElem = document.createElement('h3');
    titleElem.innerText = title;

    const messageElem = document.createElement('p');
    messageElem.innerText = message;

    cardInfoContainer.appendChild(titleElem);
    cardInfoContainer.appendChild(messageElem);

    return {
        cardInfoContainer,
        messageElem,
        titleElem
    };
}