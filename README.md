# ecommerce-template-demo

This code template utilizes my `ts-node-boilerplate` as the initial template for coding. Therefore, there are some pieces of code that are not related to the current task. However, I hope these pieces from my original template will provide valuable insights into my coding style.

1. Architecture style
Its a hexagonal architecture based on Uncle Bob Clean Architecture and with some elements of DDD

1. Core idea is to separate domain logic from infrastructure
2. This aproach is framework, database *agnostic*
3. App consists from several layers
  - transport layer (express)
  - adapters (controllers in our case, which map request data to use case layer)
  - use cases layer (layer which responsible for holding main business logic scenarios and entities orchestration)
  - domain layer (entities) responsible for business logic only
  - services responsible for managing specific business rules and integration with 3d party services
  - repositories (responsible for data access and storing)
4. Using `tsyringe` as DI-container for managing dependencies, this allow us to have low coupling
5. Every piece of app can be called in separate isolated enviroment, this allow easy testing


2. Implementation of PaymentService
  - all necessary comments located in `src/application/services/PaymentService`