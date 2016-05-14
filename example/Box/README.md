# exp.three.js
Experimente, play and Learn three.js

	

https://rawgithub.com/h5bp/html5-boilerplate/master/js/plugins.js
Note that this is not the same as clicking on the "raw" button within GitHub - that button will also give you a clean version of the file, but it will be sent with the wrong headers. All you have to do is take that URL (https://raw.github...), and remove the raw subdomain to leave you with https://raw.github...... That URL will give the correct application/javascript header.

A Word of warning
The file is not not being served from GitHub! It is being redirected through the rawgithub.com domain. As is stated on https://rawgithub.com:

Hey! rawgithub.com is just for fun and is not associated with GitHub in any way.
Keep in mind that the owner of that domain is now in control of the traffic and is able to manipulate it as they see fit. XSS anyone?

As @stucox very correctly states in a comment below, I wouldn't use this kind of thing in production. Using github in such a way (like a CDN), might not work in the future.
