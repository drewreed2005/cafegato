<!DOCTYPE html>
<html>
<head>
<style>
.flex-container {
  display: flex;
  justify-content: center;
  height: 200px;
}

.flex-container > div {
  background-color: black;
  color: MediumSeaGreen;
  text-align: center;
  margin: 10px;
  padding: 20px;
  font-size: 30px;
}

.flex-container2 {
  display: flex;
  justify-content: space-around;
}

.flex-container2 > div {
  background-color: black;
  color: MediumSeaGreen;
  margin: 10px;
  padding: 20px;
  font-size: 30px;
}
#inv {
  background-color: White;
}
</style>
</head>
<body>

<div class="flex-container">
  <div style="flex-grow: 1" id="inv">1</div>
  <div style="flex-grow: 8">2</div>
  <div style="flex-grow: 1" id="inv">3</div>  
</div>
<div class="flex-container2">
  <div>1</div>
  <div>2</div>
  <div>3</div>
</div>

</body>
</html>
