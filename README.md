<h1 align="left">Product-Management-System</h1>
<h2 align="left">Introduction:</h2>

The Product Management System is a Comprising a complete platform targeted to handle goods, vendors, and categories, the Product Management System lets managers monitor suppliers or vendors, effectively handle a wide spectrum of items, and classify objects for basic access and organization. From this source frontend and backend components enable item, category, and supplier CRUD operations control.

<h2 align="left">Key Features:</h2>

1. **Category Management**
    - Create, update, delete, and list product categories.
    - Sort everything for simple reading and filtering needs.
2. **Product Management**
    - Add, change, classify objects in Product Regulation.
    - Sort every good and trace it back to a vendor.
    - Save complete product details including pricing, description, stock level.
    - Depending on category, manufacturer, or keyword, sear and filter products.
3. **Provider Management**
    - Change and add provider data to facilitate vendor or supplier management.
    - Associate particular products with particular companies.
    - List specific items a given seller carries on hand.
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

The platform will require a relational database to manage category,Product And Provider . Below is a proposed database structure with the key tables.

### **Tables**:

---

### a) Category

| **Field Name** | **Type** |
| --- | --- |
| CategoryID | String |
| name | String |

### b) **Provider**

| **Field Name** | **Type** |
| --- | --- |
| ProviderID | String |
| name | String |
| website | String |
| email | String |
| phone | String |

### c) **Product**

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



<h2 align="left">Modules and Components:</h2>

### **Modules and Components**:

### 1. **Category Module**

- CRUD tools for study on consumer behavior in product categories.
- Support of hierarchical structures or parent-child relationships.
- Listing, searching, and filtering categories assist products to be arranged.

### 2. **Product Module**

- product care Every good depends on CRUD powers and links to a particular category and store.
- Products particularly show whole information like SKU, name, price, description, stock level, and images.
- Particularly aids searches based on categories or suppliers depending on products.

### 3. **Provider Module**

- CRUD tools for provider management in general.
- Products link suppliers to allow simple identification of which one provides a necessary item.
- articularly for reference are the supplier connections and company data stored here.
<h2 align="left">Development with ZenDevx:</h2>

<a href="https://www.zendevx.com/" target="blank"><img align="center" src="https://github.com/user-attachments/assets/7dd7220f-e83c-4490-9ac2-beab3bcf8c35" alt="ZenDevX" height="auto" width="auto" /></a>


<h2 align="left">🐦 Connect With Me:</h2>

<a href="https://www.linkedin.com/company/zendevx/" target="blank"><img align="center" src="https://github.com/user-attachments/assets/9a6080ca-4265-43e5-8652-9454651970a9" alt="ZenDevX" height="50" width="50" /></a>
<a href="https://www.youtube.com/@zendevx" target="blank"><img align="center" src="https://github.com/user-attachments/assets/1beefdd6-fa17-49c9-bde7-e8f30f539b96" alt="ZenDevX" height="50" width="50" /></a>
<a href="#" target="blank"><img align="center" src="https://github.com/user-attachments/assets/f1eeb865-3d23-407a-9a2b-d76b4e85c6dd" alt="ZenDevX" height="50" width="50" /></a>

I hope you like the project. Thanks for reading :)
