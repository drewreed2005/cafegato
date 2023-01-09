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
  .open-popup{
  visibility: visible;
  top: 50%;
  transform: translate(-50%,-23%) scale(1);
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

| Week Day | Hours | Weekly Events | Details |
| --- | --- | --- | --- |
| Monday | 8AM - 5PM | Blue Mountain Mondays | Enjoy one free cup of high-quality Jamaican Blue Mountain coffee with a reservation. |
| Tuesday | 8AM - 5PM | Cat Pose | Join us in the events room from yoga (opening to 10AM). |
| Wednesday | 8AM - 5PM | Superhero Day | Come dressed as your favorite superhero and get a free medium drink. |
| Thusday | 8AM - 5PM | Cats for Coffee | Show us a picture/video of you with your cat, tell us a bit about them, and enjoy a free medium drink. |
| Friday | 8AM - 5PM | Up-and-Coming Local Jazz | Enjoy soothing music from rising local bands, in and out of the cat room. |
| Saturday | 10AM - 6PM | Bingo Night |Join us for bingo from 5PM to 6PM in the events room. |
| Sunday | 10AM - 6PM | Support Animals | A portion of all food and drink sales are be donated to the [San Diego Humane Society](https://www.sdhumane.org/). |

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
      <button type="submit" class="btn" onclick="openPopup()">More About Apollo</button>
      <div class="popup" id="popup">
        <img src="https://raw.githubusercontent.com/drewreed2005/cafegato/gh-pages/images/01-09-23-cat2.webp">
        <br><br>
        <h1 style="color:black"><b>Hello, I'm Apollo!</b></h1>
        <p>I am a sweet cat who is outgoing in new situations and I will love your pets and attention! I love to run around and explore, but not as much as relaxing and napping. I will be a constant source of companionship and entertainment for you! Will you give me a chance to win your heart?</p>
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