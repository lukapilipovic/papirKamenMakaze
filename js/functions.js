
    // main function, returns game outcome 
    //including player selections and message

    function playGame(gameOptions,player1Name,player2Name) {

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
    		
        if (outcome == 1 ) {
          message = player1Name + ' wins';
        }
        else {
          message = player2Name + ' wins';
        }


        }
        
        //if even do not decide
        else {

        	outcome = 0;
        	message = 'Even, play again!' ;

        }	

        output = new Array(outcome, player1, player2, message);
       
        return output;
    }


      function saveResult (pName, res){

         
         var igraci = { 'playerName' :  pName, 'result' : res }

        // Put the object into storage
        localStorage.setItem('igraci', JSON.stringify(igraci));
        

        console.log(playerName + res );
        
       }


       function loadResult (playerName){

        // Retrieve the object from storage
        var retrievedObject = localStorage.getItem('igraci');

        player =  JSON.parse(retrievedObject);

        var pName = player['playerName'];
        var playerScore = player['result'];

        if (pName == playerName) {
          $("#playerScore1").html(playerScore);
        }

        // console.log('retrievedObject: ', JSON.parse(retrievedObject));
        console.log(playerName + playerScore);
       }



    /// function for rotating images 

    function rotateImages(image, gameOptions){

      //available options
      
    

      var option = '';

      
      img = 'img/' + option + '.png';

      $(image).attr('src', img);


      



    }





