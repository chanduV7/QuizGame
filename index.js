
var url = "https://opentdb.com/api.php?amount=50&category=11&difficulty=easy&type=multiple";


var count=0;
var answers=[];
for(var i=0;i<5;i++){

    fetch(url).then(resultin=>resultin.json()).then(resultout=>{
        console.log(resultout);
        console.log(resultout.results.length)
        randomgeneratedquestion = Math.floor(Math.random()*resultout.results.length);
        var res = resultout.results[randomgeneratedquestion];
        console.log(res);
        answers.unshift(res.correct_answer);
        console.log( "answers:"+answers)
        var[a,b,c]=res.incorrect_answers;
        var d= res.correct_answer
        console.log(a,b,c,d);

        var dynamic =`
                        <div> ${res.question}</div>
                          <div>
                            <div>
                                <input id="option" type="radio" name="radio${count}"> 
                                <label id="ans" > ${a}</label>
                            </div>
                            <div>
                                 <input id="option" type="radio" name="radio${count}"> 
                                 <label id="ans" > ${b}</label>
                            </div>
                            <div> 
                                 <input id="option" type="radio" name="radio${count}">
                                 <label id="ans"> ${c}</label>
                            </div>
                            <div>
                                 <input id="option" type="radio" name="radio${count}">
                                 <label id="ans">${d}</label>
                            </div>
                           </div>
                           `;
        count++;
        document.getElementById("content").insertAdjacentHTML("afterbegin",dynamic) ;
    });
}


var result=0;
var ans=0;

var btn = document.getElementById("btn");

btn.addEventListener("click",()=>{

    for(var i=0;i<document.querySelectorAll("#option").length;i++)
    {
        var finalresult = document.querySelectorAll("#option")[i].checked;
        if(finalresult==true){
            if(document.querySelectorAll(".ans").innerHTML==answers[ans]){
                console.log("CORRECT ANSWER");
                result++;
            }
            else{
                console.log("INCORRECT ANSWER");
            }
        }
        ans++
    }
    document.getElementById("score").innerHTML= `${result}/5`;
    document.getElementById("content").style.opacity=0;

})