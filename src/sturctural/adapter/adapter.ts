// Byimaan

class NewPaymentProviderAdapter implements PaymentGateway {
    private newPaymentProvider: NewPaymentProvider;

    constructor(newPaymentProvider: NewPaymentProvider) {
        this.newPaymentProvider = newPaymentProvider;
    }

    processPayment(amount: number): void {
        // Convert dollars to cents and use the new payment provider's method
        this.newPaymentProvider.makePayment(amount * 100);
    }
}
