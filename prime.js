let prime_no=37;
let count=0;
for(let i=0;i<=prime_no;i++){
	if(prime_no%i==0){
		count+++;
}
}
if(count==2){
	console.log(prime_no,"is Prime Number")
}else{
	console.log(prime_no,"is not a Prime Number")
}







