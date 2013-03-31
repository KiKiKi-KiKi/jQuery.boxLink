$(function() {
	jQuery.fn.extend({
		'boxLink': function(options){
			var settings = jQuery.extend({}, jQuery.fn.boxLink.defaults, options);
			return this.each(function(){
				if(jQuery.fn.jquery < '1.7.1') {return;}
				
				function init(t){
					var $t = jQuery(t),
						o = jQuery.metadata ? jQuery.extend({}, settings, $t.metadata()) : settings;
					
					$t.find(o.section).each(function(i, elm){
						var $section = jQuery(elm),
							$a = $section.find(o.link);
						
						if($a.length) {
							$section.data('url', $a[0].href);
							console.log($section.data('url'));
							$section.css({cursor: 'pointer'}).on('click', {url: $section.data('url')}, onClickEvent);
						}
					});
				}
				
				function onClickEvent(evt) {
					if(evt.target.tagName.toLowerCase() !== 'a') {
						location.href = evt.data.url;
						return false;
					}
					return;
				}
				
				init(this);
				
			});
		}
	});
	
	jQuery.fn.boxLink.defaults = {
		section: 'li',
		link   : 'a'
	};
});