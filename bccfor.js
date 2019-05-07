let bccb2 ="<table border='1' width='300' cellspacing='0' cellpadding='3'>";

for(let i=1;i<=9;i++) {
    bccb2 = bccb2 + "<tr>";

    for (let j = 2; j <= 9; j++) {
        bccb2 = bccb2 + "<td>"+ j+"x"+i+"=" + i * j + "</td>";

    }
    bccb2 = bccb2+ "</tr>";
}
bccb2= bccb2 +"</table>";
document.getElementById("bcc2").innerHTML= bccb2;