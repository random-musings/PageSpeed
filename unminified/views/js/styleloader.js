


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

window.addEventListener('onload',function(){
		loadCss('bootstrap-sm','css/bootstrap-sm.css');
		loadCss('bootstrap-md','css/bootstrap-md.css');
		loadCss('bootstrap-lg','css/bootstrap-lg.css');
		});
