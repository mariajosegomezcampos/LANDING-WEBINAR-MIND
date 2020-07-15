

    //   $('#countdown').countdown( '29/07/1', function(event) {
    //       var $this = $(this).html(event.strftime(''
    //       +'<div><span>%w</span><span>Dias</span></div>'
    //       +'<div><span>%d</span><span>Dias</span></div>'
    //       +'<div><span>%H</span><span>Horas</span></div>'
    //       +'<div><span>%M</span><span>Minutos</span></div>'
    //       +'<div><span>%s</span><span>segundos</span></div>'
          
    //       ))
        //   timezone: -3, //zona horaria chile

    //establecemos la fecha exacta en que termina el countdow
        // year: 2020,// YYYY Format
        // month: 07,// 1-12
        // day: 23,// 1-3
        // hour: 09,// 24 hour format 0-23
        // minute: 30,// 0-59
        // second: 0,// 0-59
        

    //   });
      
    
    // });
    simplyCountdown('#countdown', {
        year: 2020, // required
        month: 07, // required
        day: 23, // required
        hours: 01, // Default is 0 [0-23] integer
        minutes: 32, // Default is 0 [0-59] integer
        seconds: 0, // Default is 0 [0-59] integer
        words: { //words displayed into the countdown
            days: 'Día',
            hours: 'Hora',
            minutes: 'Minuto',
            seconds: 'Segundo',
            pluralLetter: 's'
        },
        plural: true, //use plurals
        inline: false, //set to true to get an inline basic countdown like : 24 days, 4 hours, 2 minutes, 5 seconds
        inlineClass: 'simply-countdown-inline', //inline css span class in case of inline = true
        // in case of inline set to false
        enableUtc: true, //Use UTC as default
        onEnd: function() {
             
        }, //Callback on countdown end, put your own function here
        refresh: 1000, // default refresh every 1s
        sectionClass: 'simply-section', //section css class
        amountClass: 'simply-amount', // amount css class
        wordClass: 'simply-word', // word css class
        zeroPad: false,
        countUp: false
    });

   