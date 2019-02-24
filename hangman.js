hangman = function hangman(phrase) {

    const gameOver = "Game over!!!";
    const won = "You\'ve got it!!! Final phrase:";
    const wrong = "Incorrect guess!!!";
    const lost = "You\'ve lost!!! Correct phrase:";

 var remains=phrase.length;
 var length=0;
 var answer=[];
 for(var i=0;i<phrase.length;i++)
    answer[i]='_';
 
 function check(val){
     flag=0;
     
     
     for(i=0;i<phrase.length;i++){
         if(val==phrase[i] && answer[i]=='_'){
             answer[i]=val;
             remains=remains-1;
             flag=1;
             
         }
         else if(val==phrase[i] && answer[i]!='_')
            flag=1;
     }
 
     if(length>2 || remains<0 )return gameOver;
     if(length==2 && flag==0){
         length=length+1;
         return lost + " " +phrase;}
         
     if(remains==0 ){
         remains=remains-1;
         return won + ' ' +phrase;}
     if(flag==1)
     return answer.join(" ");
 
     if(flag==0 ){
         length=length+1;
         return wrong;
     }
     
 }
 return check;
}

