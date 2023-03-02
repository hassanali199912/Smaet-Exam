
var final_exam_data = JSON.parse(sessionStorage.getItem("final_exam_data"));
var arr = final_exam_data["quection_array"]
var user_answer_array= final_exam_data["user_answer"] ;
var quection_contaner = document.getElementById("quection-contaner");
var html_lang = document.getElementsByTagName('html');

var answers = [];
var correct_string = '';
var video_string = '';
if (html_lang[0].getAttribute("lang") == 'Ar') {
    answers = ["صح","خطاء"];
    correct_string = "الاجابة الصحيحة هي ";
    video_string = 'اذهب الي الدرس الان';
    }else{
        answers = ["true","false"];
        correct_string = "the correct answer is";
        video_string = 'go to lesson now';

    }

var final_score = document.getElementById("final_score");
var time_taken = document.getElementById("time_taken");
var div_box_buttons = document.getElementById("box_buttons");
var iframe_video = document.getElementById('iframe_video');

var box_buttons = "";

load_questions();
load_side_boxes();

function load_side_boxes() {
    arr.forEach((element,index) => {
        div_box_buttons.innerHTML += `<a href="#q-card-${index}" class="btn ">${index+1}</a>`;
    });
    box_buttons = document.querySelectorAll('#box_buttons a');
    arr.forEach((element,index)=>{
        if (element['coanswer'] == user_answer_array[index]) {
            box_buttons[index].style.background= "green"
        }else{
            box_buttons[index].style.background= "red"
        }
    });

}
function finshed_button() {
    window.location.href = (html_lang[0].getAttribute('lang') == 'Ar')?"final-result-exam-Ar.html":"final-result-exam-En.html" ;
}
function change_url(index) {
    iframe_video.setAttribute('src',``);
  iframe_video.setAttribute('src',`${arr[index]['url']}`);
}
function load_questions() {

    if (html_lang[0].getAttribute('lang') == 'Ar') {
        time_taken.innerHTML = final_exam_data["time_tacken_ar"];
    }else
    {
        time_taken.innerHTML = final_exam_data["time_tacken_en"];
    }
    final_score.innerHTML = final_exam_data['total_score']+" / "+arr.length;


    var card_string = "";
    quection_contaner.innerHTML = "";
    arr.forEach((element, index) => {
        var answer_is_correct = false;
        card_string = "";
        inputs_array = "";
        lable_array = "";
        card_string += `<div class="card my-2" id="q-card-${index}"><div class="col question my-3"><h2>${element["q"]}</h2></div><div class="col answers" id="answer_div">`;
        element["ans"].forEach((inside_element, inside_index) => {
            if (element["ans"].length == 4) {
                if (String.fromCharCode(97 + inside_index) == user_answer_array[index]) {
                    if (user_answer_array[index] == element['coanswer']) {
                        card_string += `<div><input type="radio" disabled checked = 'true' name="q-answers-${index}" id="q${index}-s${inside_index}" value="${String.fromCharCode(97 + inside_index)}"  aria-details ="multiple-question"><label for="q${index}-s${inside_index}" style = "color:green;">${inside_element}</label></div>`;
                        answer_is_correct = true;
                    }else{
                        card_string += `<div><input type="radio" disabled checked = 'true' name="q-answers-${index}" id="q${index}-s${inside_index}" value="${String.fromCharCode(97 + inside_index)}"  aria-details ="multiple-question"><label for="q${index}-s${inside_index}" style = "color:red;">${inside_element}</label></div>`;
                    }
                    
                } else {
                    card_string += `<div><input type="radio" disabled name="q-answers-${index}" id="q${index}-s${inside_index}" value="${String.fromCharCode(
                        97 + inside_index
                    )}"  aria-details ="multiple-question"><label for="q${index}-s${inside_index}">${inside_element}</label></div>`;
                }
            } else {
                if (String.fromCharCode(97 + inside_index) == user_answer_array[index]) {
                    if (user_answer_array[index] == element['coanswer']) {
                        card_string += `<div><input type="radio" checked = 'true'  disabled name="q-answers-${index}" id="q${index}-s${inside_index}" value="${String.fromCharCode(97 + inside_index)}" aria-details ="tf-question" > <label for="q${index}-s${inside_index}" style = "color:green;">${answers[inside_index]}</label></div>`;
                        answer_is_correct = true;
                    }else{
                    card_string += `<div><input type="radio" checked = 'true'  disabled name="q-answers-${index}" id="q${index}-s${inside_index}" value="${String.fromCharCode(97 + inside_index)}" aria-details ="tf-question" > <label for="q${index}-s${inside_index}" style = "color:red;">${answers[inside_index]}</label></div>`;
                }
                
                } else {

                    card_string += `<div><input type="radio" disabled name="q-answers-${index}" id="q${index}-s${inside_index}" value="${String.fromCharCode(
                        97 + inside_index
                    )}" aria-details ="tf-question"> <label for="q${index}-s${inside_index}">${answers[inside_index]}</label></div>`;
               
                }
            }
        });

        if (answer_is_correct) {
            card_string += `</div><div class="col px-4 answer d-flex"></div></div>`;
        } else {
            card_string += `</div><div class="col px-4 answer d-flex"><p>${correct_string}  (${element["coanswer"]}) <a class="watch_video" data-toggle="modal" onclick="change_url(${index})"  data-target="#myModal">${video_string}</a></p></div></div>`;
        }

     
        quection_contaner.innerHTML += card_string;
    });
}
