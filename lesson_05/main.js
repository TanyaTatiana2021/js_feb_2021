
let arr = [1, 2, 3, 4, 5];

arr.sort(function changesOrderElements(a, b) {
    const arr = []; {

        if (a < b) return 1;
        if (a == b) return 0;
        if (a > b) return -1;
    }
    
    console.log (arr);
}) ;



