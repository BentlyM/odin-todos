
export class NoteData {
    constructor(container , includeCard){
        this.container = container;
        this.includeCard = includeCard;
        this.agenda = [];
        this.readStickyContainer()
    }

    readStickyContainer(){
        const submitBtn = document.getElementById('submitForm');

        submitBtn.addEventListener('click', ()=>{
            this.container.childNodes.forEach(element => {
                if (element.id === "includeCard") return;

                if (element === this.container.lastChild) { this.agenda.push(element); console.log(this.agenda); } ;
            });
        });
    }

    NotePriority(card){
        console.log(card);
    }
}