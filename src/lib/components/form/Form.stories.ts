import { html } from 'lit-html';
import { FormComponent } from "./Form";
import { TextInputComponent } from '../input-text/TextInput';

const FormTemplate = ({ onSubmit, onValidate, onFormData }) => {
  return html`<form
      is="form-component"
      @formdata="${onFormData}"
      @validate="${onValidate}"
      @submit="${onSubmit}"
    >
        <label for="username">Username</label>
        <input-text
          type="text"
          id="username"
          name="username"
          required
          class="form-control"
        ></input-text>
        <input class="submit" type="submit" value="Submit" />
    </form>`;
}
export const Form = FormTemplate.bind({});

Form.args = {
  onSubmit: (event: SubmitEvent) => {
    console.log(new FormData(event.target));
    event.preventDefault();
  },
  onFormData: (event: FormDataEvent) => {
    console.log(event);
    for (let value of event.formData.values()) {
      console.log(value);
    }
  },
  onValidate: (event: any) => {
    const validations = [];
    for (let prop in validators) {
      validations.push(
        document.querySelector(`[name="${prop}"]`).validity.valid
      );
    }
    if (validations.filter((val) => val == false).length) {
      console.warn('INVALID');
    } else {
      console.log('VALID');
    }
  },
};

export default {
    title: "Components/Form",
};
