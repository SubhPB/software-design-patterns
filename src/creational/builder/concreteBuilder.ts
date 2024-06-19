// Byimaan

/**
 * Concrete Builder
 *   This is the class which implements Builder & provides  implementation of each step of the construction process.
 */

import { FormBuilder } from "./builder";
import { Form } from "./product";

export class ConcreteFormBuilder implements FormBuilder {
    private form: Form;

    constructor(){
        this.form = new Form();
    };

    addField(field: string){
        this.form.fields.push(field)
        return this;
    };

    addValidation(field: string, validation: (value: any) => boolean){
        this.form.validations[field] = validation
        return this;
    };

    addSection(section: string): this {
        this.form.sections.push(section);
        return this
    };

    build(): Form {
        return this.form
    }
}