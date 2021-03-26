
"use strict";

const adminName = "Rafael";

function checkIfAdmin(name)
{
    if (name == adminName)
        showMessageAdmin();
}

function showMessage(name, fn)
{
    fn(name);
}

let showMessageAdmin = (name) => alert(`Hi ${name}! You are admin, go ahead.`);
let showMessageNonAdmin = (name) => alert(`Hi ${name}! You are not admin, get lost.`);
let showMessageNoName = () => alert(`Who the helll are you, go fuck yourself!`);

const myName = prompt( 'Whats your name?', "Rafael");

if (myName)
{
    if (myName == adminName)
        showMessage(myName, showMessageAdmin);
    else
        showMessage(myName, showMessageNonAdmin);
}
else
{
    showMessage(myName, showMessageNoName);
}