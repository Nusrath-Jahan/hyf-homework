function weatherWear(temperature ){
    if (temperature <= 7){
        return 'Heavy jacket and pants';
    } else if (temperature <= 13){
        return 'Sweater or light jacket and pants';
    } else if (temperature <= 17){
        return 'Full sleeve shirt and pants';
    } else {
        return 'Shorts and a t-shirt ';
    }
}
const clothesToWear = weatherWear(6);
console.log(clothesToWear);