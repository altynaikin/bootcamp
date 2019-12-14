

function toSeconds(num) {
    if(isNaN(num)){
        return "error"
    } else {
       return num * 3600;
    }

}

alert(toSeconds(+prompt("enter hour")));
