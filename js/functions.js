
    function playGame(gameOptions) {

    	//available options
    	var options = gameOptions;
        
    	//play
        var player1 = options[Math.floor(Math.random()*options.length)];
        var player2 = options[Math.floor(Math.random()*options.length)];

        //decide who wins if not even
        if (player1 != player2){
			switch(player1) {
    			case "Papir":
       				 if (player2 == "Kamen") outcome = 1;
       				 if (player2 == "Makaze") outcome = 2;
       				 break;
    			
				case "Kamen":
       				 if (player2 == "Makaze") outcome = 1;
       				 if (player2 == "Papir") outcome = 2;
       				 break;	

    			case "Makaze":
       				 if (player2 == "Papir") outcome = 1;
       				 if (player2 == "Kamen") outcome = 2;
       				 break;

    		}
    		message = 'Player ' + outcome + ' wins' ;

        }
        
        //if even do not decide
        else {

        	outcome = 0;
        	message = 'Even, play again!' ;

        }	

        output = new Array(outcome, player1, player2, message);
        console.log(output);
        return output;
    }



