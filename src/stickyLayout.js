export const StickyComponent = () => {
    let stickyWallNotes = [];

    const stickyLayout = document.createElement('div');
    stickyLayout.classList.add('stickyContainer');

    const testCard = document.createElement('div');
    testCard.classList.add('Card');
    stickyLayout.appendChild(testCard);
    
    return {
        stickyLayout
    }
}