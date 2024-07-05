import { labelForControl as label } from "./utilities";

export default function Tabs(){
    const upcoming = document.getElementById('Upcoming');
    const today = document.getElementById('Today');
    const calendar = document.getElementById('Calendar');
    const stickyWall = document.getElementById('StickyWall');
    return {
        upcoming,
        today,
        calendar,
        stickyWall,
        changeTitle(choice){
            const title = document.getElementById('tab-title');

            switch(choice){
                case 'Upcoming':
                    return title.textContent = label(this.upcoming).innerText;
                case 'Today':
                    return title.textContent = label(this.today).innerText;
                case 'Calendar':
                    return title.textContent = label(this.calendar).innerText;
                case 'Sticky Wall':
                    return title.textContent = label(this.stickyWall).innerText;
                default:
                    title.textContent = undefined;
            }
        }
    }
}
