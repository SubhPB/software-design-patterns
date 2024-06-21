// Byimaan

// Abstract Products

export interface Button {
    paint(): void;
}

export interface CheckBox {
    paint(): void
}


// Abstract Factory

export interface GUIFactory {
    createButton(): Button;
    createCheckbox(): CheckBox;
}


/**
 * The following is the intermidate exaple of this pattern
 */

// 2 Products

export interface PaymentProcessor {
    processPayment(amount: number): void;
};


export interface ReceiptGenerator {
    generateReceipt(trasactionId: string): string
};

// Factory

export interface PaymentGatewayFactory {
    createPaymentProcessor(): PaymentProcessor;
    createReceiptGenerator(): ReceiptGenerator;
};
