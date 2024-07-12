export function cardData(title, message, priority, taskOrProject) {
    const cardContainer = document.createElement('div');
    cardContainer.style.display = 'flex';
    cardContainer.style.flexDirection = 'column';
    cardContainer.style.justifyContent = 'center';
    cardContainer.style.alignItems = 'center';
  
    const titleElem = document.createElement('h3');
    titleElem.className = 'card-title';
    titleElem.innerText = title;
    titleElem.style.fontWeight = 'bold';
    titleElem.style.fontSize = '18px';
    titleElem.style.marginBottom = '8px';
    titleElem.style.textDecoration = 'underline';
  
    const messageElem = document.createElement('p');
    messageElem.className = 'card-message';
    messageElem.innerText = message;
    messageElem.style.fontSize = '16px';
    messageElem.style.color = '#666';
    messageElem.style.marginBottom = '16px';
    messageElem.style.textAlign = 'center';
    messageElem.style.overflowY = 'scroll';
    messageElem.style.maxHeight = '100px';
  
    const taskOrProjectElem = document.createElement('p');
    taskOrProjectElem.className = 'card-task-or-project';
    taskOrProjectElem.innerText = (taskOrProject === "None") ? 'Task' : 'Project';
    taskOrProjectElem.style.fontSize = '14px';
    taskOrProjectElem.style.color = '#999';
    taskOrProjectElem.style.fontStyle = 'italic';
  
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
  
    cardContainer.appendChild(titleElem);
    cardContainer.appendChild(messageElem);
    cardContainer.appendChild(taskOrProjectElem);
  
    return {
      cardContainer,
      titleElem,
      messageElem,
      taskOrProjectElem,
      priorityColor: `8px solid ${cardColor}`,
    };
  }