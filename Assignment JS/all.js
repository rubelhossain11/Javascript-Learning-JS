// Problem 1 : Let’s play a mind game
// Description : Multiply a number by 3, then add 10, then divide by 2, then subtract 5, return the output.

function mindGame(number){
    if(typeof(number)==="number"){
        const firstResult= number*3;
    const secondResult= firstResult+10;
    const thirdResult= secondResult/2;
    const result= thirdResult-5;
    
    return result;
    }
    else{
        return "your input is not a number, please input a number."; 
    }
    }
    
    let isnumber = mindGame(33);
    console.log(isnumber);
    
    
    // Problem 2 : Finding even or odd 
    // description : The output should be based on the total number of characters in the string. Output will be 'even' or 'odd'
    
    function evenOdd(string){
        if(typeof(string)==='string'){
            let stringLength = string.length;
            if(stringLength%2===0){
            return 'even';
            }
        
            else{
                return 'odd';
            }
        }
        else{
            return " Your input is not a string. please input a string then check even or odd.";;
        }
    }
    // function call
    let evenOddResult = evenOdd("Nahid");
    console.log(evenOddResult);
    
    
    
    // Problem 3: Is Less or Greater than seven
    // description : 7 to find out the difference. If this difference is less than 7, return the subtraction. Otherwise double of the input must be returned.
    
    function isLGSeven(number){
        if(typeof(number)==="number"){
            let difference = number-7;
    if(difference<7){
        return difference;
    }
    else{
        return number*2;
    }
        }
        else{
            return "your input is not a number, please input a number.";;
        }
    
    }
    let result = isLGSeven(15);
    console.log(result);
    
    
    // Problem : 4 Finding Bad Data
    // description : How many bad data are there in the array and must return that number.
    
    function findingBadData(numbers){
    if(Array.isArray(numbers)){
        let negativeNumber = 0;
        for( let i=0; i<numbers.length; i++){
            if(numbers[i]<0)
             negativeNumber++;
        }
         return negativeNumber;
    }
    else{
    return "Your input is not an array. please input an array.";;
    }
    }
    let array =[2, -5, -7, 13,-7]
    let badNumber = findingBadData(array);
    console.log(badNumber);
    
    // Problem 5 : Convert your gems into diamond.
    // description : Find out how many diamonds you will get in total by combining all the gems. If the number of total diamond is over 1000 then 2000 should be subtracted from the total diamond and the number of remaining diamonds should be calculated.
    
    function gemsToDiamond(number1, number2, number3){
     if(typeof(number1)==="number" && typeof(number2)==="number" && typeof(number3)=== "number"){
        const firstFriendGems = 21;
        const secondFriendGems = 32;
        const thirdFriendGems = 43;
        
         let firstFrienddiamond = firstFriendGems*number1;
         let secondFrienddiamond = secondFriendGems*number2;
         let thirdFrienddiamond = thirdFriendGems*number3;
        
         let totaldiamond= firstFrienddiamond+secondFrienddiamond+thirdFrienddiamond;
         
        
        if(totaldiamond<2000){
            return totaldiamond;
        }
        else{
            return totaldiamond-2000;
        }
     }
     else{
        return "Your inputs are not numbers. Please inputs number.";;
     }
     
    }
    let total = gemsToDiamond(100,5,1);
    console.log(total);