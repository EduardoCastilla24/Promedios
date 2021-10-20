
var n_pc= []
var parcial = [];
var btn_procesar = document.getElementById('Btn--Procesar');

function Ingreso(){
    //<!--================ OBTENER VALORES ================-->
    var pc1 = parseInt(document.getElementById('PC-1').value);
    var pc2 = parseInt(document.getElementById('PC-2').value);
    var pc3 = parseInt(document.getElementById('PC-3').value);
    var pc4 = parseInt(document.getElementById('PC-4').value);
    var ep = parseInt(document.getElementById('E-P').value);

    //<!--================ ALMACENAR VARIABLES ================-->
    n_pc.push(pc1,pc2,pc3,pc4);
    parcial.push(ep)
}


function Promedio(){

    var desea = parseInt(document.getElementById('P-Desea').value);
    var ep = parseInt(document.getElementById('E-P').value);

    //<!--================ DATOS VACIOS ================-->
    if(n_pc.includes( NaN ) || desea=='' || ep ==''){
        Swal.fire({
            heightAuto: false,
            icon: 'error',
            title: 'Oops...',
            text: 'No se han ingresado los datos',
            hideClass: {
                popup: '',                   
            }
          })
        return Limpiar()
    }
    //<!--================ DATOS NEGATIVOS ================-->
    else{
        var negativo = [];
        for(i=0; i<n_pc.length; i++){
            if(n_pc[i]<0 || n_pc[i]>20){
                negativo.push('Si')
            }else{
                negativo.push('No')
            }
        }
        if( negativo.includes( 'Si' ) || desea<0 ||desea>20 || ep<0 || ep>20){
            Swal.fire({
                heightAuto: false,
                icon: 'error',
                title: 'Nota no valida',
                text: 'Ingrese una nota entre el 0 y 20',
                hideClass: {
                    popup: '',                   
                }
              })
            return Limpiar();
        }else{
            //<!--================ PROMEDIOS ================-->
            var prom_pc = (n_pc.reduce((a, b) => a + b)*0.15);
            var prom_exam = (ep*0.2);

            //<!--================ PROMEDIOS ACTUAL ================-->
            var promedio = prom_pc + prom_exam;

            //<!--================ NOTA REQUERIDA ================-->
            var falta  = desea - promedio;    
            var Min = falta/0.2;
            /*================== MOSTRAR RESULTADOS ==================*/
            document.getElementById('Promedio').value = promedio.toFixed(2);
            document.getElementById('Min').value = Min.toFixed(2);

            //<!--================ CONDICIONALES DEL PROMEDIO ================-->
            if(promedio<10.5){
                document.getElementById('Estado').value = 'Desap';
                document.getElementById("Estado").style.color = "#e4002b";
            }else{
                document.getElementById('Estado').value = 'Aprob';
                document.getElementById("Estado").style.color = "#25a244";
            }

            
            //<!--================ CONDICIONALES DE LA NOTA DESEADA ================-->
            if(promedio>desea){
                document.getElementById('Need').value = ""
                document.getElementById('Min').value= ""
                document.getElementById('Need').style.background = "#4c7273"
                document.getElementById('Min').style.background= "#4c7273"
            }else{
                document.getElementById('Need').value = falta.toFixed(2);
            }

            btn_procesar.disabled = true;
        }
    }
}

function Limpiar(){
    document.getElementById('PC-2').value='';
    document.getElementById('PC-3').value='';
    document.getElementById('PC-4').value='';
    document.getElementById('PC-1').value='';
    document.getElementById('E-P').value='';
    document.getElementById('Promedio').value='';
    document.getElementById('Estado').value= '';
    document.getElementById('P-Desea').value= '';
    document.getElementById('Need').value = '';
    document.getElementById('Min').value = '';
    document.getElementById('Need').style.background = "#F3F8FB"
    document.getElementById('Min').style.background= "#F3F8FB"
    n_pc.length=0;
    parcial.length=0;
    console.clear();
    btn_procesar.disabled = false;
}