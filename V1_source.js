let mode = prompt("Select mode. 1 for redirect 2 for new tab.", "2")
let url =  prompt("URL", "https://www.google.com/")
let key =  prompt("Defalt esc. Supports neumerical keycodes. To find keycodes go to https://keycode.info/", "27")


    
if (mode == 1) {
    document.addEventListener('keydown', function(event) {
        if(event.keyCode == key) {
            window.location.replace(url);
        }
    });}
if (mode == 2) {
    document.addEventListener('keydown', function(event) {
        if(event.keyCode == key) {
            window.open(url)
        }
    });}
