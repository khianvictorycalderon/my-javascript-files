var a = [1,1,2,3,4,5,];
a.forEach(function(x,y) {
    console.log('Number:', x, x % 2 === 1 ? 'Odd Number' : 'Even Number', 'Index: ', y);
});