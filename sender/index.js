(function(){
    var milkcocoa = new MilkCocoa('woodihoeu8hb.mlkcca.com');
    var ds = milkcocoa.dataStore("rpgmv");
    var sendInput = document.getElementById("send");
    var switchInput = document.getElementById("switch");

    ds.on("send", function(data){
        console.log(data);
    });

    sendInput.addEventListener("keypress", function(e){
        if(e.keyCode == 13) {
            ds.send({message: sendInput.value});
        }
    });
    switchInput.addEventListener("click", function(e){
            ds.send({switch: {id: 10, value: 1}});
    });
}());
