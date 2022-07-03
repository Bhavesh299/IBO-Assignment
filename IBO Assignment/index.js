const listOfProducts = [{

    productName: "TV",
    quantity: 10,
    description: "television"
  },
  {
    productName: "AC",
    quantity: 5,
    description: "air conditioner"
  },
  {
    productName: "TV",
    quantity: 10,
    description: "television"
  },
  {
    productName: "AC",
    quantity: 5,
    description: "air conditioner"
  },
  {
    productName: "FAN",
    quantity: 10,
    description: "Ceiling Fan"
  },

] ;

//  function count of each Product(as an object) present in the given list of Products considering Product Name as Key.

var btn = document.getElementById("btn") ; 
btn.addEventListener("click",function(){
    var obj = {} ;
    for(var i = 0 ; i < listOfProducts.length ; i++){

        if(obj[listOfProducts[i].productName] === undefined){

            obj[listOfProducts[i].productName] = 1 ;
        }
        else{

            obj[listOfProducts[i].productName]++ ;
        }
    }
    console.log(obj) ;

}) ;

  

//  function getUniquePrducts which should return an array of objects by grouping the products based on the productName and summing up the quantity for the same products present in the given list of Products considering Product Name as Key.

var btn2 = document.getElementById("btn2") ;
btn2.addEventListener("click",function(){

    var obj  ;

    obj = [] ;

    for(var i = 0 ; i < listOfProducts.length ; i++){

        var flag = false ;
        for(var j = 0 ; j < obj.length ; j++){

            if(obj[j].productName === listOfProducts[i].productName){

                obj[j].quantity += listOfProducts[i].quantity ;
                flag = true ;
                break ;
            }
        }
        if(flag === false){

            obj.push(listOfProducts[i]) ;
        }
    }
    console.log(obj) ;
    obj = [] ;

}) ;

