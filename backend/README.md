# Den Commerce - API Gateway and Services

## Overview

This documentation provides an overview of the API Gateway and the various services in the backend system, including the `cart-service`, `order-service`, `payment-service`, `product-service`, and `user-service`.

All services are built using NestJS.

### API Gateway

The API Gateway acts as the single entry point for all client requests and routes them to the appropriate microservice.

### Services

#### Cart Service

The cart-service manages shopping cart operations such as adding items to the cart, removing items from the cart, and retrieving cart contents. It interacts with the product-service to ensure items are available and with the order-service to place orders.

#### Order Service

The order-service handles everything related to order processing including order creation, order retrieval, and order updates. It interacts with the cart-service to fetch cart details and with the payment-service to process payments.

#### Payment Service

The payment-service manages payment transactions. It integrates with external payment gateways like Stripe for processing payments. The service handles operations such as payment creation and validation. It uses environment variables for configuration like `STRIPE_SECRET_KEY`, and it leverages DTOs (Data Transfer Objects) for structured data transfer.

#### Product Service

The product-service is responsible for managing product information such as product creation, retrieval, updating, and deletion. It serves as the backbone for managing the inventory of products available in the system.

#### User Service

The user-service manages user-related operations such as user registration, user authentication, and user profile management. It ensures that user information is securely handled and provides access control to ensure that users can only access permitted resources.

## Technologies

- **NestJS**: Used for building all the backend services due to its robust architecture and versatility in handling different types of server-side applications.
- **Stripe**: Used in the payment-service for handling payments.

## Conclusion

This setup using an API Gateway and multiple services allows for a modular, scalable, and maintainable architecture. Each service is responsible for a specific part of the system, making the system easier to manage and scale independently.
