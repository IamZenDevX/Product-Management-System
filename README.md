Product-Management-System
<h2 align="left">Introduction:</h2>

The **Product Management System** is a comprehensive platform designed to manage products, providers, and categories. The system allows administrators to efficiently manage a wide range of products, track the suppliers/providers, and categorize items for easy navigation and organization. This repository provides the backend and frontend components to handle CRUD operations for products, categories, and providers.

<h2 align="left">Key Features:</h2>

1. **Category Management**
    - Create, update, delete, and list product categories.
    - Categorize products for efficient browsing and filtering.
2. **Product Management**
    - Add, update, delete, and list products.
    - Assign each product to a category and associate it with a provider.
    - Store detailed product information (e.g., price, description, stock level).
    - Search and filter products based on category, provider, or keywords.
3. **Provider Management**
    - Manage providers/suppliers by adding and updating provider information.
    - Associate products with specific providers.
    - List products supplied by a particular provider.

<h2 align="left">Tools Used:</h2>

![Zendevx Technology](https://github.com/user-attachments/assets/36c979fe-929e-44a4-8958-9c15dc466e35)

<h2 align="left">Testing Tools Used:</h2>

![PostMan Github](https://github.com/user-attachments/assets/3381c639-715f-40b9-85d3-08384553ee12)


<h2 align="left">Library:</h2>

- bcryptjs
- connect-mongo
- body-parser
- cors
- dotenv
- express
- express-session
- express-validator
- jsonwebtoken
- mongoose
- nodemon
- validator

<h2 align="left">1. Database Structure</h2>

The platform will require a relational database to manage User And Tasks . Below is a proposed database structure with the key tables.

### **Tables**:

---

### a) Category

| **Field Name** | **Type** |
| --- | --- |
| CategoryID | String |
| name | String |

### b) **Product**

| **Field Name** | **Type** |
| --- | --- |
| title | String |
| ProductID | String |
| categoryID | Ref. Object → Category |
| name | String |
| price | Number |
| qTags | String |
| providerID | Ref. Object → Provider |
| stock | Number |
| launchDate | Date |
| status | String |

### c) **Provider**

| **Field Name** | **Type** |
| --- | --- |
| ProviderID | String |
| name | String |
| website | String |
| email | String |
| phone | String |

<h2 align="left">Modules and Components:</h2>

### 1. **Category Module**

- CRUD functionality for managing product categories.
- Support for nested categories (parent-child relationships).
- Categories can be filtered, listed, and searched to facilitate product organization.

### 2. **Product Module**

- CRUD functionality for managing products.
- Each product is linked to a specific category and provider.
- Products contain detailed information such as SKU, name, price, description, stock level, and images.
- Supports product filtering and searching by category or provider.

### 3. **Provider Module**

- CRUD functionality for managing providers.
- Providers are associated with products, making it easy to track which provider supplies a specific product.
- Providers' contact details and business information are stored for reference.

<h2 align="left">Development with ZenDevx:</h2>

<a href="https://www.zendevx.com/" target="blank"><img align="center" src="https://github.com/user-attachments/assets/7dd7220f-e83c-4490-9ac2-beab3bcf8c35" alt="ZenDevX" height="auto" width="auto" /></a>


<h2 align="left">🐦 Connect With Me:</h2>

<a href="https://www.linkedin.com/company/zendevx/" target="blank"><img align="center" src="https://github.com/user-attachments/assets/9a6080ca-4265-43e5-8652-9454651970a9" alt="ZenDevX" height="50" width="50" /></a>
<a href="https://www.youtube.com/@zendevx" target="blank"><img align="center" src="https://github.com/user-attachments/assets/1beefdd6-fa17-49c9-bde7-e8f30f539b96" alt="ZenDevX" height="50" width="50" /></a>
<a href="#" target="blank"><img align="center" src="https://github.com/user-attachments/assets/f1eeb865-3d23-407a-9a2b-d76b4e85c6dd" alt="ZenDevX" height="50" width="50" /></a>

I hope you like the project. Thanks for reading :)
