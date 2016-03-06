/*
	Created by: 		Leensey M. Lawas
	Dates Accomplished:	March 6, 2016
*/

function getHammingDistance(){

	// get value from the forms and store to variables
	var str1 = document.forms["hammingDistance"]["str1"].value;
	var str2 = document.forms["hammingDistance"]["str2"].value;

		// if str1 is empty
		if (str1 == null || str1 == "") {	       
	       document.getElementById("hd").innerHTML =
	       "Error! String 1 is empty!";
	    }
	    // if str2 is empty
	    else if (str2 == null || str2 == "") {	       
	       document.getElementById("hd").innerHTML =
	       "Error! String 2 is empty!";
	    }
	    // if str1's length differ from str2's
		else if(str1.length!==str2.length){			
			document.getElementById("hd").innerHTML = 
			"Error! Strings are not equal!";
		}
		// if str1's length is same as str2's
		else if(str1.length == str2.length){
			var pattern = /[^CGATU]/;
			// check if str1 is a valid nucleobase
			if(pattern.test(str1)){				
				document.getElementById("hd").innerHTML = 
				"Error! String 1 is not a nucleobase!";				
			}
			// check if str2 is a valid nucleobase
			else if(pattern.test(str2)){				
				document.getElementById("hd").innerHTML = 
				"Error! String 2 is not a nucleobase!";				
			}
			else{
				var cnt=0;
				var i;
				for(i=0;i<str1.length; i++){
					// if character at str1 index i not equal to
					// character at str2 index i, iterate cnt
					if(str1.charAt(i)!==str2.charAt(i)) cnt++;					
				}
				document.getElementById("hd").innerHTML = cnt;
			}
		}		
}// end of getHammingDistance()

function countSubstrPattern(string original, string pattern){

}// end of countSubstrPattern()