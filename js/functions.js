
    function playGame() {

    	//available options
    	var options = ["Papir", "Kamen", "Makaze"];
        
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
    		

        }
        
        //if even do not decide
        else {

        	outcome = 0;
        	

        }	

        output = new Array(outcome, player1, player2);
        console.log(output);
        return output;
    }



