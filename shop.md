<meta name="viewport" content="width=device-width, initial-scale=1.0">
<h2 style="color:black">Cat Lounge Reservation!</h2>
<h3 style="color:black">Enjoy a full hour playing, petting and cozying up with our foster cats in the Cafegato Cat Lounge. You may also enjoy any food and beverages that you purchase in the cafe in the Cat Lounge. The Cat Lounge is a dedicated, cage-free environment for the adoptable cats who are in cared for until they meet their furrever family.</h3>
<table>
    <tr>
        <th><label for="name">Name</label></th>
        <th><label for="phone">Phone</label></th>
    </tr>
    <tr>
        <td><input type="text" name="name" id="name" required></td>
        <td><input type="tel" name="phone_num" id="phone_num"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            placeholder="123-456-7890"></td>
    </tr>
    <tr>
      <th><label for="name">Select a Date</label></th>
      <th><label for="name">Select a Time</label></th>
    </tr>
    <tr>
      <td><input type="date" name="date" id="date" required="" /></td>
      <td><input type="time" name="time" id="time" required="" /></td>
    </tr>
    <tr>
      <th colspan="2"><label for="text">Tell Us About Your Experience With Animals!</label></th>
    </tr>
    <tr>
      <td colspan="2"><textarea name="exp" id="event details" rows="2" cols="45" style="resize:none" required=""></textarea></td>
      <td ><button onclick="create_User()">Submit Reservation</button></td>
    </tr>
</table>

<table>
  <thead>
  <tr>
    <th>Name</th>
    <th>Phone</th>
    <th>Date</th>
    <th>Time</th>
    <th>Experience</th>
    <th>Actions</th>
  </tr>
  </thead>
  <tbody id="table">
    <!-- javascript generated data -->
  </tbody>
</table>

<script>
  const json = '[{"_name":"Thomas Edison", "_phone":"123-456-7890", "_date":"01/25/23", "_time":"05:30 PM", "_exp":"Great with animals, I have 4 cats!"}, {"_name":"John Mortenson", "_phone":"321-654-0987", "_date":"01/28/23", "_time":"12:00 PM", "_exp":"Good with dogs, but cats hate me."}]';

  // Convert JSON string to JSON object
  const data = JSON.parse(json);

  // prepare HTML result container for new output
  const table = document.getElementById("table");
  data.forEach(user => {
      // build a row for each user
      const tr = document.createElement("tr");

      // td's to build out each column of data
      const name = document.createElement("td");
      const phone = document.createElement("td");
      const date = document.createElement("td");
      const time = document.createElement("td");
      const exp = document.createElement("td");
      const action = document.createElement("td");
            
      // add content from user data          
      name.innerHTML = user._name; 
      phone.innerHTML = user._phone; 
      date.innerHTML = user._date; 
      time.innerHTML = user._time;
      exp.innerHTML = user._exp; 

      // add action for update button
      var updateBtn = document.createElement('input');
      updateBtn.type = "button";
      updateBtn.className = "btn";
      updateBtn.value = "Update";
      updateBtn.style = "margin-right:16px";
      updateBtn.onclick = function () {
      alert("Update: " + user._name);
      };
      action.appendChild(updateBtn);

      // add action for delete button
      var deleteBtn = document.createElement('input');
      deleteBtn.type = "button";
      deleteBtn.className = "btn";
      deleteBtn.value = "Delete";
      deleteBtn.style = "margin-right:16px"
      deleteBtn.onclick = function () {
      alert("Delete: " + user._name);
      };
      action.appendChild(deleteBtn);  

      // add data to row
      tr.appendChild(name);
      tr.appendChild(phone);
      tr.appendChild(date);
      tr.appendChild(time);
      tr.appendChild(exp);
      tr.appendChild(action);

      // add row to table
      table.appendChild(tr);
  });
</script>