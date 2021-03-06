/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'BrandsIcons\'">' + entity + '</span>' + html;
	}
	var icons = {
		'icon-facebook': '&#xe930;',
		'icon-addthis': '&#xe900;',
		'icon-adobe': '&#xe964;',
		'icon-adobeacrobatreader': '&#xe901;',
		'icon-adobeaftereffects': '&#xe969;',
		'icon-adobedreamweaver': '&#xe96a;',
		'icon-adobeillustrator': '&#xe96b;',
		'icon-adobeindesign': '&#xe96c;',
		'icon-adobelightroom': '&#xe96d;',
		'icon-adobephotoshop': '&#xe96e;',
		'icon-adobetypekit': '&#xe96f;',
		'icon-airbnb': '&#xe970;',
		'icon-amazon': '&#xe971;',
		'icon-americanexpress': '&#xe972;',
		'icon-android': '&#xe965;',
		'icon-angular': '&#xe973;',
		'icon-apple': '&#xe966;',
		'icon-applemusic': '&#xe902;',
		'icon-artstation': '&#xe975;',
		'icon-asana': '&#xe976;',
		'icon-atlassian': '&#xe977;',
		'icon-atom': '&#xe903;',
		'icon-auth0': '&#xe979;',
		'icon-behance': '&#xe904;',
		'icon-bitcoin': '&#xe905;',
		'icon-bitly': '&#xe906;',
		'icon-blogger': '&#xe984;',
		'icon-bootstrap': '&#xe907;',
		'icon-buffer': '&#xe908;',
		'icon-campaignmonitor': '&#xe987;',
		'icon-codeforces': '&#xe90a;',
		'icon-codeigniter': '&#xe90b;',
		'icon-codepen': '&#xe90c;',
		'icon-coderwall': '&#xe98b;',
		'icon-coursera': '&#xe90d;',
		'icon-deezer': '&#xe910;',
		'icon-delicious': '&#xe993;',
		'icon-deviantart': '&#xe995;',
		'icon-diaspora': '&#xe997;',
		'icon-digitalocean': '&#xe999;',
		'icon-discourse': '&#xe911;',
		'icon-discover': '&#xe99b;',
		'icon-disqus': '&#xe912;',
		'icon-dribbble': '&#xe913;',
		'icon-dropbox': '&#xe914;',
		'icon-drupal': '&#xe99f;',
		'icon-ello': '&#xe9a1;',
		'icon-ethereum': '&#xe9a3;',
		'icon-eventbrite': '&#xe9a5;',
		'icon-evernote': '&#xe9a7;',
		'icon-everplaces': '&#xe9a8;',
		'icon-facebook-2': '&#xe915;',
		'icon-feedly': '&#xe916;',
		'icon-firebase': '&#xe9ab;',
		'icon-flickr': '&#xe917;',
		'icon-flipboard': '&#xe9ad;',
		'icon-foursquare': '&#xe918;',
		'icon-garmin': '&#xe919;',
		'icon-gauges': '&#xe9b1;',
		'icon-ghost': '&#xe91a;',
		'icon-github': '&#xe91b;',
		'icon-gitlab': '&#xe91c;',
		'icon-gmail': '&#xe91e;',
		'icon-goodreads': '&#xe9b9;',
		'icon-google': '&#xe91f;',
		'icon-googleallo': '&#xe920;',
		'icon-googleanalytics': '&#xe921;',
		'icon-googlechrome': '&#xe922;',
		'icon-googledrive': '&#xe923;',
		'icon-googlehangouts': '&#xe924;',
		'icon-googlekeep': '&#xe9ba;',
		'icon-googleplay': '&#xe925;',
		'icon-googleplus': '&#xe926;',
		'icon-gumroad': '&#xe9be;',
		'icon-gumtree': '&#xe9bf;',
		'icon-hackerrank': '&#xe967;',
		'icon-hipchat': '&#xe9c6;',
		'icon-homify': '&#xe9c7;',
		'icon-hulu': '&#xe9ca;',
		'icon-ifixit': '&#xe9cb;',
		'icon-instagram': '&#xe928;',
		'icon-intercom': '&#xe9d0;',
		'icon-invision': '&#xe929;',
		'icon-jsfiddle': '&#xe9d4;',
		'icon-khanacademy': '&#xe9d8;',
		'icon-kickstarter': '&#xe9d9;',
		'icon-koding': '&#xe92c;',
		'icon-lastfm': '&#xe92d;',
		'icon-line': '&#xe9e2;',
		'icon-linkedin': '&#xe92e;',
		'icon-macys': '&#xe92f;',
		'icon-mailru': '&#xe931;',
		'icon-medium': '&#xe932;',
		'icon-messenger': '&#xe933;',
		'icon-microblog': '&#xe934;',
		'icon-microsoft': '&#xe9ee;',
		'icon-microsoftaccess': '&#xe9ef;',
		'icon-microsoftexcel': '&#xe9f0;',
		'icon-microsoftonenote': '&#xe9f1;',
		'icon-microsoftoutlook': '&#xe9f2;',
		'icon-microsoftpowerpoint': '&#xe9f3;',
		'icon-microsoftword': '&#xe9f4;',
		'icon-minutemailer': '&#xe935;',
		'icon-mixcloud': '&#xe9f5;',
		'icon-mongodb': '&#xe9f6;',
		'icon-monkeytie': '&#xe9f7;',
		'icon-monogram': '&#xe937;',
		'icon-mozillafirefox': '&#xe9fa;',
		'icon-nextdoor': '&#xe9fd;',
		'icon-odnoklassniki': '&#xe938;',
		'icon-onedrive': '&#xe939;',
		'icon-opera': '&#xe93a;',
		'icon-overcast': '&#xe93b;',
		'icon-paypal': '&#xe93c;',
		'icon-periscope': '&#xe93d;',
		'icon-picartotv': '&#xea0b;',
		'icon-pingup': '&#xea0c;',
		'icon-pinterest': '&#xe93e;',
		'icon-plex': '&#xea12;',
		'icon-pocket': '&#xe93f;',
		'icon-producthunt': '&#xea18;',
		'icon-protonmail': '&#xea1a;',
		'icon-reverbnation': '&#xe942;',
		'icon-rss': '&#xea25;',
		'icon-salesforce': '&#xe943;',
		'icon-sellfy': '&#xe944;',
		'icon-signal': '&#xe946;',
		'icon-skype': '&#xe948;',
		'icon-slack': '&#xe949;',
		'icon-snapchat': '&#xe94b;',
		'icon-soundcloud': '&#xea38;',
		'icon-speakerdeck': '&#xea3a;',
		'icon-spotify': '&#xe94d;',
		'icon-spreaker': '&#xea3b;',
		'icon-stripe': '&#xea44;',
		'icon-swift': '&#xea4a;',
		'icon-telegram': '&#xe94e;',
		'icon-tinder': '&#xe94f;',
		'icon-tumblr': '&#xea55;',
		'icon-twitter': '&#xe954;',
		'icon-twoo': '&#xe955;',
		'icon-umbraco': '&#xea5a;',
		'icon-unsplash': '&#xe956;',
		'icon-viber': '&#xe957;',
		'icon-vimeo': '&#xe958;',
		'icon-vine': '&#xe959;',
		'icon-visa': '&#xe95a;',
		'icon-visualstudiocode': '&#xea5e;',
		'icon-vk': '&#xe95b;',
		'icon-wechat': '&#xea62;',
		'icon-whatsapp': '&#xe95c;',
		'icon-wheniwork': '&#xe95d;',
		'icon-windows': '&#xea63;',
		'icon-yahoo': '&#xea6c;',
		'icon-yandex': '&#xe95e;',
		'icon-yelp': '&#xe960;',
		'icon-youtube': '&#xe961;',
		'icon-zapier': '&#xe962;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
