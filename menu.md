<!--
  _layouts/default.html
  customization to original Midnight theme
  found through GitHub Pages Themes
 -->
 <meta name="viewport" content="width=device-width, initial-scale=1.0">
<html lang="en-US">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <!-- Begin Jekyll SEO tag v2.8.0 -->
<title>Café Gato | Opening February 2023</title>
<meta name="generator" content="Jekyll v3.9.2" />
<meta property="og:title" content="Café Gato" />
<meta property="og:locale" content="en_US" />
<meta name="description" content="Opening February 2023" />
<meta property="og:description" content="Opening February 2023" />
<link rel="canonical" href="http://0.0.0.0:4001/menu.html" />
<meta property="og:url" content="http://0.0.0.0:4001/menu.html" />
<meta property="og:site_name" content="Café Gato" />
<meta property="og:type" content="website" />
<meta name="twitter:card" content="summary" />
<meta property="twitter:title" content="Café Gato" />
<script type="application/ld+json">
{"@context":"https://schema.org","@type":"WebPage","description":"Opening February 2023","headline":"Café Gato","url":"http://0.0.0.0:4001/menu.html"}</script>
<!-- End Jekyll SEO tag -->
    <link rel="stylesheet" href="/assets/css/style.css?v=d264d69bbf7c2f03d9740b370367f0c799fbe57e">
    <script src="https://code.jquery.com/jquery-1.12.4.min.js" integrity="sha256-ZosEbRLbNQzLpnKIkEdrPv7lOy9C27hHQ+Xp8a4MxAQ=" crossorigin="anonymous"></script>
    <script src="/assets/js/respond.js"></script>
    <!--[if lt IE 9]>
      <script src="//html5shiv.googlecode.com/svn/trunk/html5.js"></script>
    <![endif]-->
    <!--[if lt IE 8]>
    <link rel="stylesheet" href="/assets/css/ie.css">
    <![endif]-->
    <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no">
    <!-- start custom head snippets, customize with your own _includes/head-custom.html file -->
<!-- Setup theme-color -->
<!-- start theme color meta headers -->
<meta name="theme-color" content="#353535">
<meta name="msapplication-navbutton-color" content="#353535">
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
<!-- end theme color meta headers -->
<!-- Setup Google Analytics -->
<!-- You can set your favicon here -->
<!-- link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" -->
<!-- end custom head snippets -->
  </head>
  <style>
    .bodydefault {
      font-family: 'OpenSansRegular', Geneva, Verdana, sans-serif;
      color: black;
      background: white;
      width: 100%;
    }
   </style>
  <body class="bodydefault">
    <div class="wrapper">
      <section>
        <!-- nighthawk coding society has altered arrangement and inserted navigation that is updated in independent file -->
        <div id="title">
          <meta name="viewport" content="width=device-width, initial-scale=1">
<style>
    .navbar {
        transform: translateX(-13.7%);
        overflow: visible;
        background-color: #FF921E;
        position: fixed;
        top: 0;
        width: 100%;
        font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
        font-size: 200%;
        z-index: 999;
    }
    .headlink {
        float: left;
        display: block;
        color: rgb(249, 238, 238);
        text-decoration-color: rgb(0, 0, 0);
        text-align: center;
        padding: 14px 16px;
        font-family:Verdana, Geneva, Tahoma, sans-serif;
        font-size: 100%;
        text-shadow: 4px 4px 5px rgb(148, 66, 16);
        font-variant: small-caps;
    }
    .headlink:hover {
        text-decoration-color: #67401B;
    }
    .starbutton{
    background: url('http://imgur.com/I0EwG.png') transparent;
    height: 18px;
    width: 15px;
    border: none;
    }
    {
    margin: 0;
    padding: 0;
}
.rate:not(:checked) > input {
    position:absolute;
    top:-9999px;
}
.rate:not(:checked) > label {
    float:right;
    width:1em;
    overflow:hidden;
    white-space:nowrap;
    cursor:pointer;
    font-size:30px;
    color:rgb(244, 206, 234);
}
.rate:not(:checked) > label:before {
    content: '★ ';
}
.rate > input:checked ~ label {
    color: #F840E3;
}
.popup{
      width: 400px; 
      background: #fff;
      border-radius: 6px;
      position: absolute;
      top: 0;
      left: 50%;
      transform: translate(-50%, -4%) scale(1);
      visibility: hidden;
      transition: transform 0.4s, top 0.4s;
    }
