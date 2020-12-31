function countWords() { 
  
            
    var text = document.getElementById("inputField").value; 
    var tx1 = text.trim();
    var numWords = 0; 
    for (var i = 0; i < tx1.length; i++) { 
        var currentCharacter = tx1[i]; 
        var nextcharacter = tx1[i+1];
        if (currentCharacter == " ") { 
            if (nextcharacter != " "){
                numWords += 1; 
            }    
        } 
    } 
    numWords += 1; 

    
    document.getElementById("show") 
        .innerHTML = numWords; 
} 

function UniqueWords(){


    var text = document.getElementById("inputField").value; 
    var tx2 = text.trim();
    var textarray=tx2.split(/[ ,]+/);
    var out=[];
    for(i=0;i<textarray.length; i++){
        var counter =0;
            var counter = 0; 
            for(j=i+1;j<textarray.length;j++){
                var tx3 = textarray[i].toLowerCase()
                var tx4 = textarray[j].toLowerCase()
                if (tx3==tx4) {
                    counter = counter + 1;
                    out.push(tx3);
                    break;
                }
       
            }
    }
    document.getElementById("show")
        .innerHTML=out.join(" ");
    
} 
function TitleWords(){
    var txt = document.getElementById("inputField").value;
    txt = txt.toLowerCase().split(' ');
    for (var i=0;i<txt.length;i++){
        txt[i]=txt[i].charAt(0).toUpperCase() + txt[i].slice(1);
    }
    document.getElementById("show")
        .innerHTML=txt.join(" ");  

}   