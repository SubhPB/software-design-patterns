// Byimaan


interface PaymentGateway {
    processPayment(amount: number): void;
}


class ExistingPaymentGateway implements PaymentGateway {
    processPayment(amount: number): void {
        console.log(`Processing payment of $${amount} through ExistingPaymentGateway.`);
    }
}
