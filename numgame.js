
    var isClick=false;
    var roundTime=0;
    var numAss=0;
    var bigOrSmall="";
    var ranNum=0;
    const colors = ["#DAE5D0", "#E4E9BE", "#C4DDFF", "#C0D8C0", "#FFC4DD"];

//Q enter 呼叫ProcessFormData() 很快就消失
// <div><img src="bob.jpg" width="200" height="150"></div>
/** 
    var body = document.body;

    function goRocket(e){
      if(num!="" && e.KeyCode==13){
          alert("hii");
          ProcessFormData();
      console.log(e.keyCode); //查鍵盤代碼
      
    }
  }
    body.addEventListener('keydown', goRocket ,13) //偵測按下按鍵的行為
*/
/** 
var body = document.body;
body.addEventListener(
    document.onkeydown = function(event) {
      if(event.KeyCode==13){
        ProcessFormData();
        alert("enter");
      }
      if(event.KeyCode==32){
        StartGame();
        alert("space");
      }
      });
*/
      /**document.onkeydown = function(event) {
        if (event.KeyCode== 13) {
        // 如果按下的是a鍵，則新建一個a鍵按下的事件並觸發
        alert(34);
        const createEvent = new KeyboardEvent('keydown', ProcessFormData());
        document.dispatchEvent(createEvent);
        }
        };
*/







    
    //method
    
    function ProcessFormData() {
      const form = document.forms['form'];    // 取得 name 屬性為 form 的表單
      const num = form.elements.num.value;  // 取得 elements 集合中 name 屬性為 name 的值
      
      
      if(num<1 || num>100 || num=="")
        return;

      

      if(bigOrSmall=="猜對了"){
        console.log("已猜對請重新開始");
        return; 
      }

      if(isClick==false)
        console.log("請先點擊開始遊戲!");
      else
          roundTime++;
      
       //alert("numAss2");
       alert(numAss);
        //alert("rt");
        //alert(roundTime);
        if(roundTime>10){
          console.log("猜超過10次，遊戲結束");
          //isClick=false;
          return;
        }
       
        //if(form==null)
          //alert("請輸入數字");
        
      // alert(numAss);
        
        if(num<1 || num>100)
           console.log("請輸入1-100的整數!");
      
      
        if(num>numAss){
          bigOrSmall="太大";
          //alert("太大");
          //alert(num);
        }
        else if(num<numAss){
          bigOrSmall="太小";
          //alert("太小");
          //alert(num);
      }
        else{
          bigOrSmall="猜對了";
          console.log("猜對了");
          //alert(num);
          //isClick=false;
        }
      if(roundTime==0)
        return;
    
    var row_2 = document.createElement('tr');
    
    var row_2_data_1 = document.createElement('td');
    row_2_data_1.innerHTML = roundTime;
    var row_2_data_2 = document.createElement('td');
    row_2_data_2.innerHTML = num;
    var row_2_data_3 = document.createElement('td');
    row_2_data_3.innerHTML =bigOrSmall ;
    
    row_2.appendChild(row_2_data_1);
    row_2.appendChild(row_2_data_2);
    row_2.appendChild(row_2_data_3);
    tbody.appendChild(row_2);
    
    
    if(isClick==false)
      return;
    
    document.getElementById("numarea").value="";
    //var enterBtn = ;
    
    /**function EnterBtn(value) {
      var reset = "";
      reset = num;
      num=reset;
      alert(51522);
    }
    document.querySelector('#enter').addEventListener("click",EnterBtn);
     */  
 
      

    
      }
    


    function CleanTable(){
      // $('#table tr:not(:first)').innerHTML = '';
       document.getElementById("tbody").innerText="";
     
    }
     
    
    function StartGame() { 
      alert("start");
      isClick=true;
      CleanTable();
      numAss=Math.floor(Math.random() * 100+1);
      roundTime=0;
      
      }
    
    
      function RandomColor(){

        ranNum = Math.floor(Math.random() * colors.length);
        document.body.style.backgroundColor = colors[ranNum];
        //改變背景色
      }

      function AfterColor(){

        ranNum ++;
        if(ranNum>=colors.length)
            ranNum=0;
        document.body.style.backgroundColor = colors[ranNum];
        //改變背景色
      }

      function BeforeColor(){

        ranNum --;
        if(ranNum<0)
            ranNum=colors.length-1;
        document.body.style.backgroundColor = colors[ranNum];
        //改變背景色
      }


     $(document).keydown(function(event){  
        var key = event.which;     
          switch(key) { 
          case 13:{
            ProcessFormData();
            //alert(13);
            break;
          }
          case 32:{
            StartGame();
            //alert(32);
            break;
          }
          case 65:{
            BeforeColor();
            //alert(65);
            break;
          }
          case 68:{
            AfterColor();
            //alert(68);
            break;
          }
        }

        });
        
        /**case 37: 
        // Key left. Call function to do Key left work 
        break; 
       case 38: 
        // Key up. Call function to do Key up work 
        break; 
       case 39: 
        // Key right. Call function to do Key right work 
        break; 
       case 40: 
        // Key down. Call function to do Key down work 
        break; 
        */

 
       
