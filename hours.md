<meta name="viewport" content="width=device-width, initial-scale=1.0">
<style>
  .eventbox {
    font-size: 20px;
    letter-spacing: 2px;
    margin: 10px;
    background: #444444;
    line-height: 2;
    border: solid 6px black;
    border-radius: 50px;
    padding: 16px 30px 16px;
    color: white;
  }
  .button{
    width: 100%;
    height: 7vh;
    background #3c5077;
    display: flex;
    align-items: center
    justify-content: center;
}
.btn{
    padding: 10px 25px;
    background: #ffffe0;
    border: 3;
    border-color: #FFDB45; 
    outline: none;
    cursor: pointer;
    font-size: 22px;
    font-weight: 500;
    border-radius: 15px;
}
  .popup{
    width: 400px;
    background: #F8E69A;
    border-radius: 20px;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%,-50%) scale(0.1);
    text-align: center;
    padding: 0 30px 30px;
    color: #333;
    visibility: hidden;
    transition: transform 0.3s, top 0.3s;
  }
  .open-popup{
  visibility: visible;
  top: 50%;
  transform: translate(-50%,20%) scale(1);
  }
  .popup img{
    width: 100px;
    margin-top: -40px;
  }
  .popup h2{
    font-size: 38px;
    font-weight: 500;
    margin: 30px 0 10px;
  }
  .popup button{
    width: 100%;
    margin-top: 50px;
    padding: 10px 0;
    background: #ff941c;
    color: #fff;
    border: 0;
    outline: none;
    font-size: 18px;
    border-radius: 4px;
    cursor: pointer;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  }
</style>
<h1 style="color:black">Hours</h1>
<table>
  <tr>
    <th>Week Day</th>
    <th>Hours</th>
    <th>Weekly Events</th>
    <th>Detail</th>
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

We will remain closed on other prominent holidays such as Veterans Day, Thanksgiving, and Christmas Day.

<h1 style="color:black">Daily Schedule</h1>

Here are the sort of things you can expect to see each day.

<div class="eventbox" style="border:solid 6px #805900;background:#EDA500">
    <img src="{{site.baseurl}}/images/cat-cafe-maui-11-1024x576.jpeg" width="300px" style="float:right;padding: 5px 5px 5px 5px">   
    <h1 style="color:white">9AM: Kitty Breakfast</h1>
    The cats may need to take a short break from playing with toys or sitting on high-up hammocks to eat their own breakfast. (Don't worry: we make sure they're all fed plenty!)<br><br>If you come on the weekend, the kitties will already have been fed.
    <div class="button">
      <button type="submit" class="btn" onclick="openPopup()">Feeding Information</button>
      <div class="popup" id="popup">
        <img src="https://raw.githubusercontent.com/drewreed2005/cafegato/gh-pages/images/01-09-23-cat2.webp">
        <br><br>
        <h1 style="color:black"><b>Feeding Information</b></h1>
        <p style="font-size:18">Cats are fed, depending on their age and size, 1/3 of a cup to 1/2 of a cup of wet food per day, plus supplemental dry food accessible to them at any time. Our cats always have access to clean water in multiple separate bowls, filtered and replaced daily (sometimes multiple times daily). Purina ONE, our sponsors, is the provider of our wet and dry food. Switching the flavor of food can cause cats with sensitive stomachs to temporarily deal with digestive issues, so we make sure to</p>
        <button type="button" onclick="closePopup()">Close</button>
</div>
<script>
let popup = document.getElementById("popup");
function openPopup(){
  popup.classList.add("open-popup");
}
function closePopup(){
  popup.classList.remove("open-popup");
}
</script>