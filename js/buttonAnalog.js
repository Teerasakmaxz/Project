function dataFromFB(para) {
    
    var upToFirebaseRoom1Air2 = dbFirebase.ref("room1/air1")
    var upToFirebaseRoom1Air1 = dbFirebase.ref("room1/air")
    var upToFirebaseRoom2Air2 = dbFirebase.ref("room2/air1")
    var upToFirebaseRoom2Air1 = dbFirebase.ref("room2/air")
    var state = dbFirebase.ref("room1/state");
    var state2 = dbFirebase.ref("room2/state");
    var state01 = dbFirebase.ref("room1/state01");
    var state02 = dbFirebase.ref("room2/state01");
    var button = dbFirebase.ref("room1/button");
    var button2 = dbFirebase.ref("room1/button2");
    var buttonR = dbFirebase.ref("room2/button");
    var buttonR2 = dbFirebase.ref("room2/button2");
    var user = dbFirebase.ref("room1/UserinRoom");



    //เปิดจากเว็บ
    if (para == 1 && name() == 0) {
        button.set(1);
        state.set(1);


    } else if (para == 1 && name() == 1) {
        upToFirebaseRoom1Air1.set(0)
        button.set(0);
        state.set(0)

    } else if (para == 2 && name1() == 0) {

        button2.set(2);
        state01.set(1);


    } else if (para == 2 && name1() == 2) {
        upToFirebaseRoom1Air2.set(0)
        button2.set(0);
        state01.set(0);


        //Room2
    } else if (para == 3 && name11() == 0) {
        buttonR.set(3);
        state2.set(1);


    } else if (para == 3 && name11() == 3) {
        upToFirebaseRoom2Air1.set(0)
        buttonR.set(0);
        state2.set(0)

    } else if (para == 4 && name111() == 0) {
        buttonR2.set(4);
        state02.set(1);


    } else if (para == 4 && name111() == 4) {
        upToFirebaseRoom2Air2.set(0)
        buttonR2.set(0);
        state02.set(0)

    } else if (para == 10) {
        var maxz = setInterval(() => {
            user.set(1);
            console.log(1);
            clearInterval(maxz);
        }, 20000);
        var maxz1 = setInterval(() => {
            user.set(5);
            console.log(5);
            clearInterval(maxz1);
        }, 40000);
        var maxz11 = setInterval(() => {
            user.set(10);
            console.log(10);
            clearInterval(maxz11);
        }, 60000);
    }
}


function name() {
    var gg;
    var btn = dbFirebase.ref("room1/air");
    btn.on('value', function(snapshot) {
        gg = snapshot.val();
    });
    return gg
}


function name1() {
    var gg1;
    var btn3 = dbFirebase.ref("room1/air1");
    btn3.on('value', function(snapshot) {
        gg1 = snapshot.val();
    });
    return gg1
}


function name11() {
    var gg11;
    var btn2 = dbFirebase.ref("room2/air");
    btn2.on('value', function(snapshot) {
        gg11 = snapshot.val();
    });
    return gg11
}

function name111() {
    var gg111;
    var btn1 = dbFirebase.ref("room2/air1");
    btn1.on('value', function(snapshot) {
        gg111 = snapshot.val();
    });
    return gg111
}