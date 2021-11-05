$(function(){
    const kosarTartalom=[];
    const termekekTomb=[];
    const termekekObjTomb=[];
    let index=0;
    tombBeolvas("termekek.json");

    function tombBeolvas(fajlnev){
        $.ajax({url: fajlnev, success: function(result){
            result.forEach(element => {
                const termek=new Termek(element.nev,element.leiras,element.ar,element.kep,index);
                termek.termekMegjelenit();
                index++;
            });
                  
        }});
    }
    $(window).on("kosarFeltolt",function(event){
        kosarTartalom.push(event.detail.nev);
        $("section").append("<div id='nev'><p>"+event.detail.nev+"</p><p>"+event.detail.ar+"</p><input type='button' class='kosar' name='kosar' value='X'></div>");
    });
    $(".kosar").on("click",function(){
        $("#nev").remove();
    });
    function kosarMegjelenit(){
        kosarTartalom.forEach(elem=>{
            $("section").append(elem);
        });
        
    }
    

});