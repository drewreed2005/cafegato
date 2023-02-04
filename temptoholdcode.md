
<html>
<head>
<style>
  .flex-container {
    display: flex;
    justify-content: center;
    height: 400px;
  }

  .flex-container > div {
    background-color: black;
    font-family: 'Courier New';
    color: rgb(6, 240, 6);
    text-align: center;
    margin: 10px;
    padding: 20px;
    font-size: 30px;
    align-items: flex-end;
  }
  .terminalbox {
    display: flex;
    align-items: flex-end;
  }
  .terminalbox > div {
    font-family: 'Courier New';
    color: rgb(6, 240, 6);
    text-align: left;
    margin: 10px;
    padding: 20px;
    font-size: 20px;
  }

  .flex-container2 {
    display: flex;
    justify-content: space-around;
  }

  .flex-container2 > div {
    background-color: black;
    font-family: 'Courier New';
    color: rgb(6, 240, 6);
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
    <div style="flex-grow: 1;flex-shrink: 0;" id="inv"></div>
    <div class="terminalbox" style="flex-grow: 8">
        <div>THIS IS THE TERMINAL</div>
    </div>
    <div style="flex-grow: 1;flex-shrink: 0;" id="inv"></div>  
  </div>
  <div class="flex-container2">
    <div id="inv"></div>
    <div>A</div>
    <div>B</div>
    <div>X</div>
    <div>Y</div>
    <div id="inv"></div>
  </div>
</body>
</html>