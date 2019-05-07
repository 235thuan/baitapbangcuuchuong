let bccb1="<table border='1' width='300' cellspacing='0' cellpadding='3'>";
let i =1;
let j=1;
while(i<=8) {
    bccb1= bccb1 + "<tr>";

    j=2;
    while(j<=9) {
        bccb1= bccb1 + "<td>" + j+"x"+ i +"="+ i*j + "</td>";
        j++;
    }
    bccb1= bccb1 +"</tr>";
    i++;

}
bccb1= bccb1 +"</table>";
document.getElementById("bcc1").innerHTML= bccb1;





