export default class CL_mayor {
    constructor() {
        this.contpersonas = 0;
        this.contMayor = 0;
    }
    procesarPersonas(p){
        this.contpersonas++;

        if (p.edad >= 18){
            this.contMayor++;
        }
    }

    porcentajeMayores (){
        if (this.contpersonas > 0)
        return (this.contMayor / this.contpersonas) * 100;
        else 
        return 0;
        
    }
   
    mostrarcantpersonas(){
        return this.contpersonas;
    }
    mostrarcantMayor(){
        return this.contMayor;
    }
}