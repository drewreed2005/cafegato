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
        <th><label for="event_name">Event Name</label></th>
    </tr>
    <tr>
        <td><input type="text" name="name" id="name" required></td>
        <td><input type="email" name="email" id="email" placeholder="abc@xyz.org" required></td>
        <td><input type="text" name="event_name" id="event_name" required></td>
    </tr>
    <tr>
        <th colspan="2"><label for="event_details">Details</label></th>
        <th><label for="date">Date</label></th>
    </tr>
    <tr>
        <td colspan="2"><textarea name="event_details" id="event_details" rows="2" cols="47" style="resize:none" required></textarea></td>
        <td><input type="date" name="date" id="date" required></td>
    </tr>
    <tr>
        <th><label for="start_time">Start Time</label></th>
        <th><label for="end_time">End Time</label></th>
        <th><label for="password">Secret Password</label></th>
    </tr>
    <tr>
        <td><input type="time" name="start_time" id="start_time" min="8:00" max="18:00" required></td>
        <td><input type="time" name="end_time" id="end_time" min="8:00" max="18:00" required></td>
        <td><input type="password" name="password" id="password" required></td>
    </tr>
</table>
<button class='btn' onclick="submit_Form()">Submit</button>

<h2 style="color:black" class="widebr">Current Event Log</h2>
<button class="btn" id="evlogbtn" onclick="showEvTable()">Show Event Log</button>
<div id="delControls" style="display:none;justify-content:center;font-size:20px">
    <th>Event name: <input type="text" name="event_name_del" id="event_name_del" style="display:none" required>  Event Password: <input type="text" name="password_del" id="password_del" style="display:none" required><br><button class="btn" id="deletebtn" style="display:none" onclick="delete_Event()">Delete Event</button></th>
</div>
<div style="font-size:25px;display:none" id="filters" name="filters">
    Filters: <select id="timesort" name="timesort">
    <option value="time_submitted">Time Submitted</option>
    <option value="soonest">Soonest</option>
    <option value="latest">Latest</option>
    </select>
    <input type="month" id="monthfil" name="monthfil" value="2023-05">
    <button class="btn" id="sortbtn" onclick="sort_Events()">Sort</button>
</div>
<div id="logControls" style="display:flex;justify-content:center">
    <th><button class="btn" id="logrefbtn" style="display:none" onclick="create_Table()">Refresh Log</button></th>
</div>

<table id="evtable" style="display:none;width:50%">
  <thead>
  <tr>
    <th>Name</th>
    <th>Email</th>
    <th>Event Name</th>
    <th>Event Details</th>
    <th>Event Date</th>
    <th>Start Time</th>
    <th>End Time</th>
  </tr>
  </thead>
  <tbody id="evtablecont">
    <!-- javascript generated data -->
  </tbody>
</table>

