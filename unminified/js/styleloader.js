


function loadCss(cssId,cssFile)
{
	//http://stackoverflow.com/questions/574944/how-to-load-up-css-files-using-javascript
	var $ = document; // shortcut
	
	if (!$.getElementById(cssId))
	{
			var head  = $.getElementsByTagName('head')[0];
			var link  = $.createElement('link');
			link.id   = cssId;
			link.rel  = 'stylesheet';
			link.type = 'text/css';
			link.href = cssFile;
			link.media = 'all';
			head.appendChild(link);
	}

}

loadCss('defaultStyle','css/style.css');
loadCss('specialFont','//fonts.googleapis.com/css?family=Open+Sans:400,700');