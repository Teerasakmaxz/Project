var config = {
    apiKey: "AIzaSyB2_l8HIycLAdM6a9vA9XMaS_VPqxmBK1o",
    authDomain: "datacontro.firebaseapp.com",
    databaseURL: "https://datacontro.firebaseio.com",
    projectId: "datacontro",
    storageBucket: "datacontro.appspot.com",
    messagingSenderId: "585589132177"
};
firebase.initializeApp(config);
// โชว์ เช็คสถานะ แล้วเปลี่ยนสี//

var dbFirebase = firebase.database();
var dbRef = firebase.database().ref()
var firebaseAuth = firebase.auth

var upToFirebaseRoom1Air2 = dbFirebase.ref("room1/air1")
var upToFirebaseRoom1Air1 = dbFirebase.ref("room1/air")

var upToFirebaseRoom2Air2 = dbFirebase.ref("room2/air1")
var upToFirebaseRoom2Air1 = dbFirebase.ref("room2/air")

var state = dbFirebase.ref("room1/state");
var state01 = dbFirebase.ref("room1/state01");

var state02 = dbFirebase.ref("room2/state01");
var state2 = dbFirebase.ref("room2/state");

var button = dbFirebase.ref("room1/button");
var button2 = dbFirebase.ref("room1/button2");

var buttonR = dbFirebase.ref("room2/button");
var buttonR2 = dbFirebase.ref("room2/button2");




var button = dbFirebase.ref('room1/button');
button.on('value', function(snapshot) {
    var FBdata = snapshot.val();

    if (FBdata == 1) {
        addArr(1)
        state.set(1)


    } else if (FBdata == 0) {
        console.log(0);
        upToFirebaseRoom1Air1.set(0)
        state.set(0)
    }
});


var button2 = dbFirebase.ref('room1/button2');
button2.on('value', function(snapshot) {
    var FBdata1 = snapshot.val();

    if (FBdata1 == 2) {
        addArr(2)
        state01.set(1);


    } else if (FBdata1 == 0) {
        console.log(0);
        upToFirebaseRoom1Air2.set(0);
        state01.set(0);
    }
});


var button2R2 = dbFirebase.ref('room2/button');
button2R2.on('value', function(snapshot) {
    var FBdataR2 = snapshot.val();

    if (FBdataR2 == 3) {
        addArr(2)
        state2.set(1);


    } else if (FBdataR2 == 0) {
        console.log(0);
        upToFirebaseRoom2Air1.set(0);
        state2.set(0);
    }
});

var button2R22 = dbFirebase.ref('room2/button2');
button2R22.on('value', function(snapshot) {
    var FBdataR22 = snapshot.val();

    if (FBdataR22 == 4) {
        addArr(2)
        state02.set(1);


    } else if (FBdataR22 == 0) {
        console.log(0);
        upToFirebaseRoom2Air2.set(0);
        state02.set(0);
    }
});


var numLEDR1 = dbFirebase.ref('room1/UserinRoom');
var numLEDR1s = numLEDR1.on('value', function(snapshot) {

    var snapLEDR1 = snapshot.val();
    var num = 0;
    var LED;
    if (snapLEDR1 == num) {
        $("#btn-LED-R1").addClass('btn-off');

    } else {
        $("#btn-LED-R1").addClass('btn-on');

    }
    console.log('R1S101_LED:' + snapLEDR1)
    $('#userinRoomS101').text(snapLEDR1);
});
var numAIR0R1 = dbFirebase.ref('room1/air');
var numAIR0R1s = numAIR0R1.on('value', function(snapshot) {
    var snapAIR0R1 = snapshot.val();

    if (snapAIR0R1 == 0) {
        $("#btn-AIR1-R1").addClass('btn-off');
        $("#btn-AIR1-R1").addClass('btn-off');

    } else if (snapAIR0R1 == 1) {
        $("#btn-AIR1-R1").addClass('btn-on');
        $("#btn-AIR1-R1").addClass('btn-on');

    }
    console.log('R1S101_AIR1:' + snapAIR0R1)
});

