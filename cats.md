<meta name="viewport" content="width=device-width, initial-scale=1.0">
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
      <button type="submit" class="btn" onclick="openPopup('apollo')">More About Apollo</button>
      <div class="popup" id="apollo">
        <img src="https://raw.githubusercontent.com/drewreed2005/cafegato/gh-pages/images/01-09-23-cat2.webp">
        <br><br>
        <h1 style="color:black"><b>Hello, I'm Apollo!</b></h1>
        <p>I am a sweet cat who is outgoing in new situations and I will love your pets and attention! I love to run around and explore, but not as much as relaxing and napping. I will be a constant source of companionship and entertainment for you! Will you give me a chance to win your heart?</p>
        <button type="button" onclick="closePopup('apollo')">Close</button>
      </div>
    </div>
  </div>

  <div class="eventbox" style="border:solid 6px #805900;background:#EDA500">
    <img src="{{site.baseurl}}/images/morgana.jpg" width="250px" style="float:right;padding: 5px 5px 5px 5px">   
    <h1 style="color:white"><b>Morgana</b></h1>
    Homo Sapian  <br>
    Sex: Yes  <br>
    Estimated Age: 1 year, 1 month  <br>
    Weight: 8 lbs  <br>
    Color: Black  <br>
    Status: Available  <br>
    <div class="button">
      <button type="submit" class="btn" onclick="openPopup('mona')">More About Morgana</button>
      <div class="popup" id="mona">
        <img src="https://raw.githubusercontent.com/drewreed2005/cafegato/gh-pages/images/01-09-23-cat2.webp">
        <br><br>
        <h1 style="color:black"><b>This is Morgana!</b></h1>
        <p>not a cat not a cat not a cat not a cat</p>
        <button type="button" onclick="closePopup('mona')">Close</button>
      </div>
    </div>
  </div>

  <div class="eventbox" style="border:solid 6px #805900;background:#EDA500">
    <img src="{{site.baseurl}}/images/garfield.jpg" width="250px" style="float:right;padding: 5px 5px 5px 5px">   
    <h1 style="color:white"><b>Garfield</b></h1>
    Orange  <br>
    Sex: Male  <br>
    Estimated Age: 44 Years  <br>
    Weight: 23.4 lbs  <br>
    Color: Orange  <br>
    Status: Hungry  <br>
    <div class="button">
      <button type="submit" class="btn" onclick="openPopup('garf')">More About Garfield</button>
      <div class="popup" id="garf">
        <img src="https://raw.githubusercontent.com/drewreed2005/cafegato/gh-pages/images/01-09-23-cat2.webp">
        <br><br>
        <h1 style="color:black"><b>Garfield</b></h1>
        <p>monday</p>
        <button type="button" onclick="closePopup('garf')">Close</button>
      </div>
    </div>
  </div>

  <div class="eventbox" style="border:solid 6px #805900;background:#EDA500">
    <img src="{{site.baseurl}}/images/dali.jpg" width="250px" style="float:right;padding: 5px 5px 5px 5px">   
    <h1 style="color:white"><b>Dali</b></h1>
    Tool  <br>
    Sex: Male  <br>
    Estimated Age: 3 Years  <br>
    Weight: 9.3 lbs  <br>
    Color: Orange  <br>
    Status: Available  <br>
    <div class="button">
      <button type="submit" class="btn" onclick="openPopup('dali')">More About Dali</button>
      <div class="popup" id="dali">
        <img src="https://raw.githubusercontent.com/drewreed2005/cafegato/gh-pages/images/01-09-23-cat2.webp">
        <br><br>
        <h1 style="color:black"><b>I should tell you about Dali</b></h1>
        <p>Dali is a tool</p>
        <button type="button" onclick="closePopup('dali')">Close</button>
      </div>
    </div>
  </div>

  <h1 style="color:black">Adopt A Cat!</h1>
  <h3 style="color:grey">Apply For Adoption By Filling In The Information Below</h3>
  <table>
    <tr>
      <th><label for="name">Name</label></th>
      <th><label for="email">Email</label></th>
      <th><label for="cat">Cat</label></th>
      <th><label for="pin">Custom Pin</label></th>
      <th></th>
    </tr>
    <tr>
      <td><input type="text" name="name" id="name" required></td>
      <td><input type="email" name="email" id="email" placeholder="abc@xyz.org" required></td>
      <td><select name="cat" id="cat">
        <option value="apollo">Apollo</option>
        <option value="morgana">Morgana</option>
        <option value="garfield">Garfield</option>
        <option value="dali">Dali</option>
      </select></td>
      <td><input type="pin" name="pin" id="pin" required></td>
      <td ><button onclick="create_User()">Submit</button></td>  
    </tr>
  </table>
  
  <script>
  function openPopup(givid){
    document.getElementById(givid).classList.add("open-popup");
  }
  function closePopup(givid){
    document.getElementById(givid).classList.remove("open-popup");
  }
  </script>
</body>
</html>