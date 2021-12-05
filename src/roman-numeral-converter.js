function convertToRoman(num) {
    const pairs  = [
        [1000,"M"],
        [900, "CM"],
        [500, "D"],
        [400, "CD"],
        [100, "C"],
        [90, "XC"],
        [50, "L"],
        [40, "XL"],
        [10, "X"],
        [9, "IX"],
        [5, "V"],
        [4, "IV"],
        [1, "I"]
    ];
    
    let result = "";

    for(let i=0;i<pairs.length;i++) {
        let [key,val] = pairs[i];
        let res = num / key;
        for(let j=0;j<Math.floor(res);j++) {
            result += val;
            num -= key;
        }  
        if (num==0) break; 
    }
    return result;
   }
   
   console.log("XXXVI" === convertToRoman(36));
   console.log("XCIX" === convertToRoman(99));
   console.log("IV" === convertToRoman(4));
   console.log("MMMCMXCIX" === convertToRoman(3999));