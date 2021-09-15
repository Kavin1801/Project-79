menu_list_array = ["Veg Margherita Pizza","Chicken Tandoori Pizza","Veg Supreme Pizza","Cheesy Corn Pizza","Panner Tikka Pizza","Deluxe Veggie Pizza","Mushroom Pizza","Super Garlic Cheese Pizza","Super Duper Onion Pizza","Mix Veggie Pizza"];
function getmenu(){
var htmldata;
htmldata="<ol class='menulist'>"
menu_list_array.sort();
for(var i=0;i<menu_list_array.length;i++){
    htmldata=htmldata+'<li>'+menu_list_array[i] +'</li>'
}
htmldata=htmldata+"</ol>"
document.getElementById("display_menu").innerHTML = htmldata;
}

function add_item(){
var htmldata;
var item=document.getElementById("add_item").value;
menu_list_array.sort();
htmldata="<section class='cards'>"
for(var i=0;i<menu_list_array.length;i++){
    htmldata=htmldata+'<div class="card" style="bg-color:white font:#000000">'
            +'<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZYhA3zg-7A70L830qudKbiy_OiJF75BOHLg&usqp=CAU"/>'
             + menu_list_array[i] + '</div>'
}
htmldata=htmldata+"</section>"
document.getElementById("display_addedmenu").innerHTML = htmldata;
}

function add_top(){
    var item=document.getElementById("add_item").value;
    menu_list_array.push(item);
    add_item();
}
