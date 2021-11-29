**Get All Messages**
----
  Returns json data with all messages.

* **URL**

  /api/messages

* **Method:**

  `GET`
  
*  **URL Params**

   **Required:**
 

* **Data Params**

  None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{"messages": [{"id": 1638183084658,"message": "Hello Qlik 1","palindrome": false}]}`
 
* **Error Response:**

  * **Code:** 500 <br />
    **Content:** `{ error }`

* **Sample Call:**

  ```javascript
    $.ajax({
      url: "/api/messages",
      dataType: "json",
      type : "GET",
      success : function(r) {
        console.log(r);
      }
    });
  ```

  **Get Message**
----
Returns json data with message info.

* **URL**

  /api/message/messageId

* **Method:**
  
  `GET`
  
*  **URL Params**

   **Required:**
 
   `messageId=[integer]`


* **Data Params**

  None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{"id": 1638183084658,"message": "Hello Qlik 1","palindrome": false}`
 
* **Error Response:**

  * **Code:** 404 <br />
    **Content:** `{ error : ""item not found"" }`


* **Sample Call:**

```javascript
    $.ajax({
      url: "/api/message/1638183084658",
      dataType: "json",
      type : "GET",
      success : function(r) {
        console.log(r);
      }
    });
```


**Create new message**
----
  Creates a new message.

* **URL**

  /api/message

* **Method:**

  `POST`
  
*  **URL Params**

   **Not Required:**
 

* **Data Params**

**Required:**
    `message=[string]`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{"id": 1638183084658,"message": "Hello Qlik 1","palindrome": false}`

  OR

  * **Code:** 201 <br />
    **Content:** `{"id": 1638183084658,"message": "Hello Qlik 1","palindrome": false}`
 
* **Error Response:**

  * **Code:** 500 <br />
    **Content:** `{ error }`

* **Sample Call:**

  ```javascript
    $.ajax({
      url: "/api/message",
      dataType: "json",
      type : "POST",
      success : function(r) {
        console.log(r);
      }
    });
  ```

  **Update existing message or create new message**
----
  Updates or Creates a message.

* **URL**

  /api/message/messageId

* **Method:**

  `PUT`
  
*  **URL Params**

   **Required:**
 
   `messageId=[integer]`
 

* **Data Params**

**Required:**
    `message=[string]`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{"id": 1638183084658,"message": "Hello Qlik 1","palindrome": false}`


 
* **Error Response:**

  * **Code:** 500 <br />
    **Content:** `{ error }`

* **Sample Call:**

  ```javascript
    $.ajax({
      url: "/api/message/1638183084658",
      dataType: "json",
      type : "PUT",
      success : function(r) {
        console.log(r);
      }
    });
  ```


  **Deleteing existing message**
----
  Deleteing existing message.

* **URL**

  /api/message/messageId

* **Method:**

  `DELETE`
  
*  **URL Params**

   **Required:**
 
   `messageId=[integer]`
 

* **Data Params**

**Not Required:**

* **Success Response:**

  * **Code:** 204 <br />
    **Content:** ``


 
* **Error Response:**

  * **Code:** 500 <br />
    **Content:** `{ error }`

* **Sample Call:**

  ```javascript
    $.ajax({
      url: "/api/message/1638183084658",
      dataType: "json",
      type : "DELETE",
      success : function(r) {
        console.log(r);
      }
    });
  ```