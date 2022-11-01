var a = [2, 4, -2, 7, -2, 4, 2]; 
var result = true;

for (var i = 0; i < a.length / 2; i++) {
    if (a[i] != a[a.length -i -1]) {
        result= false;
       
    }
}

if(result)
    console.log("The array is symmetrical.");
else
    console.log("The array is not symmetrical.");