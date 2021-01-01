function countWords() { 
  
            
    var text = document.getElementById("inputField").value; 
    var tx1 = text.trim();
    var numWords = 0; 
    for (var i = 0; i < tx1.length; i++) { 
        var chr = tx1[i]; 
        var chr1 = tx1[i+1];
        if (chr == " "  | chr == ",") { 
            if (chr1 != " "){
                numWords += 1; 
            }    
        } 
    } 
    numWords += 1; 
    document.getElementById("show") 
        .innerHTML = numWords;    
} 

function UniqueWords(){
    var uniq = document.getElementById("inputField").value; 
    var uniq1=uniq.trim();
    uniq1=uniq1.toLowerCase().split(/[ ,]+/);
    var out=[]; 
    var count=0;
    var start=false;
    for(i=0;i<uniq1.length;i++){
        for(j=0;j<out.length;j++){
            if(uniq1[i]==out[j]){
                start=true;
            }
        }
        count=count+1;
        if(count==1 && start==false){
        out.push(uniq1[i]);
    }
    start=false;
    count=0;
    
}
document.getElementById("show") 
        .innerHTML = out.join(' '); 
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