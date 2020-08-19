
function myFunction(){
    var birthYear =  prompt('What year were you born Good Friend?');
    var ageInDayss = (2020 - birthYear)*365;
    console.log(ageInDayss);
    var h1 = document.createElement('h1');
    var textAnswer = document.createTextNode('Your are'+ ageInDayss +' days');
    console.log(textAnswer);
    h1.setAttribute('id','ageInDays');
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-result').innerHTML(h1);
}