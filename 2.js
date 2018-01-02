function showDate(){
  var i=year.selectedIndex;
  var y=year.options[i].innerHTML;
  var i=month.selectedIndex;
  var m=month.options[i].innerHTML;
  var d=new Date(y,m-1,1);
  var days=getDays(y,m);
  var count=0;
  day=d.getDay();
  for(var i=0,arr=[];i<42;i++){
      if(i<day||count==days){
	     arr.push(0);
	  }else{
	    arr.push(++count);
	  }
  }
  tds=date.querySelectorAll("tbody td");
   for(var i=0;i<tds.length;i++){
          tds[i].innerHTML=(arr[i]==0?"":arr[i]);
		  tds[i].style.backgroundColor=(arr[i]==0?"#eee":"#fff");
   }
}
function getDays(y,m){
  return m==2?(y%4==0&&y%100!=0||y%400==0?29:28):
	       m==4||m==6||m==9||m==11?30:31	  
}