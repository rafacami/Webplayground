
"use strict";

let myName = prompt( 'Whats your name?', "Rafael");
if (myName)
{
    let confirmed = confirm(`Hi ${myName}!`);
    alert(confirmed);
}