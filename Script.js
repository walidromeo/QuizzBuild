// This Quizz Is Powred By Walid

// Setup Varible And Const
const Question = document.getElementById("question");
const ScooreDom = document.getElementById('answer-Score')
// Transform the Class To Array For Using Later
const Choice = Array.from(document.getElementsByClassName("choice"));
let Questions=[{
    question:"Whats in Capital Of Morocco",
    choice1:"Casablanca",
    choice2:"Rabat",
    choice3:"Salé",
    choice4:"Marrakech",
    answer:2},

    {
    question:"Whats in Capital Of Algeria",
    choice1:"Wahran",
    choice2:"Alger",
    choice3:"Annaba",
    choice4:"Tilmsane",
    answer:2},
    {
    question:"Whats in Capital Of Spain",
    choice1:"Bilbao",
    choice2:"Seville",
    choice3:"Barcelona",
    choice4:"Madrid",
    answer:4},  
                {
            question:"Whats in Capital Of France",
            choice1:"Paris",
            choice2:"Lyon",
            choice3:"Lile",
            choice4:"Dijon",
            answer:1},
            {
                question:"Whats in Capital Of Germany",
                choice1:"Frankfurt",
                choice2:"Dortmund",
                choice3:"Munich",
                choice4:"Berlin",
                answer:4},                 
                {
                    question:"Whats in Capital Of Anglette",
                    choice1:"Manchester",
                    choice2:"Liverpool",
                    choice3:"London",
                    choice4:"Leicester",
                    answer:3},
                    {
                        question:"Whats in Capital Of Colombia",
                        choice1:"Cali",
                        choice2:"Medellin",
                        choice3:"Braquilla",
                        choice4:"Bogota",
                        answer:4},
                        {
                            question:"Whats in Capital Of Egypt",
                            choice1:"Cairo",
                            choice2:"Alexandrie",
                            choice3:"Port-Said",
                            choice4:"Tanta",
                            answer:2},
                            {
                                question:"Whats in Capital Of Italy",
                                choice1:"Roma",
                                choice2:"Milan",
                                choice3:"Parma",
                                choice4:"Napoli",
                                answer:1},
                                {
                                    question:"Whats in Capital Of Sweden",
                                    choice1:"Goteborg",
                                    choice2:"Stockholm",
                                    choice3:"Malmo",
                                    choice4:"Uppsala",
                                    answer:2},
                                    {
                                        question:"Whats in Capital Of Netherland",
                                        choice1:"La Hay",
                                        choice2:"Rotterdam",
                                        choice3:"Amsterdam",
                                        choice4:"Utrecht",
                                        answer:3},
                                        {
                                            question:"Whats in Capital Of Usa",
                                            choice3:"New York",
                                            choice2:"Las Vegas",
                                            choice1:"Washington D.C",
                                            choice4:"Los Angeles",
                                            answer:4},
]
let CurrentQ={};
let AvaibleQ=[];
let Score = 0;
let CounterQ=0;
const MaxQ=6;
const ScoreQ=10;
let AcceptQ=true
/*
 Start Game :
        1- initalisation Score and Counter Question
        2- Affectation Object Question TO Empty Array In Order to Have A Avaible Questions
        3- Get a NextQuestion Function
*/
function StartGame()
{
    CounterQ=0;
    Score=0;
    AvaibleQ=[...Questions]
    NextQ();
}
/* 
    Next Question Function:
        1- Incrematation Counter Question
        2- Search A Index For a Random Question
        3- Get a CurrentQ (affectation a index that I Looked For To Empty Object CurrentQ )
        4- Print in Dom New Question Of Object
        5- Set Variable For Specify Choice  And Print Him To Dom (It's array Ussing A ForEach())
        6- Remove A Question Using
        7- transmit To Page

*/
function NextQ()
{
    if (AvaibleQ.length === 0 || CounterQ >= MaxQ )
    {
       return window.location.assign("/end.html")
    }
    // Incrematation Counter Question
        CounterQ=CounterQ+1;
        console.log(CounterQ)
    // Using Math.floor() For getting Natural Number And Math.Random() For Getting Random Number
        var IndexQ= Math.floor(Math.random()*AvaibleQ.length);
    // Affectation IndexQ To CurrentQ
        CurrentQ=AvaibleQ[IndexQ];
    // Print Current Question In Dom
        Question.innerHTML=CurrentQ.question;
    // Set Variable For Specify Choice  And Print Him To Dom (It's array Ussing A ForEach())
        Choice.forEach(function(Elements)
    {
        // Get attribute For Specify Each "Chaque" Choice In Game.Html
            const Number = Elements.getAttribute("data-value");
        // Print To Dom With Help Number For Specify Each Choice 
    //  CurrentQ["Choice+Number"] Because Of In Objects Question I Have Choice1 .... So Concate Choice With Number To Get Choice1...
            Elements.innerHTML = CurrentQ["choice"+Number]
        // Remove A CurentQ 
            AvaibleQ.splice(IndexQ,0)
        // Accapting Quetions Is True
            AcceptQ = true 
            const Question = document.getElementById("answer-question");
            Question.innerHTML = CounterQ+"/3";
    })
}
/* Whats Happens In The Click
    1-Using ForEach To Get Each Choice
    2- Using Event Click
    3- Make Some Condition To Check Answers
    4- Get Data Of Users
    5- Add Class To ChoiceUser
    6- Manupilate Class To Css
    7- Call Function SetTimeOut Make a Delay And After Call NextQ();
        7-1 Addtion And subtraction Score In each Condition(CheckChoice==CurrentQ.answer)   
*/
    //Using ForEach To Get Each Choice
     Choice.forEach(function(choice)
     {
         choice.addEventListener("click",function(ele)
         {
          
            // Save Data Of Users
                const ChoiceUsers = ele.target
                const CheckChoice = ChoiceUsers.getAttribute("data-value");
            // Check Answer 
                if (CheckChoice==CurrentQ.answer)
                    { 
                     // Add Class For Using In Css
                            ChoiceUsers.classList.add("Corr");
                     // Delay To Delete A Creat Class  After Call NextQ()
                            setTimeout(function()
                            {
                                ChoiceUsers.classList.remove("Corr");
                                NextQ();
                            },1000)
                            // If Always True For Addition Score
                                if (true)
                                {
                                    Score+=ScoreQ 
                                    ScooreDom.innerHTML=Score;
                                }
                    }
                            else 
                                {
                                // Add Class For Using In Css
                                        ChoiceUsers.classList.add("InCorr");
                                // Delay To Delete A Creat Class After Call NextQ()
                                        setTimeout(function()
                                        {
                                            ChoiceUsers.classList.remove("InCorr");
                                            NextQ();

                                        },1000) 
                                        // If Always True For Subtration Score
                                            if (true)
                                            {
                                                Score-=ScoreQ 
                                                ScooreDom.innerHTML=Score;
                                            } 
                                }
         })

     })

StartGame();
