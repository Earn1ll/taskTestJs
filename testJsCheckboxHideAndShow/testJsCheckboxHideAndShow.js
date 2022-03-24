import { LightningElement } from 'lwc';

export default class TestJsCheckboxHideAndShow extends LightningElement {
    changeFirstCard() {
        let hideFirstCard = this.template.querySelector(".firstCard");
        if (hideFirstCard.unchecked) {
          hideFirstCard.style.visibility = "visible";
        } else {
          hideFirstCard.style.visibility = "hidden";
        }
      }
    
      changeSecondCard() {
        let hideSecondCard = this.template.querySelector(".secondCard");
        if (hideSecondCard.unchecked) {
          hideSecondCard.style.visibility = "visible";
        } else {
          hideSecondCard.style.visibility = "hidden";
        }
      }
}