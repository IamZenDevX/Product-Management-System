# Product-Management-System
# Introduction:

The **Product Management System** is a comprehensive platform designed to manage products, providers, and categories. The system allows administrators to efficiently manage a wide range of products, track the suppliers/providers, and categorize items for easy navigation and organization. This repository provides the backend and frontend components to handle CRUD operations for products, categories, and providers.

# Key Features :

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

## **Tools Used:**

![Zendevx Technology.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/3f690236-03bd-47db-ac0f-28b089483950/08d9df57-b114-4701-bd1c-89548cd3661c/Zendevx_Technology.png)

## Testing Tools Used:

![PostMan Github.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/3f690236-03bd-47db-ac0f-28b089483950/0d6d1c89-f506-4ac0-8d04-9f5ff3d35244/PostMan_Github.png)

### **Library:**

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

## 1. **Database Structure**

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

### **Modules and Components**:

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

# **Development with ZenDevx:**

!https://private-user-images.githubusercontent.com/185465554/377859615-7dd7220f-e83c-4490-9ac2-beab3bcf8c35.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3Mjk1MDUwODQsIm5iZiI6MTcyOTUwNDc4NCwicGF0aCI6Ii8xODU0NjU1NTQvMzc3ODU5NjE1LTdkZDcyMjBmLWU4M2MtNDQ5MC05YWMyLWJlYWIzYmNmOGMzNS5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQxMDIxJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MTAyMVQwOTU5NDRaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1kMzVmODI0ZTc4ZjZiZmM0ZjgwNWEyOTJhMjdhNTJhMDUyNTRhOTMyMThlMmI2M2YxNjI1ZmFmOTVlMDg2ZTBkJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.Fzm1V9B6asyk6qrjAoAEG535e1_SkoIT6UHSDV5RQ6o

# **🐦 Connect With Me:**

           

![download (1).png](https://prod-files-secure.s3.us-west-2.amazonaws.com/3f690236-03bd-47db-ac0f-28b089483950/90e12aba-9757-4c54-ab2d-9357fddb8a83/download_(1).png)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/3f690236-03bd-47db-ac0f-28b089483950/23afd96a-1373-48f9-b3ea-d10ed0b03463/image.png)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/3f690236-03bd-47db-ac0f-28b089483950/decfc413-8d87-4ea1-9982-958d8f7dc958/image.png)

I hope you like the project. Thanks for reading :)