<script>
    let sorted = false;
    var pulldata = "";

    //NOTE: the url that data is pulled from was previously from a deployed, linked site, but due to lack of resources the AWS container had most of its instances brought down
    const read_url = "http://127.0.0.1:8239/api/events/";
    const read_options = {
        method: 'GET', //read option
        mode: 'cors', // cors used
        cache: 'default', // set to default
        credentials: 'omit', // omit credentials
        headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
        },
    };
    const post_url = "http://127.0.0.1:8239/api/events/create"; // for POST
    const del_url = "http://127.0.0.1:8239/api/events/delete"; // for DELETE

    const table = document.getElementById("evtablecont");

    function showEvTable() {
        create_Table(); //making table interaction elements visible
        document.getElementById('evlogbtn').style = "display:none";
        document.getElementById('logrefbtn').style = "display:block";
        document.getElementById('delControls').style = "display:block";
        document.getElementById('event_name_del').style = "display:block";
        document.getElementById('password_del').style = "display:block";
        document.getElementById('deletebtn').style = "display:block";
        document.getElementById('evtable').style = "display:block";
        document.getElementById('filters').style = "font-size:25px;display:block";
    }

    //a function used to translate times for the Date object, used below
    function time_Dif(start, end) {
        var hourdif = 60 * (Number(end.substring(0, 2)) - Number(start.substring(0, 2)));
        var mindif = Number(end.substring(3, 5)) - Number(start.substring(3, 5));
        return hourdif + mindif
    }

    // function used when the submit button is clicked for new events
    function submit_Form() {
        try {
            //NOTE: uses of the FETCH function are modeled based on https://github.com/nighthawkcoders/APCSP/blob/master/_posts/2022-07-10-PBL-database.md; the rest of the content of this function is my own
            fetch(read_url, read_options)
                // response is RESTful, process needs to be sequential
                .then(response => {
                // check for response errors
                if (response.status !== 200) {
                    const errorMsg = 'Database response error: ' + response.status;
                    console.log(errorMsg);
                };
                // valid response is JSON
                response.json().then(data => {
                    var form_list = [document.getElementById('name').value, document.getElementById('email').value, document.getElementById('event_name').value, document.getElementById('event_details').value, document.getElementById('date').value, document.getElementById('start_time').value, document.getElementById('end_time').value, document.getElementById('password').value];
                    // for loop to ensure all fields were filled in
                    for (let i = 0; i < form_list.length; i++) {
                        if (form_list[i] == '') {
                            alert("There was an error processing your form. Make sure all fields are filled in.");
                            return;
                        };
                    };
                    for (let i = 0; i < 4; i++) {
                        if (form_list[i].length > 100) {
                            alert("There was an error processing your form. Certain input fields have too many characters. Make sure that your name, email, event name, and details are all no more than 100 characters long. (This is a measure to prevent spam.)")
                            return;
                        };
                    };
                    // Defining some variables for validation
                    var tempdate = document.getElementById('date').value;
                    var tempstime = document.getElementById('start_time').value;
                    var tempetime = document.getElementById('end_time').value;
                    var datefix = tempdate.substr(5, 2) + '/' + tempdate.substr(8, 10) + '/' + tempdate.substr(0, 4);
                    const hourdict = [{"open":10, "close":18}, {"open":8, "close":17}, {"open":8, "close":17}, {"open":8, "close":17}, {"open":8, "close":17}, {"open":8, "close":17}, {"open":10, "close":18}]; //matches open times in military time
                    form_list[4] = datefix;
                    var fulldate = datefix + " " + tempstime;
                    let ev_date = new Date(fulldate);
                    let cur_date = new Date();
                    console.log(ev_date, cur_date);
                    let ev_dow = ev_date.getDay()
                    // validating date for valid range
                    var datedif = Math.ceil((ev_date - cur_date) / (1000 * 60 * 60 * 24));
                    if (1 > datedif || 365 < datedif) {
                        alert("There was an error processing your form. Make sure the date you have inputted is less than a year in the future.");
                        return;
                    };
                    // validating day of the week considering open hours
                    if (Number(tempstime.substring(0, 2)) < hourdict[ev_dow]["open"] || Number(tempstime.substring(0, 2)) >= hourdict[ev_dow]["close"]) {
                        alert("There was an error processing your form. It seems that your event starts before opening/after closing on " + datefix + ".");
                        return;
                    } else if (Number(tempetime.substring(0, 2)) <= hourdict[ev_dow]["open"] || Number(tempetime.substring(0, 2)) > hourdict[ev_dow]["close"]) {
                        alert("There was an error processing your form. It seems that your event ends before opening/after closing on " + datefix + ".");
                        return;
                    };
                    // validating event duration (must be at least 15 minutes, less than 3 hours, start must be before end)
                    var timedif = time_Dif(tempstime, tempetime); //in minutes
                    if (timedif < 15 || timedif > 180) {
                        alert("There was an error processing your form. Make sure that your event lasts at least 15 minutes, but no more than 3 hours.")
                        return;
                    };
                    // validating coincidence and email
                    var coinc = 0;
                    for (let i = 0; i < data.length; i++) {
                        temppull = data[i];
                        if (temppull['date'] == datefix) {
                            if (Number(tempstime.substring(0, 2)) <= Number(temppull['start_time'].substr(0, 2)) < Number(tempetime.substring(0, 2)) || Number(tempstime.substring(0, 2)) < Number(temppull['end_time'].substr(0, 2)) <= Number(tempetime.substring(0, 2))) {coinc = coinc + 1;};
                        };
                        if (temppull['email'] == form_list[1]) {
                            alert("There was an error processing your form. It seems that an event has already been created by that email. If someone has used your address to create an event without your consent, contact our staff.");
                            return;
                        };
                    };
                    if (coinc > 5) {
                        alert("There was an error processing your form. Make sure that your event's timing does not coincide with the timing of more than five other events.");
                        return;
                    };
                    // if all validations successful
                    const body = {
                        "name": document.getElementById('name').value,
                        "email": document.getElementById('email').value,
                        "event_name": document.getElementById('event_name').value,
                        "event_details": document.getElementById('event_details').value,
                        "date": datefix,
                        "start_time": document.getElementById('start_time').value,
                        "end_time": document.getElementById('end_time').value,
                        "password": document.getElementById('password').value
                    };
                    const post_options = {
                        method: 'POST',
                        body: JSON.stringify(body),
                        headers: {
                            'Content-Type':'application/json',
                            'Authorization': 'Bearer my-token',
                        },
                    };
                    console.log(body);
                    fetch(post_url, post_options)
                        .then(response =>
                            response.json().then(data => {
                                console.log(data);
                            })
                        )
                    alert("Thank you, " + form_list[0] + ", for submitting an event!\n\n(Warning: You cannot submit two events at the same time! You may only have one event at a time.)");
                });
            });
        } catch (err) {
            alert("There was an error processing your form. (Failed to send to/pull from the database, or there was an error in the formatting of your form. You may be on restricted WiFi.)");
        };
    };

    // prepare HTML result container for new output
    function create_Table() {
        // fetch the API
        fetch(read_url, read_options)
            // response is a RESTful "promise" on any successful fetch
            .then(response => {
            // check for response errors
            if (response.status !== 200) {
                const errorMsg = 'Database response error: ' + response.status;
                console.log(errorMsg);
            }
            // valid response will have json data
            response.json().then(data => {table_Make(data)})
        });
    };
    
    // forms a table based on a list argument, requires formatting
    function table_Make(list) {
        table.innerHTML = "";
        list.forEach(user => {
                // creating a new row for each event
                const tr = document.createElement("tr");
                // building each column of data
                const name = document.createElement("td");
                const email = document.createElement("td");
                const event_name = document.createElement("td");
                const event_details = document.createElement("td");
                const date = document.createElement("td");
                const start_time = document.createElement("td");
                const end_time = document.createElement("td");
                
                // filtering times to display in Pacific time
                var temp_stime = user.start_time;
                var temp_etime = user.end_time;
                if (Number(temp_stime.substring(0, 2)) > 12) {
                    var temp_shr = Number(temp_stime.substring(0, 2)) - 12;
                    var new_stime = String(temp_shr) + temp_stime.substring(2, 5) + " PM";
                } else if (Number(temp_stime.substring(0, 2)) < 12) {
                    var new_stime = temp_stime + " AM"
                } else {
                    var new_stime = temp_stime + " PM"
                }
                if (Number(temp_etime.substring(0, 2)) > 12) {
                    var temp_ehr = Number(temp_etime.substring(0, 2)) - 12;
                    var new_etime = String(temp_ehr) + temp_etime.substring(2, 5) + " PM";
                } else if (Number(temp_etime.substring(0, 2)) < 12) {
                    var new_etime = temp_etime + " AM"
                } else {
                    var new_stime = temp_etime + " PM"
                }

                // after validation with pull, content is added       
                name.innerHTML = user.name; 
                email.innerHTML = user.email; 
                event_name.innerHTML = user.event_name; 
                event_details.innerHTML = user.event_details;
                date.innerHTML = user.date; 
                start_time.innerHTML = new_stime; 
                end_time.innerHTML = new_etime;
                // the columns are appended to the row
                tr.appendChild(name);
                tr.appendChild(email);
                tr.appendChild(event_name);
                tr.appendChild(event_details);
                tr.appendChild(date);
                tr.appendChild(start_time);
                tr.appendChild(end_time);
                // the row is appended to the table
                table.appendChild(tr);
        });
    };

    // variables here are defined outside of the function to give them global scope
    var soonval = "placeholder";
    var soon_fulldate = "placeholder";
    var temp_soondate = "placeholder";
    var lateval = "placeholder";
    var late_fulldate = "placeholder";
    var temp_latedate = "placeholder";

    function sort_Events() {
        var orderval = document.getElementById("timesort").value;
        var monthval = document.getElementById("monthfil").value;
        var sorted_List = [];
        // fetch the API
        fetch(read_url, read_options)
            // new fetch to update
            .then(response => {
            // response error handler
            if (response.status !== 200) {
                const errorMsg = 'Database response error: ' + response.status;
                console.log(errorMsg);
            };
            response.json().then(data => {
                var testcopy = [...data];
                var d_length = testcopy.length;
                if (orderval == "time_submitted") {
                            testcopy.forEach(event => {sorted_List.push(event)}); // below orders based on the input from the selection menu
                } else if (orderval == "soonest") {
                    for (let j = 0; j < d_length; j++) {
                        let i = 0;
                        testcopy.forEach(event => {
                            if (i == 0) {
                                soon_fulldate = event['date'] + " " + event['start_time'];
                                temp_soondate = new Date(soon_fulldate);
                                soonval = event;
                            } else {
                                var temp_fulldate = event['date'] + " " + event['start_time'];
                                var temp_evdate = new Date(temp_fulldate);
                                if (temp_evdate.getTime() < temp_soondate.getTime()) {
                                    soon_fulldate = event.date + " " + event.start_time;
                                    temp_soondate = new Date(soon_fulldate);
                                    soonval = event;
                                };
                            };
                            i = i + 1;
                        });
                        sorted_List.push(soonval);
                        for (let i = 0; i < testcopy.length; i++) {
                            if (testcopy[i] == soonval) {
                                testcopy.splice(i, 1);
                            };
                        };
                    };
                } else if (orderval == "latest") {
                    for (let j = 0; j < d_length; j++) {
                        let i = 0;
                        testcopy.forEach(event => {
                            if (i == 0) {
                                late_fulldate = event['date'] + " " + event['start_time'];
                                temp_latedate = new Date(late_fulldate);
                                lateval = event;
                            } else {
                                var temp_fulldate = event['date'] + " " + event['start_time'];
                                var temp_evdate = new Date(temp_fulldate);
                                if (temp_evdate.getTime() > temp_latedate.getTime()) {
                                    late_fulldate = event.date + " " + event.start_time;
                                    temp_latedate = new Date(late_fulldate);
                                    lateval = event;
                                };
                            };
                            i = i + 1;
                        });
                        sorted_List.push(lateval);
                        for (let i = 0; i < testcopy.length; i++) {
                            if (testcopy[i] == lateval) {
                                testcopy.splice(i, 1);
                            };
                        };
                    };
                };
                var final_List = [];
                for (let k = 0; k < sorted_List.length; k++) {
                    if (sorted_List[k]['date'].substring(6, 10) == monthval.substring(0, 4)) {
                        if (sorted_List[k]['date'].substring(0, 2) == monthval.substring(5, 7)) {final_List.push(sorted_List[k])} else {};
                    } else {};
                };
                table_Make(final_List);
            });
        });
    };

    // function to delete events with event name and password (unique)
    function delete_Event() {
        var del_ename = document.getElementById("event_name_del").value;
        var del_password = document.getElementById("password_del").value;
        var success = false;
        fetch(read_url, read_options)
            // fetch to look for most updated event data
            .then(response => {
            // check for response errors
            if (response.status !== 200) {
                const errorMsg = 'Database response error: ' + response.status;
                console.log(errorMsg);
            };
            response.json().then(data => {
                data.forEach(event => {
                    if (event['event_name'] == del_ename && event['password'] == del_password) {
                        // if all validations successful
                        const del_ID = event['id'];
                        const body = {
                            'id':del_ID
                        };
                        const del_options = {
                            method: 'DELETE',
                            body: JSON.stringify(body),
                            headers: {
                                'Content-Type':'application/json',
                                'Authorization': 'Bearer my-token',
                            },
                        };
                        console.log(body);
                        fetch(del_url, del_options)
                            .then(response =>
                                response.json().then(data => {
                                    console.log(data);
                                })
                            )
                        alert('You have successfully deleted the event "' + event['event_name'] + '" from the events database.');
                        success = true;
                    }
                })
                if (success == false) {alert("There was an error in one of the two fields you have filled in. Make sure that your event name and password both match the case used when first created. (You can copy-paste the event name from the data below.)")}
            })
        })
    }
</script>