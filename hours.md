<meta name="viewport" content="width=device-width, initial-scale=1.0">
<h1 style="color:black">Hours</h1>
<table>
  <tr>
    <th>Week Day</th>
    <th>Hours</th>
    <th>Weekly Events</th>
    <th>Details</th>
  </tr>
  <tr>
    <td>Monday</td>
    <td>8AM - 5PM</td>
    <td>Blue Mountain Mondays</td>
    <td>Enjoy one free cup of high-quality Jamaican Blue Mountain coffee with a reservation.</td>
  </tr>
  <tr>
    <td>Tuesday</td>
    <td>8AM - 5PM</td>
    <td>Cat Pose</td>
    <td>Join us in the events room from yoga (opening to 10AM).</td>
  </tr>
  <tr>
    <td>Wednesday</td>
    <td>8AM - 5PM</td>
    <td>Superhero Day</td>
    <td>Come dressed as your favorite superhero and get a free medium drink.</td>
  </tr>
  <tr>
    <td>Thursday</td>
    <td>8AM - 5PM</td>
    <td>Cats for Coffee</td>
    <td>Show us a picture/video of you with your cat, tell us a bit about them, and enjoy a free medium drink.</td>
  </tr>
  <tr>
    <td>Friday</td>
    <td>8AM - 5PM</td>
    <td>Up-and-Coming Local Jazz</td>
    <td>Enjoy soothing music from rising local bands, in and out of the cat room.</td>
  </tr>
  <tr>
    <td>Saturday</td>
    <td>10AM - 6PM</td>
    <td>Bingo Night</td>
    <td>Join us for bingo from 5PM to 6PM in the events room.</td>
  </tr>
  <tr>
    <td>Sunday</td>
    <td>10AM - 6PM</td>
    <td>Support Animals</td>
    <td>A portion of all food and drink sales are be donated to the <a href="https://www.sdhumane.org/">San Diego Humane Society</a>.</td>
  </tr>
</table>


### Holiday Policy

We remain open on these holidays (with special holiday offerings!):

<ul>
  <li style="color:pink">Valentine's Day</li>
  <li style="color:green">Saint Patrick's Day</li>
  <li style="color:purple">Easter</li>
  <li style="color:blue">4th of July</li>
  <li style="color:orange">Halloween</li>
  <li style="color:red">Christmas Eve</li>
</ul>

We will remain closed on certain other prominent holidays such as Veterans Day, Thanksgiving, and Christmas Day.

<h1 style="color:black">Daily Schedule</h1>

Here are the sort of things you can expect to see each day.

<div class="eventbox" style="border:solid 6px #805900;background:#EDA500">
    <img src="{{site.baseurl}}/images/cat-cafe-maui-11-1024x576.jpeg" width="300px" style="float:right;padding: 5px 5px 5px 5px">   
    <h1 style="color:white" class="widebr"><u>9AM: Kitty Breakfast</u></h1>
    The cats may need to take a short break from playing with toys or sitting on high-up hammocks to eat their own breakfast. (Don't worry: we make sure they're all fed plenty!)
    <span class="widebr"></span>
    If you come on the weekend, the kitties will already have been fed.
    <span class="widebr"></span>
    <div class="button">
      <button type="submit" class="btn" onclick="openPopup('feedingbfpopup')">Feeding Information</button>
      <div class="popup" id="feedingbfpopup" style="width:600px;transform:translate(-50%, -50%)">
        <img src="https://raw.githubusercontent.com/drewreed2005/cafegato/gh-pages/images/01-09-23-cat2.webp">
        <br><br>
        <h1 style="color:black"><b>Feeding Information</b></h1>
        <p style="font-size:18">Cats are fed, depending on their age and size, 1/3 of a cup to 1/2 of a cup of wet food per day, plus supplemental dry food accessible to them at any time. Our cats always have access to clean water in multiple separate bowls, filtered and replaced daily (sometimes multiple times daily). Purina ONE, our sponsor, is the provider of our wet and dry food.</p>
        <button type="button" onclick="closePopup('feedingbfpopup')">Close</button>
</div>
<script>
function openPopup(id){
  pop = document.getElementById(id);
  pop.classList.add("open-popup");
}
function closePopup(id){
  pop = document.getElementById(id)
  pop.classList.remove("open-popup");
}
</script>