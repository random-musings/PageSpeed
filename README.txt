Html & CSS files were minified using http://www.willpeavy.com/minifier/ 
Javascript files were minified using http://jscompress.com/  
Images were compressed using  GIMP2


Optimization of file index.html
1. javascript files are loaded asynchronously
	- http://www.google-analytics.com/analytics.js
	- js/perfmatters.js
2. thumbnail images were created for the individual projects
	img/2048_thumbnail.jpg
	img/webperf_thumbnail.jpg
	img/mobileweb_thumbnail.jpg
	img/pizzeria_thumbnail.jpg
3. style sheet style.css is loaded via an iframe and then added as a style element using inline javascript
4. profile pic was compressed using GIMP2
	img/profilepic.jpg
5. minified files
	style.css
	index.html
	js/perfmatter.js
6. media="print" tag added to the print.css link tag
7. meta tags added
	<meta http-equiv="Cache-control" content="public"> 
	<meta name="viewport" content="width=device-width, initial-scale=1">


Optimization of file project-2048.html
1. style sheet style.css is loaded via an iframe and then added as a style element using javascript
2. javascript files are loaded asynchronously
	- http://www.google-analytics.com/analytics.js
	- js/perfmatters.js
3. minified files 
	style.css
	project-2048.html
	js/perfmatter.js
4. image 2048.png compressed and changed to a jpg 
	inline style width="100%" add to format on screen until style.css loaded
5. meta tags added
	<meta http-equiv="Cache-control" content="public"> 
	<meta name="viewport" content="width=device-width, initial-scale=1">


Optimization of project-mobile.html
1. style sheet style.css is loaded via an iframe and then added as a style element using javascript
2. javascript files are loaded asynchronously
	- http://www.google-analytics.com/analytics.js
	- js/perfmatters.js
3. minified files 
	style.css
	project-mobile.html
	js/perfmatter.js
4. image mobilewebdev.jpg compressed and resized
	inline style width="100%" add to format on screen until style.css loaded
5. meta tags added
	<meta http-equiv="Cache-control" content="public"> 
	<meta name="viewport" content="width=device-width, initial-scale=1">


Optimization of project-webperf.html
 style sheet style.css is loaded via an iframe and then added as a style element using javascript
2. javascript files are loaded asynchronously
	- http://www.google-analytics.com/analytics.js
	- js/perfmatters.js
	- js/styleloader.js
3. minified files 
	style.css
	project-mobile.html
	js/perfmatter.js
	js/styleloader.js
4. image cam_be_like.jpg compressed and resized to a smaller size
	inline style width="100%" add to format on screen until style.css loaded
5. meta tags added
	<meta http-equiv="Cache-control" content="public"> 
	<meta name="viewport" content="width=device-width, initial-scale=1">
6. supporting bootstrap files loaded asynchronously via styleloader.js



Optimization of file views/pizza.html
- asynchronously load images 
	pizza.png
	pizzeria.png
- asynchronously load main.js
-split bootstrap.css into 4 files
	bootstrap-sm.css
	bootstrap-md.css
	bootstrap-lg.css
	bootstrap.css
-create a new image pizza_bg.png to serve
 as a background.
 this file is already size to 73x100 pixels
 round the 73.333px of height to 73px 
 down grade the quality 


Optmization of views/js/main.js
-remove the repetitive division in the 
 main.js updatepositions function 
this drops frame rates to 3ms or less

-optmized the initialization of pizzas by removing the division
since the background floating pizzas are setup at a set height
I replaced the division with a modulus check




