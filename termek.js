class Termek{
    constructor(nev, leiras, ar, kep, index){
        this.nev=nev;
        this.leiras=leiras;
        this.ar=ar;
        this.kep=kep;
        this.index=index;
        this.button="<input type='button' id='"+index+"' name='kosarba' value='Kosárba'>";
    }

    termekMegjelenit(){
        $("article").append("<div><h3>"+this.nev+"</h3><img src='"+this.kep+"'><p>"+this.leiras+"</p>"+this.button+"<span>"+this.ar+"</span>");
        $("#"+this.index).on("click",()=>{
            this.KattintasTrigger();
        });
    }

    KattintasTrigger(){
        let esemeny=new CustomEvent("kosarFeltolt",{detail:this});
        window.dispatchEvent(esemeny);
    }
}