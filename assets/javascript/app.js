var panel = $("#quiz-area");


var questions = [{
  question: "Who is the King of the Gungans?",
  answers: ["JarJar", "Anakin", "Boss Nass", "Obi-Wan Kenobi"],
  correctAnswer: "Boss Nass"
}, {
  question: "Which character does NOT enter the Naboo Royal Palace?",
  answers: ["Darth Mual", "Nute Gunray", "General Tarpals", "Captain Panaka"],
  correctAnswer: "General Tarpals"
}, {
  question: "What was Qui-Gon's dying wish? ",
  answers: ["That Anakin be trained", "That Obi-Wan Avenges his death", "That Anakin faces the Jedi trials", "To bury him on Naboo"],
  correctAnswer: "That Anakin be trained"
}, {
  question: "How many blades does Darth Maul's lightsaber have?",
  answers: ["1", "2", "10", "69"],
  correctAnswer: "2"
}, {
  question: "What is the name of the junkyard owner that owns Anakin?",
  answers: ["Waldo", "Wilfred", "Winnifred", "Watto"],
  correctAnswer: "Watto"
}, {
  question: "What's a good trick?",
  answers: ["Spinning", "Twirling", "Squatting", "Flipping"],
  correctAnswer: "Spinning"
}, {
  question: "Who was Anakin's podracing rival?",
  answers: ["Sebulba", "Ben Quadinaros", "Ody Mandrell", "Ratts Tyerell"],
  correctAnswer: "Sebulba"
}, {
  question: "What is the name of the Protocol Droid that first greets Obi-Wan and Qui-Gon?",
  answers: ["TC-14", "C3-PO", "TC-22", "R2-D2"],
  correctAnswer: "TC-14"
}, {
  question: "What is the first word of the opening crawl?",
  answers: ["War", "Darth", "Shadow", "Turmoil"],
  correctAnswer: "Turmoil"
}];

var timer;

var game = {

  correct: 0,
  incorrect: 0,
  counter: 120,

  countdown: function() {
    game.counter--;
    $("#counter-number").html(game.counter);
    if (game.counter === 0) {
      console.log("TIME UP");
      game.done();
    }
  },

  start: function() {
    timer = setInterval(game.countdown, 1000);

    $("#sub-wrapper").prepend("<h2>Time Remaining: <span id='counter-number'>120</span> Seconds</h2>");

    $("#start").remove();

    for (var i = 0; i < questions.length; i++) {
      panel.append("<h2>" + questions[i].question + "</h2>");
      for (var j = 0; j < questions[i].answers.length; j++) {
        panel.append("<input type='radio' name='question-" + i +
        "' value='" + questions[i].answers[j] + "''>" + questions[i].answers[j]);
      }
    }

    panel.append("<button id='done'>Done</button>");
  },

  done: function() {

    $.each($("input[name='question-0']:checked"), function() {
      if ($(this).val() === questions[0].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-1']:checked"), function() {
      if ($(this).val() === questions[1].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-2']:checked"), function() {
      if ($(this).val() === questions[2].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-3']:checked"), function() {
      if ($(this).val() === questions[3].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-4']:checked"), function() {
      if ($(this).val() === questions[4].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-5']:checked"), function() {
      if ($(this).val() === questions[5].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-6']:checked"), function() {
      if ($(this).val() === questions[6].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-7']:checked"), function() {
      if ($(this).val() === questions[7].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    this.result();

  },

  result: function() {

    clearInterval(timer);

    $("#sub-wrapper h2").remove();

    panel.html("<h2>All Done!</h2>");
    panel.append("<h3>Correct Answers: " + this.correct + "</h3>");
    panel.append("<h3>Incorrect Answers: " + this.incorrect + "</h3>");
    panel.append("<h3>Unanswered: " + (questions.length - (this.incorrect + this.correct)) + "</h3>");
  }
};


$(document).on("click", "#start", function() {
  game.start();
});


$(document).on("click", "#done", function() {
  game.done();
});