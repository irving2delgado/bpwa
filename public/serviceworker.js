// self.addEventListener("fetch", function(event) {
//     console.log("Fetch request for:", event.request.url);
// });

self.addEventListener("fetch", function(event)  {
    if (event.request.url.includes("bootstrap.min.css")) {
        event.respondWith(
            new Response(
               ".hotel-slogan {background: green!important;} nav {display:none}",
               { headers: { "Content-Type": "text/css" }} 
            )
        );
    }
});