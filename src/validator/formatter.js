const trim = function(){
    const text = "     Hiii I am Aishwarya Sejgaya      ";
    console.log(text.trim());
}

const changetolower = function(){
    const text = "Hello hOw arE YOU ??";
    console.log("lowerCase: "  + text.toLocaleLowerCase());
}

const changetouper = function(){
    const text = "i aM fine AnD yOu.";
    console.log("upperCase: "  + text.toLocaleUpperCase);
}
module.exports.trimText = trim;
module.exports.lowerCase = changetolower;
module.exports.upperCase = changetouper;