const data1 = { 
    name: 'hande' 
};

const data2 = { 
    surname: 'gunesdogdu',
    age: 21
};

const data3 = {
    age: 22 //en son atanan deger kabul edilir
};

const result = Object.assign(data1,data2,data3);

console.log(result);

const data4 = { name: 'hande' };
const data5 = data4; //referansın uzerinde isaret edilen nokta degistiriliyor
data5.name = 'ebrar';

console.log('data4 name: ' + data4.name); //ebrar
console.log('data5 name: ' + data5.name); //ebrar

const data6 = {
    info: {
        name: 'hande',
        surname: 'gunesdogdu'
    }
};

const data7 = JSON.parse(JSON.stringify(data6));
data7.info.name = 'ebrar';

console.log('data6 name: ' + data6.info.name); //hande
console.log('data7 name: ' + data7.info.name); //ebrar