player1_name = localStorage.getItem("player_1_name")
player2_name = localStorage.getItem("player_2_name")

player1_score = 0;
player2_score = 0;

document.getElementById("player1_name").innerHTML = player1_name+" : "
document.getElementById("player2_name").innerHTML = player2_name+" : "

document.getElementById("player1_score").innerHTML = player1_score
document.getElementById("player2_score").innerHTML = player2_score

document.getElementById("player_Question").innerHTML = "Question Turn "+ player1_name
document.getElementById("player_Answer").innerHTML = "Answer Turn "+ player2_name

function send(){
    get_word = document.getElementById("word").value
    word = get_word.toLowerCase()
    second_letter = word.charAt(1);
    middle_letter_position = Math.floor(word.length / 2)
    middle_letter = word.charAt(middle_letter_position);
    last_letter = word.charAt(word.length - 1)
    
    remove_Second_letter = word.replace (second_letter,"_")
    remove_middle_letter = remove_Second_letter.replace(middle_letter,"_")
    remove_last_letter = remove_middle_letter.replace(last_letter,"_")

    Question = "<h4 id = 'word_display'> Q.  " + remove_last_letter + "</h4>"
    Input_Box = "<br> Answer: <input type ='text' id = 'input_check_box'>"
    Check_Button = "<br> <br> <button class = 'btn btn-info' onclick = 'check()'> Check</button>"
    row = Question + Input_Box + Check_Button
    document.getElementById("output").innerHTML = row
    document.getElementById("word").value = ""
}

question_Turn = "player1"
answer_turn = "player2"

function check(){
    get_answer = document.getElementById("input_check_box").value
    answer = get_answer.toLowerCase()

    if(answer == word){
        if(answer_turn == "player1"){
            player1_score = player1_score+1
            document.getElementById("player1_score").innerHTML = player1_score
            

        }
        else{
            player2_score = player2_score+1
            document.getElementById("player2_score").innerHTML = player2_score
        }
    }
    if(question_Turn == "player1"){
        question_Turn = "player2"
        document.getElementById("player_Question").innerHTML = "Question Turn "+ player2_name
    }
    else{
        question_Turn = "player2"
        document.getElementById("player_Question").innerHTML = "Question Turn "+ player1_name
    }
    if(answer_turn == "player1"){
        answer_turn = "player2"
        document.getElementById("player_Answer").innerHTML = "Answer Turn "+ player2_name
    }
    else{
        answer_turn = "player1"
        document.getElementById("player_Answer").innerHTML = "Answer Turn "+ player1_name
    }
    document.getElementById("output").innerHTML = ""
}


