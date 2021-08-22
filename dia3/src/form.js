const input = document.querySelector("[data-js='name']")
input.addEventListener("input", (e) => {

    let input = e.target.value;
    let inputLower = input.toLowerCase();

    let inputSplit = inputLower.split(" ")

    //console.log(inputSplit)

    var result = []       

    inputSplit.forEach(element => {
        var array = ["de","dos","da","das"]
        if (element[0]!=undefined){
            if(array.includes(element)){
                var temp = element;
            }else{
                var temp = element[0].toUpperCase()+ element.substr(1);
            }    
        
        }
        
            result = result.concat(temp);
        

    });
    
    e.target.value=result.join(" ")
})
