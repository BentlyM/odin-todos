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
                    title.textContent = label(this.upcoming).innerText;
                    break;
                case 'Today':
                    title.textContent = label(this.today).innerText;
                    break;
                case 'Calendar':
                    title.textContent = label(this.calendar).innerText;
                    break;
                case 'Sticky Wall':
                    title.textContent = label(this.stickyWall).innerText;
                    break;
                default:
                    title.textContent = undefined;
                }
        }
    }
}
