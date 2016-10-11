/**
 * Autor: Rômulo "Sir Rommer" Brasil  
 * Email: romulobrasil@live.com
 * Data: 22 de Maio de 2013
 */

/**
 * 
 * Function que imprime e adciona o número no input visor
 * 
 * Variável Global => gVisor que controla o fluxo de entrada no visor. 
 * 
 * @param {type} num
 * @returns {undefined}
 */

document.addEventListener("DOMContentLoaded", init);

function init() {
    new Calculadora();
}

function Calculadora() {
    
    var addListener = function() {
        var btn0 = document.getElementById('num0');
        var btn1 = document.getElementById('num1');
        var btn2 = document.getElementById('num2');
        var btn3 = document.getElementById('num3');
        var btn4 = document.getElementById('num4');
        var btn5 = document.getElementById('num5');
        var btn6 = document.getElementById('num6');
        var btn7 = document.getElementById('num7');
        var btn8 = document.getElementById('num8');
        var btn9 = document.getElementById('num9');
        
        var btnSomar       = document.getElementById('somar');
        var btnSubtrair    = document.getElementById('subtrair');
        var btnDividir     = document.getElementById('dividir');
        var btnMultiplicar = document.getElementById('multiplicar');
        var btnLimpar      = document.getElementById('limpar');
        var btnResult      = document.getElementById('result');
        
        var addNum0 = (function(escopo){
            return function(escopo) {
                escopo = addNum(0);
            };
        })(this);
        
        var addNum1 = (function(escopo){
            return function(escopo) {
                escopo = addNum(1);
            };
        })(this);
        
        var addNum2 = (function(escopo){
            return function(escopo) {
                escopo = addNum(2);
            };
        })(this);
        
        var addNum3 = (function(escopo){
            return function(escopo) {
                escopo = addNum(3);
            };
        })(this);
        
        var addNum4 = (function(escopo){
            return function(escopo) {
                escopo = addNum(4);
            };
        })(this);
        
        var addNum5 = (function(escopo){
            return function(escopo) {
                escopo = addNum(5);
            };
        })(this);
        
        var addNum6 = (function(escopo){
            return function(escopo) {
                escopo = addNum(6);
            };
        })(this);
        
        var addNum7 = (function(escopo){
            return function(escopo) {
                escopo = addNum(7);
            };
        })(this);
        
        var addNum8 = (function(escopo){
            return function(escopo) {
                escopo = addNum(8);
            };
        })(this);
        
        var addNum9 = (function(escopo){
            return function(escopo) {
                escopo = addNum(9);
            };
        })(this);
        
        var opSomar = (function(escopo){
            return function(escopo) {
                escopo = operacao('somar');
            };
        })(this);
        
        var opDividir = (function(escopo){
            return function(escopo) {
                escopo = operacao('dividir');
            };
        })(this);
        
        var opSubtrair = (function(escopo){
            return function(escopo) {
                escopo = operacao('subtrair');
            };
        })(this);
        
        var opMultiplicar = (function(escopo){
            return function(escopo) {
                escopo = operacao('multiplicar');
            };
        })(this);
        
        var opResult = (function(escopo){
            return function(escopo) {
                escopo = operacao('result');
            };
        })(this);
        
        var opReset = (function(escopo){
            return function(escopo) {
                escopo = reset();
            };
        })(this);
        
        btn0.addEventListener("click", addNum0);
        btn1.addEventListener("click", addNum1);
        btn2.addEventListener("click", addNum2);
        btn3.addEventListener("click", addNum3);
        btn4.addEventListener("click", addNum4);
        btn5.addEventListener("click", addNum5);
        btn6.addEventListener("click", addNum6);
        btn7.addEventListener("click", addNum7);
        btn8.addEventListener("click", addNum8);
        btn9.addEventListener("click", addNum9); 
        
        btnSomar.addEventListener("click", opSomar);
        btnLimpar.addEventListener("click", opReset);
        btnResult.addEventListener("click", opResult);
        btnDividir.addEventListener("click", opDividir);
        btnSubtrair.addEventListener("click", opSubtrair);
        btnMultiplicar.addEventListener("click", opMultiplicar);   
    };

    var addNum = function(num) {
        if (typeof gVisor === "undefined") {
            document.getElementById("visor").value = "";
        }

        document.getElementById("visor").value += num;

        gVisor = 1;

    };

    /**
     * 
     * Function para efetuar as operações básicas.
     * 
     * Retornando valor.
     * 
     * @param {type} operador
     * @param {type} valor1
     * @param {type} valor2
     * @returns {unresolved}
     * 
     */

    var calcular = function(operador, valor1, valor2) {
        var valor;

        if (operador === "somar") {
            valor = parseFloat(valor1) + parseFloat(valor2);
        } else if (operador === "subtrair") {
            valor = valor1 - valor2;
        } else if (operador === "multiplicar") {
            valor = valor1 * valor2;
        } else {
            valor = valor1 / valor2;
        }

        return(valor);
    };


    /**
     * 
     * Function Operação pega o operador assim que o usuário clica no botão dos 
     * operadores e do igual. 
     * 
     *  Passa por três operações codicional 
     *  
     *  Primeiro vez é para passar em todas condições menos na última 
     *  pelo fato das variáveis ser undefined e armazena o gValor e gOperador
     *  apertando novamente ele entra na primeira condição e faz as operações e só 
     *  quando é apertado no operadores novamente ele entra na segunda condição. 
     * 
     * @param {type} operador
     * @returns {Number}
     * 
     */

    var operacao = function(operador) {
        var valor = document.getElementById("visor").value;
        delete gVisor; // Deleta para que o visor recoloque um outro número a ser calculado

        if (typeof gOperador !== "undefined" && operador === "result") {
            gValor = calcular(gOperador, gValor, valor);
            document.getElementById("visor").value = gValor;
            delete operador;
            delete gValor;
            return(0);
        } else if (typeof gValor !== "undefined") {
            gValor = calcular(gOperador, gValor, valor);
            gOperador = operador;
            document.getElementById("visor").value = gValor;
        } else {
            gValor = valor;
            gOperador = operador;
        }


    };

    /**
     * Function que deleta todas as varialveis globais.
     * 
     * @returns {undefined}
     */

    var reset = function() {
        delete gValor;
        delete gOper;
        delete gVisor;
    };
    
    addListener();

}