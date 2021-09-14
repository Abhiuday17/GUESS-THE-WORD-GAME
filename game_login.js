function addUser(){
    player_1_Name = document.getElementById("player1_name_input").value;
    player_2_Name = document.getElementById("player2_name_input").value;
    localStorage.setItem("player_1_name", player_1_Name);
    localStorage.setItem("player_2_name", player_2_Name);
    window.location = "game_page.html";
}