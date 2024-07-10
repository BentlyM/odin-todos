import { CalendarComponent } from "./calendarLayout";
import { StickyComponent } from "./stickyLayout";
import { TodayComponent } from "./todayLayout";
import { UpcomingComponent } from "./upcomingLayout";


function labelForControl(el){
    let idVal = el.id;
    const labels = document.querySelectorAll('label');
    for( var i = 0; i < labels.length; i++ ) {
        if (labels[i].htmlFor == idVal)
             return labels[i];
     }
}

function getComponent(component){
    switch(component){
        case 'Upcoming':
            return UpcomingComponent().UpcomingLayout
        case 'Today':
            return TodayComponent().TodayLayout
        case 'Calendar':
            return CalendarComponent().CalendarLayout
        case 'Sticky Wall':
            return StickyComponent().stickyLayout
        default:
            title.textContent = undefined;
    }
}

function getImage(image , w , h){
    const CurrentImage = new Image(w , h);
    CurrentImage.src = image;

    return CurrentImage;
}

function createCard(){
    const newCard = document.createElement('div');
    newCard.classList.add('Card');

    return newCard;
}

export {labelForControl , getComponent, getImage, createCard};