$('.btn').on('click', function(){
    let num = $('.inp').val();
    let arr = [];
    for(let i = 0; i < num; i++){
        arr.push(Math.random()*10)//here we create arr
    }
    let sortArr = [...arr].sort(function(a,b){//copy if we had sort else change arr
        return a-b
    });
    for(let i = 0; i < arr.length ; i++){
        if(arr[i]==sortArr[0]){
            arr[i]=sortArr[sortArr.length - 1]//min=max
        }else if(arr[i]==sortArr[sortArr.length - 1]){
            arr[i]=sortArr[0]//max=min
        }
    }
    console.log(arr)
})