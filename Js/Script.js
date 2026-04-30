var menuItems = document.getElementById("menu_items");

menuItems.style.maxHeight = "0px";

function menu_toggle(){
    
    if(menuItems.style.maxHeight == "0px")
    {
        menuItems.style.maxHeight = "200px";
    }
    else{
        menuItems.style.maxHeight = "0px";
    }
}