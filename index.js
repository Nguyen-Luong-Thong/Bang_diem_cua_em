function myFunction(){
    event.preventDefault()
    var a= parseFloat(document.getElementById('se1').value);
    var b= parseFloat(document.getElementById('se2').value);
    var c= parseFloat(document.getElementById('select').value);
    var k;
    var type;
    switch (c){
        case 1:
            k=parseFloat(a+b*2)/3;
            break;
        case 2:
            k=parseFloat(a*2+b*3)/5;
            break;
        case 3:
            k=parseFloat(a*3+b*4)/7;
            break;
    }
    if(k>=9){
        type="Giỏi"
        document.getElementById('demo').style.color = "red";
    }else if(k>=7){
        type="Khá"
        document.getElementById('demo').style.color = "blue";
    }else if (k>=5){
        type="Trung bình"
        document.getElementById('demo').style.color = "yellow";
    }else{
        type="Yếu"
        document.getElementById('demo').style.color = "gray";
    }
    document.getElementById('kq').value =k;
    document.getElementById('demo').innerHTML =type;
}
function myFunction2 (){
    document.getElementById('se1').value =" ";
    document.getElementById('se2').value =" ";
}