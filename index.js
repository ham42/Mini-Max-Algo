$(document).ready(function(){
    $('#start').click(function(){

        num1 = $('#num1').val();
        num2 = $('#num2').val();
        num3 = $('#num3').val();
        num4 = $('#num4').val();
        num5 = $('#num5').val();
        num6 = $('#num6').val();
        num7 = $('#num7').val();
        num8 = $('#num8').val();

        var numD;
        var numE;
        var numF;
        var numG;
        var numB;
        var numC;

        if(num1 != '' && num2 != '' && num3 != '' && num4 != '' && num5 != '' && num6 != '' && num7 != '' && num8 != ''){

            
            // First Trip
            setTimeout(function(){
                $('#h').removeClass('is-light');
                $('#h').text(num1);
            }, 1000);
            setTimeout(function(){
                $('#i').removeClass('is-light');
                $('#i').text(num2);
            }, 2000);
            
            setTimeout(function(){
                $('#d').addClass('is-primary');
                $('#d').removeClass('is-light is-warning');
                if(num1 > num2){
                    $('#d').text(num1);
                    numD = num1;
                }else{
                    $('#d').text(num2);
                    numD = num2;
                }
                $('#h').text('H');
                $('#i').text('I');
                $('#h').addClass('is-light');
                $('#i').addClass('is-light');
            }, 4000);
        
            // Second Trip
            setTimeout(function(){
                $('#j').removeClass('is-light');
                $('#j').text(num3);
            }, 5000);
            setTimeout(function(){
                $('#k').removeClass('is-light');
                $('#k').text(num4);
            }, 6000);
            
            setTimeout(function(){
                $('#e').addClass('is-primary');
                $('#e').removeClass('is-light is-warning');
                if(num3 > num4){
                    $('#e').text(num3);
                    numE = num3;
                }else{
                    $('#e').text(num4);
                    numE = num4;
                }
                $('#j').text('J');
                $('#k').text('K');
                $('#j').addClass('is-light');
                $('#k').addClass('is-light');
            }, 8000);
        
            // Third Trip
            setTimeout(function(){
                $('#l').removeClass('is-light');
                $('#l').text(num5);
            }, 9000);
            setTimeout(function(){
                $('#m').removeClass('is-light');
                $('#m').text(num6);
            }, 10000);
            
            setTimeout(function(){
                $('#f').addClass('is-primary');
                $('#f').removeClass('is-light is-warning');
                if(num5 > num6){
                    $('#f').text(num5);
                    numF = num5;
                }else{
                    $('#f').text(num6);
                    numF = num6;
                }
                $('#l').text('L');
                $('#m').text('M');
                $('#l').addClass('is-light');
                $('#m').addClass('is-light');
            }, 12000);

            // Fourth Trip
            setTimeout(function(){
                $('#n').removeClass('is-light');
                $('#n').text(num7);
            }, 13000);
            setTimeout(function(){
                $('#o').removeClass('is-light');
                $('#o').text(num8);
            }, 14000);
            
            setTimeout(function(){
                $('#g').addClass('is-primary');
                $('#g').removeClass('is-light is-warning');
                if(num7 > num8){
                    $('#g').text(num7);
                    numG = num7;
                }else{
                    $('#g').text(num8);
                    numG = num8;
                }
                $('#n').text('N');
                $('#o').text('O');
                $('#n').addClass('is-light');
                $('#o').addClass('is-light');
            }, 16000);
        
            // Fifth Trip
            setTimeout(function(){
                $('#b').removeClass('is-light is-success');
                $('#b').addClass('is-primary');
                $('#d').removeClass('is-primary');
                $('#d').addClass('is-light is-warning');
                $('#e').removeClass('is-primary');
                $('#e').addClass('is-light is-warning');
                if(numD < numE){
                    $('#b').text(numD);
                    numB = numD;
                }else{
                    $('#b').text(numE);
                    numB = numE;
                }
                $('#d').text('D');
                $('#e').text('E');
            }, 18000);
            
            // Sixth Trip
            setTimeout(function(){
                $('#c').removeClass('is-light is-success');
                $('#c').addClass('is-primary');
                $('#f').removeClass('is-primary');
                $('#f').addClass('is-light is-warning');
                $('#g').removeClass('is-primary');
                $('#g').addClass('is-light is-warning');
                if(numF < numG){
                    $('#c').text(numF);
                    numC = numF;
                }else{
                    $('#c').text(numG);
                    numC = numG;
                }
                $('#f').text('F');
                $('#g').text('G');
            }, 20000);     
            
            // Last Trip
            setTimeout(function(){
                $('#a').removeClass('is-light is-link');
                $('#a').addClass('is-primary');
                $('#b').removeClass('is-primary');
                $('#b').addClass('is-light is-success');
                $('#c').removeClass('is-primary');
                $('#c').addClass('is-light is-success');
                if(numB > numC){
                    $('#a').text(numB);
                }else{
                    $('#a').text(numC);
                }
                $('#b').text('B');
                $('#c').text('C');
            }, 22000); 
        }
        else {
        }
    });
});