.open-popup{
      visibility: visible;
      top: 50%
      transform: translate(-50%, -50%) scale(1);
    }
.popup img{
      width: 100px;
      margin-top: -50px;
      border-radius: 50%
    }
</style>

<div id="respond">
  <h2>Leave a Review!</h2>
  <form action="post_comment.php" method="post" id="commentform">
    <label for="comment_author" class="required">Your name *</label>
    <input type="text" name="comment_author" id="comment_author" value="" tabindex="1" required="required"><br>
    <label for="email" class="required">Your email *</label>
    <input type="email" name="email" id="email" value="" tabindex="2" required="required"><br>
    <label for="comment" class="required">Your Review *</label>
    <textarea name="comment" id="comment" rows="10" tabindex="4"  required="required"></textarea><br>
    <input type="hidden" name="comment_post_ID" value="1" id="comment_post_ID" />
    <input type="hidden" name="comment_post_ID" value="<?php echo($comment_post_ID); ?>" id="comment_post_ID" />
    <br>
    <label class="required">Your Rating *</label>
                  <div class="rate">
                    <input type="radio" id="star5" name="rate" value="5" />
                    <label for="star5" title="text"></label>
                    <input type="radio" id="star4" name="rate" value="4" />
                    <label for="star4" title="text"></label>
                    <input type="radio" id="star3" name="rate" value="3" />
                    <label for="star3" title="text"></label>
                    <input type="radio" id="star2" name="rate" value="2" />
                    <label for="star2" title="text"></label>
                    <input type="radio" id="star1" name="rate" value="1" />
                    <label for="star1" title="text"></label>
                  </div>
    <br>
    <br>
    <input name="submit" type="submit" value="Submit Review" class="btn" onclick = "openPopup()" />
  </form>
</div>

<p class="navbar">
    <table class="navbar">
        <tr>
            <td><a href="."><img src="/images/Studio_Project.png" width="150px"></a></td><!--ABOUT US IN HERE-->
            <td><a href="cats" class="headlink">Cats</a></td>
            <td><a href="menu" class="headlink">Menu</a></td>
            <td><a href="hours" class="headlink">Hours</a></td>
            <td><a href="events" class="headlink">Events</a></td>
            <td><a href="shop" class="headlink">Shop</a></td>
        </tr>
    </table>
</p>
          <br>
        </div>
        <!-- this is Jekyll magic, each md file in site will be inserted here -->
        

<body>
  <div class="container">
    <div class="popup" id="popup">
      <img src="/images/tick1.png">
      <h2>Thank you!</h2>
      <p>Your review has been successfully recorded.</p>
      <button type="button" onclick = "closePopup()">OK</button>
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

    <tbody id="data-output">
     <!-- from js file -->
    </tbody>
  
  <script>
    const api_url = 'http://127.0.0.1:8086/api/users/'
    async function getData() {
        const response = await fetch(api_url);
        const data = await response.json();
        console.log(data)
    getData()
    }
  </script>


<head>
<style>
#panel, .flip {
  font-size: 16px;
  padding: 10px;
  text-align: center;
  background-color: #AA336A;
  color: white;
  border: solid 1px #A6D8A8;
  margin: auto;
}
#panel {
  display: none;
}
</style>
</head>
<body>
<p class="flip" onclick="myFunction()">See Other Reviews</p>
<div id="panel">
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Review</th>
        <th>Rate</th>
      </tr>
    </thead>
      <tr>
        <td>Mr. Yeung</td>
        <td>Amazing food and amazing website</td>
        <td>5/5</td>
      </tr>
      <tr>
        <td>John Doe</td>
        <td>I'm allergic to cats</td>
        <td>2/5</td>
      </tr>
      <tr>
        <td>Jennifer Lopez</td>
        <td>LOVE LOVE LOVE</td>
        <td>4/5</td>
      </tr>
    
<script>
function myFunction() {
  document.getElementById("panel").style.display = "block";
}
</script>



