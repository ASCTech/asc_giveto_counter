        $(function(){
                var s = 1290594846;
                var reduce = Math.floor(s*.0000009);
var startN = s-reduce;
     $('.counter4').jOdometer({increment: 1, 
            counterStart:startN,
  counterEnd: s,
            numbersImage:'numbers-campaign1.png',
            delayTime: 1,
            speed: 1,
            formatNumber: true, 
            spaceNumbers: 3, 
            widthDot: 8, 
            offsetRight:0,
            maxDigits: 11,
            prefixChar: true,
                widthNumber: 35,
                heightNumber: 49
            });
        });
