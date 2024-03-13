let input=document.getElementById('userinput');
    let string=''
    function press(num){
        string+=num;
        input.value=string;
    }
    function equal(){
        input.value=eval(string);
    }
    function erase(){
        string='';
        input.value=string;
    }