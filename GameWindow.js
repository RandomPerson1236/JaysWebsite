function ShowAndHide() {
    var x = document.getElementById('gameWindow');
    var y = document.getElementById('errorMobile');
    if (x.style.display == 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }
    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
    x.style.display = 'none';
    y.style.display = 'block';
    } else {
    y.style.display = 'none';
    }
    }
    // Game Info Change
    $(document).ready(function(){ $('.obamaClickerGame').click(function(e){ 
        var description = document.getElementById("gameDescription");
        var title = document.getElementById("gameTitle");
        description.innerHTML = "Obama Clicker, click to earn Obama Coins, it's that simple!";
        document.getElementById('playGameId').action = "GamesUnity/ClickObama/ObamaClicker.html";
        title.innerHTML = "Obama Clicker";
    });  
    });