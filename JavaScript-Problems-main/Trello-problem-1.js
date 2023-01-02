function ToFindWord(letters,word,direction){
    let LengthOfWord=word.length;
    letters=letters+word;
    for(let i=0;i<letters.length-LengthOfWord;i++){
        var str=letters.slice(i,i+LengthOfWord);
        if(word===str)
        {
            return str+"-->"+direction;
        }
    }
}
function Reverse(str){
    return (str==="")?"":Reverse(str.substr(1))+str.charAt(0);
}
function RowColumnConversion(letters){
    let LengthOfRC=Math.sqrt(letters.length),originalString="";
    for(let i=0;i<LengthOfRC;i++){   
        let tempString="";
        let tempNumber=0;
        for(let j=0;j<LengthOfRC;j++){   
            tempString+=letters.charAt(i+tempNumber);
            tempNumber+=LengthOfRC;
        }
        originalString+=tempString;
    }
    return originalString;
}
function Covert_2d_List(letters){
    let lst=[],temp=[],vari=0,letters_Sq_Length=Math.sqrt(letters.length)
    for(let i=0;i<letters_Sq_Length;i++){
        for(let j=0;j<letters_Sq_Length;j++){
            temp.push(letters[vari])
            vari++;
        }
        lst.push(temp);
        temp=[];
    }
    return lst;
}
function ZigZagConversion(lst){
    let ref1=0,ref2=0,main_ref=0,low_ref1=1,sstr="",low_ref2=lst.length-1;
    for(let i=0;i<lst.length*lst.length;i++){
        if(main_ref<=lst.length-1){
            if(ref2==0){
                main_ref++;
                sstr+=(lst[ref1][ref2]);
                ref1=0;
                ref2=main_ref;
            }
            else{
                sstr+=(lst[ref1][ref2]);
                ref1++;
                ref2--;
            }
            if(ref2==lst.length){
                ref1=low_ref1;
                ref2=low_ref2;
            }
        }
        else{
            if(ref2==low_ref1){
                sstr+=(lst[ref1][ref2]);
                low_ref1++;
                main_ref++;
                ref1=low_ref1;
                ref2=low_ref2;
            }
            else{
                sstr+=(lst[ref1][ref2]); 
                ref1++;
                ref2--;
            }
        }
    }
    return sstr;
}
function RightToLeft(letters,word){   
    return ToFindWord(letters,word,"Right To Left");
}
function LeftToRight(letters,word){ 
    return ToFindWord(Reverse(letters),word,"Left To Right");
}
function TopToBottom(letters,word){
    return ToFindWord(RowColumnConversion(letters),word,"Top To Bottom");
}
function BottomToTop(letters,word){
    return ToFindWord(Reverse(RowColumnConversion(letters)),word,"Bottom To Top");
}
function CrossDown(letters,word){
    return ToFindWord(ZigZagConversion(Covert_2d_List(letters)),word,"Cross Down");
}
function CrossUp(letters,word){
   return ToFindWord(Reverse(ZigZagConversion(Covert_2d_List(letters))),word,"Cross Up");
}
function WordPass(words){  
    words.forEach(element => {
       let RTL=RightToLeft(letters,element);
       let LTR=LeftToRight(letters,element);
       let TTB=TopToBottom(letters,element);
       let BTT=BottomToTop(letters,element);
       let CRD=CrossDown(letters,element);
       let CRU=CrossUp(letters,element); 
       if(RTL!==undefined){
           console.log(RTL);
           counter++;
       }
       if(LTR!==undefined){
           console.log(LTR);
           counter++;
       }
       if(TTB!==undefined){
           console.log(TTB);
           counter++;
       }
       if(BTT!==undefined){
           console.log(BTT);
           counter++;
       }
       if(CRD!==undefined){
           console.log(CRD);
           counter++;
       }
       if(CRU!==undefined){
           console.log(CRU);
           counter++;
       }
    });
}
let letters = "PSUWHATSLPACKAGENYOLRDVLFINGEZBMIREHQNJOATBVGYESJDUWUESTPSTICKEY";
console.log(Covert_2d_List(letters));
let words = ["stick", "most", "key", "vein", "yes", "package", "tube", "target", "elm", "spy","way","get","rat"];
letters = letters.toLowerCase();
let counter=0;
WordPass(words);
console.log(counter+" - words found");
