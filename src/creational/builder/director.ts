// Byimaan

import { FormBuilder } from "./builder";
import { Form } from "./product";
import { ConcreteFormBuilder } from "./concreteBuilder";

export class FormDirector {
    private builder: FormBuilder= new ConcreteFormBuilder();

    setBuilder(builder: FormBuilder):void {
        this.builder = builder;
    };

    constructLoginForm(): Form {
        return this.builder.addSection(
            'Login Section'
        ).addField('Username')
        .addField('Password')
        .addValidation('Username', (value: any) => (
            value !== ''
        ))
        .addValidation('Password', (value: any) => (
            value.length > 6
        ))
        .build()
    };

    constructRegistrationForm(): Form {
        return this.builder
            .addSection('Registration Section')
            .addField('Username')
            .addField('Password')
            .addField('Email')
            .addValidation('Username', (value: any) => value !== '')
            .addValidation('Password', (value: any) => value.length > 6)
            .addValidation('Email', (value: any) => /\S+@\S+\.\S+/.test(value))
            .build();
    }
}