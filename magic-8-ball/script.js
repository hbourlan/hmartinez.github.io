const points = [
    "As I see it, yes",
    "Ask again later",
    "Better not tell you now",
    "Cannot predict now",
    "Concentrate and ask again",
    "Dont count on it",
    "It is certain",
    "It is decidedly so",
    "Most likely",
    "My reply is no",
    "My sources say n",
    "Outlook good",
    "Outlook not so good",
    "Reply hazy try again",
    "Signs point to yes",
    "Very doubtful",
    "Without a doubt",
    "Yes",
    "Yes, definitely",
    "You may rely on it"
];
document.getElementById("response").innerHTML=points;

function myFunction(){
    points.sort(function(a,b){return 0.5 - Math.random()});
        document.getElementById("response").innerHTML=points[0];
        document.getElementById("response").style.fontSize="1.12rem";
        setTimeout(timeup, 4000)

        function timeup(){
            DocumentFragment.getElementById("response").innerHTML="8";
            document.getElementById("response").style.fontSize = "7.5rem";
            document.getElementById("clear").value = " ";
        }
}