import { LightningElement, wire } from "lwc";
import NAME_FIELD from "@salesforce/schema/Account.Name";
import ID_FIELD from "@salesforce/schema/Account.Id";
import getAccounts from "@salesforce/apex/TestJsAccountController.getAccounts";

const COLUMNS = [
  { label: "Account Name", fieldName: NAME_FIELD.fieldApiName, type: "text" },
  { label: "Id Name", fieldName: ID_FIELD.fieldApiName, type: "id" }
];

export default class TestJsAccountList extends LightningElement {
  columns = COLUMNS;
  @wire(getAccounts)
  accounts;

  ShowTable() {
    const show = this.template.querySelector(".table");
    if (show.style.visibility === "hidden") {
      show.style.visibility = "visible";
    }
  }

  closeTable() {
    const close = this.template.querySelector(".table");
    close.style.visibility = "hidden";
  }

  

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
