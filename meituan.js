var g=0;
			var tab=document.getElementById("tab");
			
			function addcar0(obj){
				alert("加入购物车成功");
				g++;
				var	number=document.getElementById("number");
					number.innerHTML=g;
				var goods0=document.getElementById("massage0").childNodes;
				
				var trNode=tab.insertRow();
				console.log(goods0[0].innerHTML);
				trNode.insertCell(0).innerHTML="<input type='checkbox' id='all' onclick='checkall()'>"
				trNode.insertCell(1).innerHTML=goods0[0].innerHTML;
				trNode.insertCell(2).innerHTML=goods0[1].innerHTML;
				trNode.insertCell(3).innerHTML="<input type='button' value='删除' onclick='deletetr(this)'>"
			}
			function addcar1(obj){
				alert("加入购物车成功");
					g++;
					var goods1=document.getElementById("massage1").childNodes;
					console.log(goods1[0].innerHTML);
					var	number=document.getElementById("number");
						number.innerHTML=g;
						var trNode=tab.insertRow();
					trNode.insertCell(0).innerHTML="<input type='checkbox' id='all' onclick='checkall()'>"
					trNode.insertCell(1).innerHTML=goods1[0].innerHTML;
					trNode.insertCell(2).innerHTML=goods1[1].innerHTML;
					trNode.insertCell(3).innerHTML="<input type='button' value='删除' onclick='deletetr(this)'>"
					console.log(tab.rows.length);
				}
			function addcar2(obj){
				alert("加入购物车成功");
					g++;
					var goods2=document.getElementById("massage2").childNodes;
					console.log(goods2[0].innerHTML);
					var	number=document.getElementById("number");
						number.innerHTML=g;
						
						var trNode=tab.insertRow();
					trNode.insertCell(0).innerHTML="<input type='checkbox' id='all' onclick='checkall()'>"
					trNode.insertCell(1).innerHTML=goods2[0].innerHTML;
					trNode.insertCell(2).innerHTML=goods2[1].innerHTML;
					trNode.insertCell(3).innerHTML="<input type='button' value='删除' onclick='deletetr(this)'>"
				}
			function addcar3(obj){
				alert("加入购物车成功");
					g++;
					var goods3=document.getElementById("massage3").childNodes;
					console.log(goods3[0].innerHTML);
					var	number=document.getElementById("number");
						number.innerHTML=g;
					
						var trNode=tab.insertRow();
					trNode.insertCell(0).innerHTML="<input type='checkbox' id='all' onclick='checkall()' >"
					trNode.insertCell(1).innerHTML=goods3[0].innerHTML;
					trNode.insertCell(2).innerHTML=goods3[1].innerHTML;
					trNode.insertCell(3).innerHTML="<input type='button' value='删除' onclick='deletetr(this)'>"
				}
			var car=document.getElementsByClassName("food");
			var list=document.getElementsByClassName("list");
			function tolist(obj){
				for(var i=0;i<car.length;i++){
					car[i].style.display="none";
					list[i].style.display="block";
				}
			}
			function index(obj){
				for(var i=0;i<car.length;i++){
					car[i].style.display="grid";
					list[i].style.display="none";
				}
			}
			
			
			
			function  deletetr(obj){
				alert("删除成功");
				var trNode=obj.parentNode.parentNode;
				var tab=document.getElementById("tab");
				tab.deleteRow(trNode.rowIndex);
				g--;
				var	number=document.getElementById("number");
					number.innerHTML=g;
			}
			function allpick(obj){
				var tab=document.getElementById("tab");
				var rs=tab.rows;
				for(var i=0;i<rs.length;i++){
					rs[i].cells[0].children[0].checked=obj.checked;
				}
				}
			function checkall(){
				var tab=document.getElementById("tab");
				var rs=tab.rows;
				var c=0;
				for(var i=1;i<rs.length;i++){
					if(!rs[i].cells[0].children[0].checked){
						document.getElementById("allfood").checked=false;
						break;
						}
						c++;
			}
			if(c==rs.length-1){
				document.getElementById("allfood").checked=true;
			}
			if(c==0){
				document.getElementById("allfood").checked=false;
			}
			
			}
			function deleteall(obj){
				tab=document.getElementById("tab");
				for(var i=tab.rows.length-1;i>0;i--){
					if(tab.rows[i].cells[0].children[0].checked){
						tab.deleteRow(i);
						g--;
						var	number=document.getElementById("number");
							number.innerHTML=g;
					}
				}
				
			}
			function payfor(){
				var tab=document.getElementById("tab");
				var rs=tab.rows;
				var sum=0;
				for(var i=1;i<rs.length;i++){
					if(rs[i].cells[0].children[0].checked){
						sum+=parseFloat(rs[i].cells[2].innerHTML);
					}
				}
				document.getElementById("sum").innerHTML=sum;
			}