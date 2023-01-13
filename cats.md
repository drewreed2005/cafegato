<meta name="viewport" content="width=device-width, initial-scale=1.0">
<html>
<body>
  <h1 style="color:black">Meet Our Cats!</h1>
  <h3 style="color:grey">Here are the cats you can expect to see at Cafe Gato!</h3>
  <div class="eventbox" style="border:solid 6px #805900;background:#EDA500" id="apollobox">
    <img src="https://github.com/drewreed2005/cafegato/blob/gh-pages/images/01-09-23-cat1.jpeg?raw=true" width="250px" style="float:right;padding: 5px 5px 5px 5px">   
    <h1 style="color:white"><b>Apollo</b></h1>
    Domestic Short Hair  <br>
    Sex: Male - Neutered  <br>
    Estimated Age: 2 Years, 8 Months  <br>
    Weight: 13.4 lbs  <br>
    Color: Orange  <br>
    Status: Available  <br>
    <div class="button">
      <button type="submit" class="btn" onclick="openPopup('apollopopup')">More About Apollo</button>
      <div class="popup" id="apollopopup" style="position:element('apollobox');transform:translate(-50%, -45%) scale(1)">
        <img src="https://raw.githubusercontent.com/drewreed2005/cafegato/gh-pages/images/01-09-23-cat2.webp">
        <br><br>
        <h1 class="widebr" style="color:black"><b>Hello, I'm Apollo!</b></h1>
        <p>I am a sweet cat who is outgoing in new situations and I will love your pets and attention! I love to run around and explore, but not as much as relaxing and napping. I will be a constant source of companionship and entertainment for you! Will you give me a chance to win your heart?</p>
        <button type="button" onclick="closePopup('apollopopup')">Close</button>
      </div>
    </div>
  </div>

  <div class="eventbox" style="border:solid 6px #805900;background:#EDA500">
    <img src="/images/morgana.jpg" width="250px" style="float:right;padding: 5px 5px 5px 5px">   
    <h1 style="color:white"><b>Morgana</b></h1>
    Homo Sapian  <br>
    Sex: Yes  <br>
    Estimated Age: 1 year, 1 month  <br>
    Weight: 8 lbs  <br>
    Color: Black  <br>
    Status: Available  <br>
    <div class="button">
      <button type="submit" class="btn" onclick="openPopup('morganapopup')">More About Morgana</button>
      <div class="popup" id="morganapopup">
        <img src="https://raw.githubusercontent.com/drewreed2005/cafegato/gh-pages/images/01-09-23-cat2.webp">
        <br><br>
        <h1 class="widebr" style="color:black"><b>Placeholder</b></h1>
        <p>Placeholder</p>
        <button type="button" onclick="closePopup('morganapopup')">Close</button>
      </div>
    </div>
  </div>

  <div class="eventbox" style="border:solid 6px #805900;background:#EDA500">
    <img src="/images/garfield.jpg" width="250px" style="float:right;padding: 5px 5px 5px 5px">   
    <h1 class="widebr" style="color:white"><b>Garfield</b></h1>
    Orange  <br>
    Sex: Male  <br>
    Estimated Age: 44 Years  <br>
    Weight: 23.4 lbs  <br>
    Color: Orange  <br>
    Status: Hungry  <br>
    <div class="button">
      <button type="submit" class="btn" onclick="openPopup('garfieldpopup')">More About Garfield</button>
      <div class="popup" id="garfieldpopup">
        <img src="https://raw.githubusercontent.com/drewreed2005/cafegato/gh-pages/images/01-09-23-cat2.webp">
        <br><br>
        <h1 style="color:black"><b>Placeholder</b></h1>
        <p>Placeholder</p>
        <button type="button" onclick="closePopup('garfieldpopup')">Close</button>
      </div>
    </div>
  </div>

  <div class="eventbox" style="border:solid 6px #805900;background:#EDA500">
    <img src="/images/dali.jpg" width="250px" style="float:right;padding: 5px 5px 5px 5px">   
    <h1 class="widebr" style="color:white"><b>Dali</b></h1>
    Tool  <br>
    Sex: Male  <br>
    Estimated Age: 3 Years  <br>
    Weight: 9.3 lbs  <br>
    Color: Orange  <br>
    Status: Available  <br>
    <div class="button">
      <button type="submit" class="btn" onclick="openPopup('dalipopup')">More About Dali</button>
      <div class="popup" id="dalipopup">
        <img src="https://raw.githubusercontent.com/drewreed2005/cafegato/gh-pages/images/01-09-23-cat2.webp">
        <br><br>
        <h1 style="color:black"><b>Placeholder</b></h1>
        <p>Placeholder</p>
        <button type="button" onclick="closePopup('dalipopup')">Close</button>
      </div>
    </div>
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
</body>
</html>