player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");
player1_score = 0;
player2_score = 0;
player_question = "player1";
player_answer = "player2"
document.getElementById("player1_name").innerHTML = player1_name + " : ";
document.getElementById("player2_name").innerHTML = player2_name + " : ";
document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;
document.getElementById("player_question").innerHTML = "Question turn " + player1_name;
document.getElementById("player_answer").innerHTML = "Answer turn " + player2_name;
function send(){
    get_word = document.getElementById("word").value;
    word = get_word.toLowerCase();
    console.log("Word in lower case"+ word);
    
    carAt1 = word.charAt(1);
    console.log(carAt1);

    length_by2 = Math.floor(word.length/2);
    carAt2 = word.charAt(length_by2);
    console.log(carAt2);

    length_minus_1 = word.length - 1;
    carAt3 = word.charAt(length_minus_1);
    console.log(carAt3);

    remove_charAt1 = word.replace(carAt1,"_");
    remove_charAt2 = remove_charAt1.replace(carAt2,"_");
    remove_charAt3 = remove_charAt2.replace(carAt3,"_");
    console.log(remove_charAt3);

    questionWord = "<h4 id='word_disply'>Q. "+ remove_charAt3+"</h4>";
    inputWord = "<br>Answer : <input type='text' id='input_check_box'>";
    checkButton = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    role = questionWord + inputWord + checkButton;
    document.getElementById("output").innerHTML = role;
    document.getElementById("word").value = "";
}
function check(){
    getAnswer = document.getElementById("input_check_box").value;
    answer = getAnswer.toLowerCase();
    console.log("Answer"+ answer);
    if (answer == word){
        if (player_answer == "player1"){
            player1_score +=1;
            document.getElementById("player1_score").innerHTML = player1_score;
        }
        else
        {
            player2_score +=1;
            document.getElementById("player2_score").innerHTML = player2_score;
        }
    }
    if (player_question == "player1"){
        player_question = "player2";
        document.getElementById("player_question").innerHTML = "Question turn "+ player2_name;
    }
    else{
        player_question = "player1";
        document.getElementById("player_question").innerHTML = "Question turn "+ player1_name;
    }
    if (player_answer == "player1"){
        player_answer = "player2";
        document.getElementById("player_answer").innerHTML = "Answer turn "+ player2_name;
    }
    else{
        player_answer = "player1";
        document.getElementById("player_answer").innerHTML = "Answer turn "+ player1_name;
    }
    document.getElementById("output").innerHTML = "";
}