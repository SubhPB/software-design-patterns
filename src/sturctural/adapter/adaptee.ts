// Byimaan

class NewPaymentProvider {
    makePayment(amountInCents: number): void {
        console.log(`Processing payment of $${amountInCents / 100} through NewPaymentProvider.`);
    }
}
