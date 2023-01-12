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
<html>
<body>
  <h1 style="color:black">Meet Our Cats!</h1>
  <h3 style="color:grey">Adoptable Cats</h3>
  <div class="eventbox" style="border:solid 6px #805900;background:#EDA500">
    <img src="https://github.com/drewreed2005/cafegato/blob/gh-pages/images/01-09-23-cat1.jpeg?raw=true" width="250px" style="float:right;padding: 5px 5px 5px 5px">   
    <h1 style="color:white"><b>Apollo</b></h1>
    Domestic Short Hair  <br>
    Sex: Male - Neutered  <br>
    Estimated Age: 2 Years, 8 Months  <br>
    Weight: 13.4 lbs  <br>
    Color: Orange  <br>
    Status: Available  <br>
    <div class="button">
      <button type="submit" class="btn" onclick="openPopup()">More About Apollo</button>
      <div class="popup" id="popup">
        <img src="https://raw.githubusercontent.com/drewreed2005/cafegato/gh-pages/images/01-09-23-cat2.webp">
        <br><br>
        <h1 style="color:black"><b>Hello, I'm Apollo!</b></h1>
        <p>I am a sweet cat who is outgoing in new situations and I will love your pets and attention! I love to run around and explore, but not as much as relaxing and napping. I will be a constant source of companionship and entertainment for you! Will you give me a chance to win your heart?</p>
        <button type="button" onclick="closePopup()">Close</button>
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
      <button type="submit" class="btn" onclick="openPopup()">More About Morgana</button>
      <div class="popup" id="popup">
        <img src="https://raw.githubusercontent.com/drewreed2005/cafegato/gh-pages/images/01-09-23-cat2.webp">
        <br><br>
        <h1 style="color:black"><b>Placeholder</b></h1>
        <p>Placeholder</p>
        <button type="button" onclick="closePopup()">Close</button>
      </div>
    </div>
  </div>

  <div class="eventbox" style="border:solid 6px #805900;background:#EDA500">
    <img src="/images/garfield.jpg" width="250px" style="float:right;padding: 5px 5px 5px 5px">   
    <h1 style="color:white"><b>Garfield</b></h1>
    Orange  <br>
    Sex: Male  <br>
    Estimated Age: 44 Years  <br>
    Weight: 23.4 lbs  <br>
    Color: Orange  <br>
    Status: Hungry  <br>
    <div class="button">
      <button type="submit" class="btn" onclick="openPopup()">More About Garfield</button>
      <div class="popup" id="popup">
        <img src="https://raw.githubusercontent.com/drewreed2005/cafegato/gh-pages/images/01-09-23-cat2.webp">
        <br><br>
        <h1 style="color:black"><b>Placeholder</b></h1>
        <p>Placeholder</p>
        <button type="button" onclick="closePopup()">Close</button>
      </div>
    </div>
  </div>

  <div class="eventbox" style="border:solid 6px #805900;background:#EDA500">
    <img src="/images/dali.jpg" width="250px" style="float:right;padding: 5px 5px 5px 5px">   
    <h1 style="color:white"><b>Dali</b></h1>
    Tool  <br>
    Sex: Male  <br>
    Estimated Age: 3 Years  <br>
    Weight: 9.3 lbs  <br>
    Color: Orange  <br>
    Status: Available  <br>
    <div class="button">
      <button type="submit" class="btn" onclick="openPopup()">More About Dali</button>
      <div class="popup" id="popup">
        <img src="https://raw.githubusercontent.com/drewreed2005/cafegato/gh-pages/images/01-09-23-cat2.webp">
        <br><br>
        <h1 style="color:black"><b>Placeholder</b></h1>
        <p>Placeholder</p>
        <button type="button" onclick="closePopup()">Close</button>
      </div>
    </div>
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
</body>
</html>