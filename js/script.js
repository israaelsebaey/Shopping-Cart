
window.addEventListener('load',function(){
    // select Elements
    var products=document.getElementsByClassName('products');
    var myTable=document.getElementsByClassName('table')[0];
    var emptyCart=document.getElementById('emptyCart');
    var calPrice=document.getElementById('calPrice');
    var totalPrice=document.getElementById('totalPrice');
    var cartCounter=document.getElementById('cartCounter');
    var FinalPrice=0;
    calPrice.style.display='none';
    
    
    var btnArr=[];
    for(var i=0;i<products.length;i++){
        var cartBtn=products[i].childNodes[1].childNodes[1].childNodes[7];
        btnArr.push(cartBtn);
        var x=1;
        var y=0;
        btnArr.forEach(function(item){
            item.onclick=function(e){
                console.log(item);
                var item1=item.previousElementSibling;
                var item2=item1.previousElementSibling;
                var item3=item2.previousElementSibling;
                console.log(item1.textContent,item2.textContent,item3.getAttribute("src"));
                var tableTR=document.createElement('tr');
                var td1=document.createElement('td');
                var td2=document.createElement('td');
                var td3=document.createElement('td');
                var imgSrc=item3.getAttribute("src");
                console.log(imgSrc);  
                td1.innerHTML=`<img src='${imgSrc}'/>`;
                td2.innerHTML=item2.textContent;
                td3.innerHTML=item1.textContent;
                tableTR.appendChild(td1);
                tableTR.appendChild(td2);
                tableTR.appendChild(td3);
                myTable.style.display='block';
                calPrice.style.display='block';
                emptyCart.style.display='none';
                myTable.appendChild(tableTR);
                FinalPrice+=parseInt(item1.textContent);
                console.log(FinalPrice)
                cartCounter.innerHTML=x++; 
            }
        })
        calPrice.onclick=function(){
            totalPrice.innerHTML=FinalPrice+'$';
        }
    }
})