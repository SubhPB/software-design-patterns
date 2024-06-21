// Byimaan

import { Button, CheckBox, GUIFactory, PaymentGatewayFactory, PaymentProcessor, ReceiptGenerator } from "./abs-factory-product";
import { MacOSCheckbox, WindowsButton, WindowsCheckbox, MacOSButton, PaypalPaymentProcessor, PaypalReceiptGenerator, StripePaymentProcessor, StripeReceiptGenerate } from "./concrete-product";

// Concrete Factories

export class WindowsFactory implements GUIFactory {
    createButton(): Button {
        return new WindowsButton()
    };
    createCheckbox(): CheckBox {
        return new WindowsCheckbox();
    }
};

export class MacOSFactory implements GUIFactory {
    createButton(): Button {
        return new MacOSButton()
    };
    createCheckbox(): CheckBox {
        return new MacOSCheckbox();
    }
};

// payment example.

export class PayPalFactory implements PaymentGatewayFactory {
    createPaymentProcessor(): PaymentProcessor {
        return new PaypalPaymentProcessor()
    };
    createReceiptGenerator(): ReceiptGenerator {
        return new PaypalReceiptGenerator();
    }
};

export class StripeFactory implements PaymentGatewayFactory {
    createPaymentProcessor(): PaymentProcessor {
        return new StripePaymentProcessor();
    };
    createReceiptGenerator(): ReceiptGenerator {
        return new StripeReceiptGenerate()
    }
};
