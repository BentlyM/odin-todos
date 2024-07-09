// modal.js
import { generateSticky } from "./createSticky";
import { createCard } from "./utilities";

class Modal {
  static instance = null;

  constructor(type) {
    if (Modal.instance) {
      Modal.instance.modalElement.remove();
      Modal.instance = null;
    }

    Modal.instance = this;
    this.type = type;
    return this.createModal();
  }

  createModal() {
    const modalElement = document.createElement("div");
    modalElement.id = this.type;
    modalElement.className = "modal";

    const modalContentElement = document.createElement("div");
    modalContentElement.className = "modal-content";

    const contactFormElement = document.createElement("div");
    contactFormElement.className = "contact-form";

    const closeButtonElement = document.createElement("a");
    closeButtonElement.className = "close";
    closeButtonElement.innerHTML = "&times;";
    closeButtonElement.addEventListener("click", () => {
      modalElement.classList.toggle('show');
    });

    const formElement = document.createElement("form");
    formElement.action = "/";

    const formFields = [
      { label: "Title*", type: "text", placeholder: "Title" }, // gotta grab this value
      { label: "Project", type: "select", options: ["None", "Project"] },
      { label: "Priority", type: "select", options: ["High", "Medium", "Low"] },
      { label: "Due Date", type: "Date", placeholder: "DueDate" }, // gotta grab this value
    ];

    const formFieldElements = formFields.map((field) => {
      const labelElement = document.createElement("label");
      labelElement.innerHTML = field.label;

      let inputElement;
      if (field.type === "select") {
        inputElement = document.createElement("select");
        inputElement.id = field.label;
        field.options.forEach((option) => {
          const optionElement = document.createElement("option");
          optionElement.value = option;
          optionElement.text = option;
          inputElement.appendChild(optionElement);
        });
      } else {
        inputElement = document.createElement("input");
        inputElement.type = field.type;
        inputElement.name = "name";
        inputElement.id = field.placeholder.toUpperCase();
        inputElement.placeholder = field.placeholder;
      }

      const fieldElement = document.createElement("div");
      fieldElement.appendChild(labelElement);
      fieldElement.appendChild(inputElement);

      return fieldElement;
    });

    const messageContainer = document.createElement("div");

    const messageElement = document.createElement("span");
    messageElement.innerHTML = "Message";

    const textareaElement = document.createElement("textarea");
    textareaElement.id = 'Message'
    textareaElement.rows = 4;

    const submitButtonElement = document.createElement("button");
    submitButtonElement.addEventListener('click', (event)=>{
      event.preventDefault();
      generateSticky(createCard());
      this.hide();
    });
    submitButtonElement.type = "submit";
    submitButtonElement.innerHTML = "Submit";

    formElement.appendChild(this.createHeadingElement(this.type));
    formFieldElements.forEach((element) => formElement.appendChild(element));
    formElement.appendChild(messageContainer);
    messageContainer.appendChild(messageElement);
    messageContainer.appendChild(textareaElement);
    messageContainer.appendChild(submitButtonElement);
    messageContainer.style.display = "flex";
    messageContainer.style.flexDirection = "column";
    messageContainer.style.alignItems = "center"

    contactFormElement.appendChild(closeButtonElement);
    contactFormElement.appendChild(formElement);

    modalContentElement.appendChild(contactFormElement);

    modalElement.appendChild(modalContentElement);

    document.body.appendChild(modalElement);

    return this.modalElement = modalElement;
  }

  createHeadingElement(type) {
    const headingElement = document.createElement("h2");
    headingElement.id = "formTitle";
    headingElement.innerHTML = type === "Project"? "Project" : "Task";
    return headingElement;
  }

  show() {
    this.modalElement.style.display = "block";
   }
 
  hide() {
     this.modalElement.style.display = "none";
  }

}

  export {Modal}