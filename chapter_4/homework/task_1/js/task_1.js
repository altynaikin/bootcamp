function a (num){
    let result = 0;
    num.split('').forEach((item)=> result+=+item);
    return result
}
console.log(a(prompt()))