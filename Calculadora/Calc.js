var x;
x=$(document);
x.ready(inicializacion);

var num1,num2,op;

function inicializacion(){

    $("#num1").on("click",function(){
        setNumber("#num1");
    });


    $("#num2").on("click",function(){
        setNumber("#num2");
        
    });


    $("#num3").on("click",function(){
        setNumber("#num3");
    });


    $("#num4").on("click",function(){
        setNumber("#num4");
    });


    $("#num5").on("click",function(){
        setNumber("#num5");
    });

    $("#num6").on("click",function(){
        setNumber("#num6");
    });

    $("#num7").on("click",function(){
        setNumber("#num7");
    });


    $("#num8").on("click",function(){
        setNumber("#num8");
    });


    $("#num9").on("click",function(){
        setNumber("#num9");
    });

    $("#num0").on("click",function(){
        setNumber("#num0");
    });

    $("#reiniciar").on("click",reset);


    $("#opSum").on("click",function(){
        setOp("#opSum");
    });

    $("#opRest").on("click",function(){
        setOp("#opRest");
        
    });

    $("#opMult").on("click",function(){
        setOp("#opMult");
    });

    $("#opDiv").on("click",function(){
        setOp("#opDiv");
    });

    $("#igual").on("click",function(){

        num2=$("#tablero").html();
        resolver();

    })


}

function setNumber(name){

    $("#tablero").append($(name).html());

}

function setOp(name){

    num1=$("#tablero").html();
    op=$(name).html();
    clean();


}

function clean(){

    $("#tablero").text("");
}

function reset(){

    $("#tablero").text("");
    num1=0;
    num2=0;
    op="";
}

function resolver(){

    var res=0;

    switch(op){


        case "+":
            res=parseFloat(num1)+parseFloat(num2);
            break;

        case "-":
            res=parseFloat(num1)-parseFloat(num2);
            break;

        case "*":
            res=parseFloat(num1)*parseFloat(num2);
            break;
        
        case "/":
            res=parseFloat(num1)/parseFloat(num2);
            break;    

    }


    reset();
    $("#tablero").html(res);

}

