//your code here!
const con = document.getElementById("infi-list");

let itemNo = 1;
const addList = (num)=>{
	for(let i=1; i<= num; i++){
		const ele = document.createElement("li");
		ele.innerHTML = `Item ${itemNo}`;
		con.append(ele);
		itemNo++;
	}
}
con.onscroll = ()=>{
	if(Math.ceil(con.clientHeight + con.scrollTop) >= con.scrollHeight){
		addList(2);
	}
}



addList(10);