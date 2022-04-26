import * as model from "../model/model.js";

function route() {
    let hashTag = window.location.hash;
    let pageName = hashTag.replace("#", "");
    let pageContent = pageName + "Page";

    //if(pageName == ""){
    //    pageContent = "homeContent"
    //}
    model.pageViewName(pageContent);
}

function pageURL()
{
    let lastPage = window.location;
    let thisPage = lastPage.hash;
    console.log("The URL of this page is: " + lastPage);
    model.showURL(thisPage);
}

/*
function hashTest() {
    console.log(window.location)
}
*/

/*function getURL() {
    let lastPage = window.location;
    let thisPage = lastPage.hash;
    console.log("The URL of this page is: " + thisPage);
}
*/


function initListeners() {
    $(window).on("hashchange", route);
}

$(document).ready(function () {
    model.showContent();
    initListeners();
    pageURL();
});