function dataFromFB(para) {
    var upToFirebaseRoom1Air2 = dbFirebase.ref("room1/air1")
    var upToFirebaseRoom1Air1 = dbFirebase.ref("room1/air")
    var state = dbFirebase.ref("room1/state");
    var state01 = dbFirebase.ref("room1/state01");
    var button = dbFirebase.ref("room1/button");
    var button2 = dbFirebase.ref("room1/button2");



    //เปิดจากเว็บ
    if (para == 1 && name() == 0) {
        // data(1);
        button.set(1);
        state.set(1);


    } else if (para == 1 && name() == 1) {
        upToFirebaseRoom1Air1.set(0)
        button.set(0);
        state.set(0)

    } else if (para == 2 && name1() == 0) {
        // data(1);
        button2.set(2);
        state01.set(1);


    } else if (para == 2 && name1() == 2) {
        upToFirebaseRoom1Air2.set(0)
        button2.set(0);
        state01.set(0)
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
    var btn = dbFirebase.ref("room1/air1");
    btn.on('value', function(snapshot) {
        gg1 = snapshot.val();
    });
    return gg1
}