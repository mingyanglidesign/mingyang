var MonthlyPayment = function(interestRate,principal,monthsnumber) {
    return ((interestRate/12)*principal)/(1-Math.pow(1+(interestRate/12),-monthsnumber))
};

require('mahrio').runServer( process.env, __dirname)
    .then( function(server){
        server.route({
            path: '/cal',
            method: 'POST',
            handler: function(req, rep) {
                var interestRate=(req.payload.interestRate)/100;
                var principal=req.payload.principal;
                var monthsnumber=req.payload.monthsnumber;
                var payment= MonthlyPayment(interestRate,principal,monthsnumber);
                rep('Monthly Payment is: $' + payment);
            }
        });
    });
// Server runs http://127.0.0.1:6085
