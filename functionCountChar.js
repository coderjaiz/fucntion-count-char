const countChar=function(thestring,thechar){
	let count=0;
	for(let i=0;i<thestring.length;i++){
		if(thestring[i]==thechar)
			count=count+1;
	}
	return count;
};

let s=String(prompt(`Enter the string`));
let c=String(prompt(`Enter the character to be counted`));
let count=countChar(s,c);
document.write(`\n The character ${c} appears ${count} times in the string ${s}`);
