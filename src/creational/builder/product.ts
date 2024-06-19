// Byimaan

/**
 * This is complex object that is being created
 */


export class Form {
    fields: Array<string>;
    validations: { [key: string]: (value: any) => boolean };
    sections: Array<string>;


    constructor() {
        this.fields = [];
        this.validations = {};
        this.sections = [];
    }

    showDetails(): void {
        console.log('Form Details:');
        console.log('Fields:', this.fields);
        console.log('Validations:', this.validations);
        console.log('Sections:', this.sections);
    };
}