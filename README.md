Measurement Count example
-------------------------

This project shows how to use Safecast's API to insert the current measurement count into an html document.


In this example, the AJAX method gets called in the body onLoad.  In your use case, you may want to use something like jQuery to call the AJAX method on document.ready


In order to run this script on non-safecast.org domains, you'll need to set `safecast.api_key` to your api_key in order to allow for CORS.

