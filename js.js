// ///////mobile menus///////////
var inbox = document.getElementsByClassName("inbox")[0];
var patient = document.getElementsByClassName("patient")[0];
function openInbox() {
    inbox.style.transform = "translateX(0%)"
}

function closeInbox() {
    inbox.style.transform = "translateX(-100%)"
}

function openInfo() {
    patient.style.transform = "translateX(0%)"
}

function closeInfo() {
    patient.style.transform = "translateX(100%)"
}

window.addEventListener("resize", function () {
    if (window.innerWidth > 1255) {
        openInbox();
        openInfo();
    }
    else {
        closeInbox();
        closeInfo();
    }
})


//active patient system


var messages = document.getElementsByClassName("message");

for (let i = 0; i < messages.length; i++) {
    messages[i].addEventListener("click", function () {
        for (let j = 0; j < messages.length; j++) {
            messages[j].classList.remove("active_message")
        }
        this.classList.add("active_message")
    })
}


///////////// Modal Box Option Popups //////////////
var picture_pop = document.getElementsByClassName("message_popup")[0];
var video_pop = document.getElementsByClassName("message_popup")[1];
var macros_pop = document.getElementsByClassName("macros_popup")[0];
var popups = document.getElementById("message_popups1");
var popups2 = document.getElementById("message_popups2");
var popups3 = document.getElementById("message_popups3");
function closeAttachPicture() {
    picture_pop.style.transform = "scale(0)"
    popups.style.opacity = "0";
    popups.style.pointerEvents = "none"
}

function openAttachPicture() {
    picture_pop.style.transform = "scale(1)";
    popups.style.opacity = "1";
    popups.style.pointerEvents = "unset"
}


function closeAttachVideo() {
    video_pop.style.transform = "scale(0)"
    popups2.style.opacity = "0";
    popups2.style.pointerEvents = "none"
}

function openAttachVideo() {
    video_pop.style.transform = "scale(1)";
    popups2.style.opacity = "1";
    popups2.style.pointerEvents = "unset"
}


function closeMacros() {
    macros_pop.style.transform = "scale(0)"
    popups3.style.opacity = "0";
    popups3.style.pointerEvents = "none"
}

function openMacros() {
    macros_pop.style.transform = "scale(1)";
    popups3.style.opacity = "1";
    popups3.style.pointerEvents = "unset"
}


////custom drop down 

var selected = document.getElementById('selected');
var arrow = document.getElementById('arrow');
var options = document.getElementsByClassName("options")[0];
var options_list = document.getElementsByClassName("option");
var opened = false;
var selected_list = [];
selected.onclick = function () {
    if (!opened) {
        options.style.top = "0"
        options.style.visibility = "visible"
        options.style.opacity = "1"
        opened = true;
        selected.classList.add("focused")
        arrow.style.transform = "rotate(180deg)";

    }
    else {
        options.style.top = "10px"
        options.style.visibility = "hidden"
        options.style.opacity = "0"
        opened = false;
        selected.classList.remove("focused")
        arrow.style.transform = "rotate(0deg)"
    }
}

for (let i = 0; i < options_list.length; i++) {
    options_list[i].onclick = function () {
        if (!selected_list.includes(this.innerHTML)) {
            selected_list.push(this.innerHTML);
            this.classList.add("selected_option")
        }
        else {
            var index = selected_list.indexOf(this.innerHTML);
            selected_list.splice(index, 1);
            this.classList.remove("selected_option")

        }
        if (selected_list.includes("All") || selected_list.length === options_list.length - 1) {
            document.getElementById("number_of_selected").innerHTML = "All";
        }
        else {
            document.getElementById("number_of_selected").innerHTML = selected_list.length;
        }
    }
}


// search functionality for drop down


function filterFunction() {
    var input, filter, i;
    input = document.getElementById("search_macros");
    filter = input.value.toUpperCase();
    div = document.getElementById("myDropdown");
    var o = document.getElementsByClassName("macro");
    for (i = 0; i < o.length; i++) {
        txtValue = o[i].textContent || o[i].innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            o[i].style.display = "";
        } else {
            o[i].style.display = "none";
        }
    }
}


///////// message sending script

var recepient;
var r_button = document.getElementById("recepient_button")
var all = false;
function newRecipient(rec, event) {
    all = false;
    if (rec.toUpperCase() === "ALL") {
        all = true;
        recepient = "All";
        r_button.innerHTML = recepient;
    }
    else if (event.key === "Enter" && rec !== "") {
        recepient = rec;
        r_button.innerHTML = recepient;

    }
    else {
        all = true;
        recepient = "All";
        r_button.innerHTML = recepient;
    }
}