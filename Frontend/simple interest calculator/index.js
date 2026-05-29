function simpleInterest(principal, time, rate){
    let si = (principal * time * rate)/100
    console.log(`Simple Interest of p=${principal}, t=${time}, r=${rate} is`, si );
    let totalAmount = principal+ si;
    console.log("Total Amount is", totalAmount)  

}
simpleInterest(300, 3, 4)