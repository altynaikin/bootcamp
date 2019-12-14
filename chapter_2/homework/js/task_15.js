function min(a) {
    if(a >= 0 && a < 15) {
        return "I"
    } else if (a > 15 && a < 30) {
        return "II"
    } else if (a > 30 && a < 45){
        return "III"
    } else if(a > 45 && a < 60) {
        return "IV"
    } else {
        return 'введите число'
    }
}


alert(min(+prompt("enter num")));