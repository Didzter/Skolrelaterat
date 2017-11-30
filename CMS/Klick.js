// ==UserScript==
// @name         Klick
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        http://webblabb.iit.his.se:82/Magento/*
// @grant        none
// ==/UserScript==


var klick = document.getElementsByClassName('add');
if (klick.length > 0) {
    document.querySelector(".add").click();
}
else
document.querySelector(".save").click();
