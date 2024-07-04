import { labelForControl as label } from "./utilities";

export default class Tabs {
    constructor(){
        this.upcoming = document.getElementById('Upcoming');
        this.today = document.getElementById('Today');
        this.calendar = document.getElementById('Calendar');
        this.stickyWall = document.getElementById('StickyWall');
    }

changeTitle(){
        const title = document.getElementById('tab-title');

        if(this.upcoming.checked){
            title.textContent = label(this.upcoming).innerText;
        }else if(this.today.checked){
            title.textContent = label(this.today).innerText;
        }else if(this.calendar.checked){
            title.textContent = label(this.calendar).innerText;
        }else if(this.stickyWall.checked){
            title.textContent = label(this.stickyWall).innerText;
        }else{
            title.textContent = undefined;
        }
    }
}
