//dom
var myContentDivs=document.getElementsByClassName("sample");
var myP=myContentDivs[0].getElementsByTagName("h1");
console.log(myP);

myP[0].innerHTML="HI";

//changing HTML content

var myTitle= document.getElementById("page-title");
myTitle.textContent="UC2 LO4 ASSIGNMENT";
console.log(myTitle.textContent);

//changing element attributes

var link=document.getElementById("test");
console.log(link);
console.log(link.getAttribute("href"));
link.setAttribute("class" ,"hurray!!");
link.setAttribute("alt" ,"yehey!!");


