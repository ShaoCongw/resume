function changeCss(index){
    var link = document.getElementById("css");
    var bt1 = document.getElementById("button1");
    var bt2 = document.getElementById("button2");
    var bt3 = document.getElementById("button3");
    switch(index){
        case 0:
            link.setAttribute("href","../css/style_1.css");
            bt1.style.backgroundColor = "#ED1C24";
            bt2.style.backgroundColor = "#F8A1A4";
            bt3.style.backgroundColor = "#F8A1A4";
            break;
        case 1:
            link.setAttribute("href","../css/style_2.css"); 
            bt2.style.backgroundColor = "#ED1C24";
            bt1.style.backgroundColor = "#F8A1A4";
            bt3.style.backgroundColor = "#F8A1A4";
            
            break;
        case 2:
            link.setAttribute("href","../css/style_3.css");
            bt3.style.backgroundColor = "#ED1C24";
            bt1.style.backgroundColor = "#F8A1A4";
            bt2.style.backgroundColor = "#F8A1A4";
            
            break;      
    }
}