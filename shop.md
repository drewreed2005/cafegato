<meta name="viewport" content="width=device-width, initial-scale=1.0">
<h2 style="color:black">Custom Pin Priority</h2>
<table>
    <tr>
        <th><label for="name">Name</label></th>
        <th><label for="email">Email</label></th>
        <th><label for="phone">Phone</label></th>
        <th><label for="custom">Custom Pin</label></th>
    </tr>
    <tr>
        <td><input type="text" name="name" id="name" required></td>
        <td><input type="email" name="email" id="email" placeholder="abc@xyz.org" required></td>
        <td><input type="tel" name="phone_num" id="phone_num"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            placeholder="999-999-9999"></td>
        <td><input type="custom" name="custom" id="custom" required></td>
        <td ><button onclick="create_User()">Submit</button></td>
    </tr>
</table>


<table>
  <thead>
  <tr>
    <th>Name</th>
    <th>ID</th>
    <th>Actions</th>
  </tr>
  </thead>
  <tbody id="table">
    <!-- javascript generated data -->
  </tbody>
</table>


<script>

// Static json, this can be used to test data prior to API and Model being ready
const json = '[{"_name": "Thomas Edison", "_uid": "toby"}, {"_name": "Nicholas Tesla", "_uid": "nick"}, {"_name": "John Mortensen", "_uid": "jm1021"}, {"_name": "Eli Whitney", "_uid": "eli"}, {"_name": "Hedy Lemarr", "_uid": "hedy"}]';

// Convert JSON string to JSON object
const data = JSON.parse(json);

// prepare HTML result container for new output
const table = document.getElementById("table");
data.forEach(user => {
    // build a row for each user
    const tr = document.createElement("tr");

    // td's to build out each column of data
    const name = document.createElement("td");
    const id = document.createElement("td");
    const action = document.createElement("td");
           
    // add content from user data          
    name.innerHTML = user._name; 
    id.innerHTML = user._uid; 

    // add action for update button
    var updateBtn = document.createElement('input');
    updateBtn.type = "button";
    updateBtn.className = "button";
    updateBtn.value = "Update";
    updateBtn.style = "margin-right:16px";
    updateBtn.onclick = function () {
      alert("Update: " + user._uid);
    };
    action.appendChild(updateBtn);

    // add action for delete button
    var deleteBtn = document.createElement('input');
    deleteBtn.type = "button";
    deleteBtn.className = "button";
    deleteBtn.value = "Delete";
    deleteBtn.style = "margin-right:16px"
    deleteBtn.onclick = function () {
      alert("Delete: " + user._uid);
    };
    action.appendChild(deleteBtn);  

    // add data to row
    tr.appendChild(name);
    tr.appendChild(id);
    tr.appendChild(action);

    // add row to table
    table.appendChild(tr);
});
</script>