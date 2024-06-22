// Byimaan

/**
 * 
 * i) Base Interface: Define an interface for the text component.
    ii) Concrete Component: Implement the basic text component.
    iii) Decorator Base Class: Create a base decorator class that implements the interface.
    iv) Concrete Decorators: Implement decorators for bold, italic, and underline formatting
 */


// Base interface 
interface TextComponent {
    render(): string;
}

// Concerte Component
class PlainText implements TextComponent {
    private text : string;

    constructor(text: string){
        this.text = text;
    };

    render(): string {
        return this.text;
    }
};


// Decorator base class
class TextDecorator implements TextComponent {
    protected wrapped: TextComponent;

    constructor(component: TextComponent){
        this.wrapped = component;
    };

    render(): string{
        return this.wrapped.render()
    }
}


// Concerte Decorators extends from Decorator base class.

class BoldDecorator extends TextDecorator {
    render(): string {
        return (
            `<b>${super.render()}</b>`
        )
    }
};

class ItalicDecorator extends TextDecorator {
    render(): string {
      return `<i>${super.render()}</i>`;
    }
};

class UnderlineDecorator extends TextDecorator {
    render(): string {
      return `<u>${super.render()}</u>`;
    }
};
  
function main() {
    let textComponent: TextComponent = new PlainText("Hello, World!");

    textComponent = new BoldDecorator(textComponent);
    textComponent = new ItalicDecorator(textComponent);
    textComponent = new UnderlineDecorator(textComponent);

    console.log(textComponent.render()); // Outputs: <u><i><b>Hello, World!</b></i></u>
}

main();
    