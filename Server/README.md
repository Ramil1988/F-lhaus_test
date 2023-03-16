# BACKEND: Acronym API

## This API provides basic CRUD operations for acronyms.

### Endpoints:

**1. GET/acronym**

Get a list of acronyms.

_Query parameters:_

- page (optional, default: 1): The page number to return.
- limit (optional, default: 10): The number of results to return per page.
- search (optional, default: ""): The search term to filter results by.

_Response_: Returns a JSON object with the following properties:

- data: An array of acronyms.
- hasNextPage: A boolean indicating whether there are more results after the current page.

_Example response_:

```json
{
  "data": [
    {
      "_id": "507f191e810c19729de860eb",
      "acronym": "2B",
      "definition": "To be"
    },
    {
      "_id": "507f191e810c19729de860ec",
      "acronym": "2EZ",
      "definition": "Too easy"
    }
  ],
  "hasNextPage": true
}
```

_Testing on Postman:_

- Open Postman and create a new request by clicking on the + New button in the top-left corner of the Postman window.
- In the Request tab, set the request method to GET.
- Enter the URL of your server, followed by the endpoint path: http://localhost:3000/acronym.
- In the Params section, add the query parameters for pagination and search. For example, you can set the page parameter to 1, the limit parameter to 10, and the search parameter to too. This will return the first 10 results that match the search term too.
- Click the Send button to make the request.
- Once the response is received, you can view the response body in the Body tab in the lower half of the Postman window.

---

**2. POST/acronym**

This function adds a new acronym to the database. It expects a JSON request body with acronym and definition properties containing the acronym and its definition, respectively.

The function generates a new unique \_id for the acronym based by runnning uuid() function, creates a new object with the provided acronym and definition properties, and adds the object to the data array. If the addition is successful, the function returns a 201 Created status code and a JSON object containing a success message and the new acronym. If an error occurs, the function returns a 500 Internal Server Error status code and a JSON object containing an error message.

This function assumes that the data array is a global variable containing the array of acronyms in the database. You may need to modify the function to access your database in a different way depending on how it is structured.

PUT /acronym/507f191e810c19729de860eb
Content-Type: application/json

```json
{
  "acronym": "TGIF",
  "definition": "Thank God It's Friday"
}
```

_Example response_:

```json
{
  "message": "Acronym created successfully",
  "data": {
    "_id": "1645277127469",
    "acronym": "TGIF",
    "definition": "Thank God It's Friday"
  }
}
```

_Testing on Postman:_

- Open Postman and create a new request.
- Set the request method to POST and enter the endpoint URL for your server, e.g. http://localhost:3000/acronym.
- Select the Body tab and choose the raw option.
- Set the request body to JSON format and enter an example acronym and definition, e.g.:

```json
{
  "acronym": "NWONE",
  "definition": "I am a new one"
}
```

---

**3. PATCH/acronym/:acronymID**

This function updates an existing acronym in the database. It expects a JSON request body with acronym and definition properties containing the acronym and its definition, respectively.

_Example response_:

```json
{
  {
  "message": "Acronym updated successfully",
  "data": {
    "_id": "507f191e810c19729de860eb",
    "acronym": "2B",
    "definition": "To be"
  }
}
}
```

In case of error you will get these messages depending on the type of error:

- 404 Not Found: The specified acronym ID was not found in the database.
- 500 Internal Server Error: An error occurred on the server.

_Testing on Postman:_

- Open Postman and create a new request.
- Set the request method to PATCH.
- Enter the endpoint URL, replacing :acronymID with the ID of the acronym you want to update (e.g. http://localhost:3000/acronym/507f191e810c19729de860eb).
- In the request body tab, select raw and set the format to JSON.
- Enter the updated acronym and definition in the request body (e.g. {"acronym": "2BT", "definition": "To be truthful"}).
- Click the Send button to send the request.
- Check the response to see if the acronym was updated successfully.

---

**3. DELETE/acronym/:acronymID**

Deletes an existing acronym from the database and returns the deleted acronym.

_Example response_:

200 OK: The acronym was deleted successfully. The response body contains the deleted acronym.

In case of error you will get these messages depending on the type of error:

- 404 Not Found: The specified acronym ID was not found in the database.
- 500 Internal Server Error: An error occurred on the server.

_Testing on Postman:_

- Open Postman and create a new request.
- Set the request method to DELETE.
- Enter the endpoint URL, replacing :acronymID with the ID of the acronym you want to delete (e.g. http://localhost:3000/acronym/507f191e810c19729de860eb).
- Click the Send button to send the request.
- Check the response to see if the acronym was deleted successfully and to view the deleted acronym.
