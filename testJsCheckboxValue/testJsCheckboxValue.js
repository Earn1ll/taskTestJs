import { LightningElement } from 'lwc';

export default class TestJsCheckboxValue extends LightningElement {
    booleanValue = " ";
    changeHandler() {
      const isChecked = this.template.querySelector(".check");
      if (isChecked.checked) {
        this.booleanValue = true;
      } else {
        this.booleanValue = false;
      }
    }
}