var numAIR1R1 = dbFirebase.ref('room1/air1');
var numAIR1R1s = numAIR1R1.on('value', function(snapshot) {
    var snapAIR1R1 = snapshot.val();

    if (snapAIR1R1 == 0) {
        $("#btn-AIR2-R1").addClass('btn-off');
        $("#btn-AIR2-R1").addClass('btn-off');

    } else if (snapAIR1R1 == 2) {
        $("#btn-AIR2-R1").addClass('btn-on');
        $("#btn-AIR2-R1").addClass('btn-off');

    }
    console.log('R1S101_AIR2:' + snapAIR1R1)
});

var numLEDR2 = dbFirebase.ref('room2/UserinRoom');
var numLEDR2s = numLEDR2.on('value', function(snapshot) {

    var snapLEDR2 = snapshot.val();
    var num = 0
    var LED;
    if (snapLEDR2 == num) {
        $("#btn-LED-R2").addClass('btn-off');

    } else {
        $("#btn-LED-R2").addClass('btn-on');

    }
    console.log('R2S102_LED:' + snapLEDR2)
    $('#userinRoomS102').text(snapLEDR2);
});
var numAIR0R2 = dbFirebase.ref("room2/air");
var numAIR0R2s = numAIR0R2.on('value', function(snapshot) {
    var snapAIR0R2 = snapshot.val();
    var num = 0
    var AIR;
    if (snapAIR0R2 == num) {
        $("#btn-AIR1-R2").addClass('btn-off');
        $('#btn-AIR1-R2').addClass('btn-off');

    } else {
        $("#btn-AIR1-R2").addClass('btn-on');
        $('#btn-AIR1-R2').addClass('btn-on');
    }
    console.log('R1S102_AIR1:' + snapAIR0R2)
});

var numAIR1R2 = dbFirebase.ref('room2/air1');
var numAIR1R2s = numAIR1R2.on('value', function(snapshot) {
    var snapAIR1R2 = snapshot.val();
    var num = 0
    var AIR;
    if (snapAIR1R2 == num) {
        $("#btn-AIR2-R2").addClass('btn-off');
        $('#btn-AIR2-R2').addClass('btn-off');

    } else {
        $("#btn-AIR2-R2").addClass('btn-on');
        $('#btn-AIR2-R2').addClass('btn-on');
    }
    console.log('R1S102_AiR2:' + snapAIR1R2)
});

//กดปิด/เปิด
var numPerple1 = dbFirebase.ref("room1/UserinRoom");
var numPerples1 = numPerple1.on("value", function(snapshot) {
    document.querySelector("#Light_Row_one > input").checked = snapshot.val();

    $('#Light_Row_one').click(function() {
        numPerples1 = numPerple1.set(0, function() {

        })
    });

});

var numPerple2 = dbFirebase.ref("room2/UserinRoom");
var numPerples2 = numPerple2.on("value", function(snapshot) {
    document.querySelector("#Light_Row_one1 > input").checked = snapshot.val();

    $('#Light_Row_one1').click(function() {
        numPerples2 = numPerple2.set(0, function() {


        })
    });

});

var numAIR0R1 = dbFirebase.ref("room1/air");
var numAIR0R1s = numAIR0R1.on("value", function(snapshot) {
    document.querySelector("#AirOne1R1 >  input").checked = snapshot.val();

});
var numAIR1R1 = dbFirebase.ref("room1/air1");
var numAIR1R1s = numAIR1R1.on("value", function(snapshot) {
    document.querySelector("#AirOne2R1 >  input").checked = snapshot.val();

});


var numAIR0R2 = dbFirebase.ref("room2/air");
var numAIR0R2s = numAIR0R2.on("value", function(snapshot) {
    document.querySelector("#AirOneR2 >  input").checked = snapshot.val();

});





var numAIR1R2 = dbFirebase.ref("room2/air1");
var numAIR1R2s = numAIR1R2.on("value", function(snapshot) {
    document.querySelector("#AirOne1R2 >  input").checked = snapshot.val();

});