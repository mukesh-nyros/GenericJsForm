
/*checking fields empty or not*/


function validation(obj)
{
var objtype=obj.type;
 if (objtype=="tel")		/*Generic phone number validation start*/
{     //if starts
var p=obj.value;
var reg=obj.pattern;
  if(p== null || p=="")
   {   
alert(obj.title);
obj.focus();
       return false;  
   }  
   else if(p.match(reg))
   {
return true;   
   }  
   
  else  
   {   
     alert(obj.title);
obj.focus();
       return false;  
   }  
}	//if ends				/*Generic phone number validation end*/




else if (objtype=="password")		/*Generic password validation start*/
{

var re=obj.pattern;
		
		if(obj.value=="")
			{
				alert(obj.title);
				obj.focus();
				return false;
	
			}

		else if(obj.value.match(re))
		{
		return true;
		}
	
	else 
	{
	alert(obj.title);
	obj.focus();
	return false;

	}

}					/*Generic password validation end*/




else if(objtype=="file")		/*Generic Picture upload validation start*/
{
var p=obj.value;
    var pic1=/(?:gif|GIF)$/;
    var pic2=/(?:jpg|JPG)$/;
    var pic3=/(?:jpeg|JPEG)/;
    var pic4=/(?:png|PNG)/;

    if(p == null || p == "")
   {
     
    alert(obj.title);
      obj.focus();
      return false;
   } 

   else if(p.match(pic1)||p.match(pic2) || p.match(pic3)|| p.match(pic4))
   {      
 return true;
   }
   else
   {
    alert(obj.title);
obj.focus();
    return false;
   }

} 					/*Generic Picture upload validation end*/




else if(objtype=="checkbox")   /*Generic checkbox validation start*/
{
var a=document.getElementsByName("hobbies");
var chk=0;
for(var i=0;i<a.length;i++)
{	//for starts
if (a[i].checked)
{
chk=1;
return true;
}
 else
{
alert('select atleast one hobby');
obj.focus();
return false
}
if(chk==0)
{
alert('select hobbies');
return  false;
}
else
return true;
}	//for ends
}
  				/*Generic checkbox validation end*/




else if(objtype=="email")		/*Generic Email id validation start*/
{
var p=obj.pattern;
    
    if(obj.value == null)
   {
     
    alert(obj.title);
      obj.focus();
      return false;
   } 

   else if(obj.value.match(p))
   {      
 return true;
   }
   else
   {
    alert(obj.title);
obj.focus();
    return false;
   }

} 					/*Generic Email id validation end*/


else if(objtype=="radio")			/*Generic radio button validation start*/
 {
count1=0;
var radio=document.getElementsByName("gender");
for(t1=0;t1<radio.length;t1++)
{
if(radio[t1].checked)
count1++;
}

if(count1==0)
{
alert("Select radiobutton");
radio[0].focus();
return false;
}
else 
return true;
}    				/*Generic radio button validation end*/              


else 
return false;
}


/*Generic text box with alphanumeric & alphabets validation*/

function genericvalid(obj,minv,maxv,chk)/*chk is to get '1' from html file for alphanumeric validation,,*/
{
var objtype=obj.type;
 if (objtype=="text" && chk==1)
	{
var reg=obj.pattern;		

		if(obj.value=="")				/* check the conditons */

			{
				alert(obj.title);
                                obj.focus();
				return false;
	
			}


		else if(obj.value.length<minv || obj.value.length>maxv)
			{

				alert(obj.title);
                                 obj.focus();
				return false;

			}


		else if(obj.value.match(reg)) 	

			{			
				return true;
								
			}

	
	}
else if(objtype=="text" && chk==0)	/*chk is to get '0' from html file for alphabets validation*/
{
var regex=obj.pattern;
var p=obj.value;
	if( obj.value== "" )
   {  
alert(obj.title);
obj.focus();
      return false;  
   } 
else if(obj.value.length<minv || obj.value.length>maxv) 
   {   
     alert(obj.title);
     obj.focus();
      return false;  
   }   

   else if(p.match(regex))
   {
	     return true;
   }  


}
else
return false;

}


		/*Generic select box validation*/	


function selectvalid(obj)  		/*parameters passing */
	{  

		if ( obj.selectedIndex == -1 )		/* check the conditons */
			{
				 alert(obj.title);
     					obj.focus();
				return false;
			} 
		else if ( obj.selectedIndex == 0)		/* check the conditons */
			{
				 alert(obj.title);
     					obj.focus();
				return false;
			} 
		else   	
			return true;
			


       }


function chkform(val)
{
var x=[];
 x=document.forms[0].elements.length;       
         for(var i=0;i<x;i++)
          {
                    
                  
                  if(document.forms[val].elements[i].value=="")
                  { 
			alert("Please fill all fields");
                          document.forms[val].elements[i].focus();
                          return false;
                  }

}
return true;
}
