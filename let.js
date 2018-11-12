var name = 'global var';

function home() {
    var hovevar = "homevar";
    for(let i = 0; i < 100; i++) {
        console.log(i);
    }
    if(true) {
        let myif = "myif";
    }
    console.log(myif);
    // console.log(i);
}
home();