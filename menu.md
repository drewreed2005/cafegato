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
<!-- End Jekyll SEO tag 
 <link rel="stylesheet" href="/assets/css/style.css?v=d264d69bbf7c2f03d9740b370367f0c799fbe57e">
    <script src="https://code.jquery.com/jquery-1.12.4.min.js" integrity="sha256-ZosEbRLbNQzLpnKIkEdrPv7lOy9C27hHQ+Xp8a4MxAQ=" crossorigin="anonymous"></script>
    [if lt IE 9]>
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

<head>
  <h1>Review's Average: </h1>
</head>
<body>
  <p id="response"></p>
  <script>
    const url = "http://localhost:5000/average";
    const options = {
      method: 'GET',
      mode: 'cors',
      cache: 'default',
      credentials: 'omit',
    };
    function displayav() {
      fetch(url, options)
        .then(response => response.text())
        .then(data => {
          console.log('The average rate is: ' + data);
          document.getElementById('response').innerText = data;
        })
        .catch(error => {
          console.error('Error fetching');
        });
    };
  </script>
</body>