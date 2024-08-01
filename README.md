# software-design-patterns

![CamScanner 08-01-2024 10 45_01 (1)](https://github.com/user-attachments/assets/fd3eef93-bc1a-4c02-b79c-8b66cf2c672f)


## Creational Patterns
Abstract Factory: Provides an interface for creating families of related or dependent objects without specifying their concrete classes.
Builder: Constructs a complex object step by step. It allows you to produce different types and representations of an object using the same construction code.
Factory Method: Defines an interface for creating an object but lets subclasses alter the type of objects that will be created.
Prototype: Specifies the kinds of objects to create using a prototypical instance, and creates new objects by copying this prototype.
Singleton: Ensures a class has only one instance and provides a global point of access to it.
## Structural Patterns
Adapter: Allows objects with incompatible interfaces to collaborate.
Bridge: Decouples an abstraction from its implementation so that the two can vary independently.
Composite: Composes objects into tree structures to represent part-whole hierarchies. It lets clients treat individual objects and compositions of objects uniformly.
Decorator: Adds responsibilities to objects dynamically and transparently, that is, without affecting other objects.
Facade: Provides a unified interface to a set of interfaces in a subsystem. It defines a higher-level interface that makes the subsystem easier to use.
Flyweight: Uses sharing to support large numbers of fine-grained objects efficiently.
Proxy: Provides a surrogate or placeholder for another object to control access to it.
## Behavioral Patterns
Chain of Responsibility: Passes a request along a chain of handlers. Upon receiving a request, each handler decides either to process the request or to pass it to the next handler in the chain.
Command: Encapsulates a request as an object, thereby allowing for parameterization of clients with different requests, queuing of requests, and logging of the requests.
Interpreter: Given a language, defines a representation for its grammar along with an interpreter that uses the representation to interpret sentences in the language.
Iterator: Provides a way to access the elements of an aggregate object sequentially without exposing its underlying representation.
Mediator: Defines an object that encapsulates how a set of objects interact. This pattern promotes loose coupling by keeping objects from referring to each other explicitly.
Memento: Captures and externalizes an object's internal state so that the object can be restored to this state later, without violating encapsulation.
Observer: Defines a one-to-many dependency between objects so that when one object changes state, all its dependents are notified and updated automatically.
State: Allows an object to alter its behavior when its internal state changes. The object will appear to change its class.
Strategy: Defines a family of algorithms, encapsulates each one, and makes them interchangeable. Strategy lets the algorithm vary independently from clients that use it.
Template Method: Defines the skeleton of an algorithm in the superclass but lets subclasses override specific steps of the algorithm without changing its structure.
Visitor: Represents an operation to be performed on the elements of an object structure. It lets you define a new operation without changing the classes of the elements on which it operates.
Contributing
Contributions are welcome! If you have any suggestions, bug reports, or want to add new design patterns, feel free to open an issue or submit a pull request.

To contribute:

Fork the repository.
Create a new branch (git checkout -b feature/your-feature).
Commit your changes (git commit -m 'Add some feature').
Push to the branch (git push origin feature/your-feature).
Open a pull request.
License
This project is licensed under the MIT License - see the LICENSE file for details.
