
function myFunction(){
    var birthYear =  prompt('What year were you born Good Friend?');
    var ageInDayss = (2020 - birthYear)*365;
    var h1 = document.createElement('h1');
    var textNode = document.createTextNode('Your are '+ ageInDayss +' days');
    h1.setAttribute('id','ageInDays');
    h1.appendChild(textNode);
    document.getElementById("myDIV").appendChild(h1);
    
}

function reset(){
    document.getElementById('ageInDays').remove();
}