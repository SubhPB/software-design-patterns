// Byimaan

import { randomUUID } from "crypto";
import { Button, CheckBox, GUIFactory, PaymentGatewayFactory, PaymentProcessor, ReceiptGenerator } from "./abs-factory-product";
import { WindowsFactory, MacOSFactory, PayPalFactory, StripeFactory } from "./concrete-factory";

class Application {
    private button: Button;
    private checkbox: CheckBox;

    constructor(factory: GUIFactory){
        this.button = factory.createButton();
        this.checkbox = factory.createCheckbox();
    };

    paint(): void{
        this.button.paint();
        this.checkbox.paint()
    }
};


// Payment Client

class PaymentService {
    private paymentProcessor: PaymentProcessor;
    private receiptGenerator: ReceiptGenerator;

    constructor(factory: PaymentGatewayFactory){
        this.paymentProcessor = factory.createPaymentProcessor();
        this.receiptGenerator = factory.createReceiptGenerator();
    }

    processOrder(amount: number):void {
        this.paymentProcessor.processPayment(amount);
        const transactionId = randomUUID();
        this.receiptGenerator.generateReceipt(transactionId);
    };
};

// Client initialization code 

type PaymentGateWays = [
    'PayPal', 'Stripe'
]

const main = () => {
    let factory: PaymentGatewayFactory;

    const paymentGateWay: PaymentGateWays[number] = 'PayPal';

    factory = paymentGateWay === 'PayPal' ? new PayPalFactory() : new StripeFactory();

    const paymentService = new PaymentService(factory);
    paymentService.processOrder(100.0)
}