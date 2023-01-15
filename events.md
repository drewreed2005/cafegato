<meta name="viewport" content="width=device-width, initial-scale=1.0">
<style>
  .dblrow {
    display: flex;
  }
  .dblcol {
    flex: 50%;
    padding: 5px;
  }
  .padev {
    padding-left: 20px;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-right: 10px;
  }
</style>

<h1 style="color:black">2023 Special Events</h1>

For many prominent holidays throughout the year, we will be hosting unique events! See some information below.
<div class="dblrow">
    <div class="eventbox dblcol padev" style="border:solid 6px #E88ACC;background:#E3A9D2;font-size:18px">
        <h1 style="color:white;text-align:center" class="widebr"><u>Valentine's Day:<br>Kitty Love</u></h1>
        <h2 style="color:white;font-size:20px" class="widebr">Taking place Febrary 12th through 18th</h2>
        Special menu deals, such as Chocolate Hearts and Valentine's-themed latte art, will be sold this week only!. Visitors coming in pairs will receive a buy one, get one free deal on any of these special items!
    </div>
    <div class="eventbox dblcol padev" style="border:solid 6px #55BD40;background:#65E04C;font-size:18px">
        <h1 style="color:white;text-align:center" class="widebr"><u>St. Patrick's Day:<br>Lucky Cats</u></h1>
        <h2 style="color:white;font-size:20px" class="widebr">Taking place March 12th through 18th</h2>
        Along with special coffee made from imported Irish coffee beans, we will host a leprechaun-trap-making area in the events room for the week. On the 18th, maybe one of the traps will have caught one! 
    </div>
</div>
<div class="dblrow">
    <div class="eventbox dblcol padev" style="border:solid 6px #000000;background:#FC9A2B;font-size:18px">
        <h1 style="color:white;text-align:center" class="widebr"><u>Halloween:<br>Black Cats</u></h1>
        <h2 style="color:white;font-size:20px" class="widebr">Taking place October 24th through 31st</h2>
        Leading up to Halloween night, we will give a 50% discount to any reservations for those wearing costumes. On Halloween night, stop by for trick-or-treating for cat-themed sweets and lots of cool decorations!
    </div>
    <div class="eventbox dblcol padev" style="border:solid 6px #C6F5BE;background:#FF4747;font-size:18px">
        <h1 style="color:white;text-align:center" class="widebr"><u>Christmas:<br>Cool Cats</u></h1>
        <h2 style="color:white;font-size:20px" class="widebr">Taking place December 18th through 25th</h2>
        We will be adding lots of warm holiday season menu items to combat the cold weather, including peppermint cookies and coffee! On the 23rd, we will be hosting a gift drive in the events room.
    </div>
</div>
<span class="widebr"></span>

<h1 style="color:black">Create Your Own Event!</h1>
The events room has plenty of space for scheduled get-togethers! Bring members of your club, social group, etc.

(Note: There are sometimes conflicts with other events in the events room. If a certain time period is heavily booked, or if another event is to be hosted during that period, your submission may be rejected. Be sure to check your email to make sure your form was confirmed.)

<h2 style="color:black">Event Form Submission</h2>

<table>
    <tr>
        <th><label for="name">Name</label></th>
        <th><label for="email">Email</label></th>
        <th><label for="text">Event Name</label></th>
    </tr>
    <tr>
        <td><input type="text" name="name" id="name" required></td>
        <td><input type="email" name="email" id="email" placeholder="abc@xyz.org" required></td>
        <td><input type="text" name="event name" id="event name" required></td>
    </tr>
    <tr>
        <th colspan="2"><label for="text">Details</label></th>
        <th><label for="date">Date</label></th>
    </tr>
    <tr>
        <td colspan="2"><textarea name="event details" id="event details" rows="2" cols="45" style="resize:none" required></textarea></td>
        <td><input type="date" name="date" id="date" required></td>
    </tr>
    <tr>
        <th><label for="time">Start Time</label></th>
        <th><label for="time">End Time</label></th>
    </tr>
    <tr>
        <td><input type="time" name="start_time" id="start_time" min="8:00" max="18:00" required></td>
        <td><input type="time" name="end_time" id="end_time" min="8:00" max="18:00" required></td>
        <td><button onclick="submit_Form()">Submit</button></td>
    </tr>
</table>

<h2 style="color:black" class="widebr">Current Event Log</h2>
<button class="btn" id="evlogbtn" onclick="showEvTable()">Show Event Log</button>

<table id="evtable" style="display:none;width:50%">
  <thead>
  <tr>
    <th>Name</th>
    <th>Email</th>
    <th>Event Name</th>
    <th>Event Description</th>
    <th>Event Date</th>
    <th>Start Time</th>
    <th>End Time</th>
    <th>ADMIN FUNCTIONS</th>
  </tr>
  </thead>
  <tbody id="evtablecont">
    <!-- javascript generated data -->
  </tbody>
</table>

<script>
    function showEvTable() {
        document.getElementById('evlogbtn').style = "display:none";
        document.getElementById('evtable').style = "display:block";
        document.getElementById('evtablecontent').style = "display:block";
    }

    // THIS IS A PLACEHOLDER FUNCTION FOR WHEN THE API IS RUNNING
    function submit_Form() {
        var tempname = document.getElementById('name').value;
        alert("Thank you, " + tempname + ", for submitting an event! Watch your email for a confirmation message. \n\n(Warning: Please do not submit two events at a time! Your events may end up being cancelled as a result.)"); 
    }

    // Static json, this can be used to test data prior to API and Model being ready
    const json = '[{"_name":"Thomas Edison", "_email":"tedison@lightbulb.edu", "_event_name":"The Edison Troupe Meet", "_event_details":"We 10 selected geniuses will meet in the events room for a convergence.", "_date":"02/23/2023", "_start_time":"13:00", "_end_time":"14:00"}, {"_name":"John Mortensen", "_email":"jmortensen@powayusd.com", "_event_name":"Extra Credit Code Meetup", "_event_details":"Come to work on ideation and any confusion with the Full Stack CPT project. No phones.", "_date":"02/25/2023", "_start_time":"10:00", "_end_time":"12:00"}]';

    // Convert JSON string to JSON object
    const data = JSON.parse(json);

    // prepare HTML result container for new output
    const table = document.getElementById("evtablecont");
    data.forEach(user => {
        // build a row for each user
        const tr = document.createElement("tr");

        // td's to build out each column of data
        const name = document.createElement("td");
        const email = document.createElement("td");
        const event_name = document.createElement("td");
        const event_details = document.createElement("td");
        const date = document.createElement("td");
        const start_time = document.createElement("td");
        const end_time = document.createElement("td");
        const action = document.createElement("td");
            
        // add content from user data          
        name.innerHTML = user._name; 
        email.innerHTML = user._email; 
        event_name.innerHTML = user._event_name; 
        event_details.innerHTML = user._event_details;
        date.innerHTML = user._date; 
        start_time.innerHTML = user._start_time; 
        end_time.innerHTML = user._end_time;

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
        tr.appendChild(email);
        tr.appendChild(event_name);
        tr.appendChild(event_details);
        tr.appendChild(date);
        tr.appendChild(start_time);
        tr.appendChild(end_time);
        tr.appendChild(action);

        // add row to table
        table.appendChild(tr);
    });
</script>