// Byimaan

/**
 * Interface `Builder` defines all the steps required to build the product
 */

import { Form } from "./product";

export interface FormBuilder {
    addField(field: string): this;
    addValidation(field: string, validation: (val: any) => boolean): this;
    addSection(section: string): this;
    build(): Form;
}