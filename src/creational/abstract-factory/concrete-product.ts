// Byimaan

// Concrete Prodctsport 
import { randomUUID } from "crypto";
import { Button, CheckBox } from "./abs-factory-product";
import { PaymentProcessor, ReceiptGenerator } from "./abs-factory-product";

export class WindowsButton implements Button {
    paint():void{
        console.log("Rendering a button in Windows style.")
    }
}

export class WindowsCheckbox implements Button {
    paint():void{
        console.log("Rendering a check-box in Windows style.")
    }
}

export class MacOSButton implements Button {
    paint():void{
        console.log("Rendering a button in macOS style.")
    }
};

export class MacOSCheckbox implements Button {
    paint():void{
        console.log("Rendering a checkbox in macOS style.")
    }
};

// Payment concrete produts 

export class PaypalPaymentProcessor implements PaymentProcessor {
    processPayment(){
        console.log("Processing payment hrough paypal.");
        // code ...
    };
    
};

export class PaypalReceiptGenerator implements ReceiptGenerator {
    generateReceipt(trasactionId: string): string {
        console.log('Generating receipt through paypal');
        // code ...
        return randomUUID()
    }
};

export class StripePaymentProcessor implements PaymentProcessor {
    processPayment(){
        console.log("Processing payment hrough stripe.");
        // code ...
    };
};

export class StripeReceiptGenerate implements ReceiptGenerator {
    generateReceipt(trasactionId: string): string {
        console.log('Generating receipt through stripe');
        // code ...
        return randomUUID()
    }
}



