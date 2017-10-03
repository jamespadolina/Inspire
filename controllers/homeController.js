app.controller("homeController", function ($scope) {
    $(document).ready(function () {
  var quoteSource = [
    {
      "quote": "The last three or four reps is what makes the muscle grow. This area of pain divides the champion, from someone else who is not a champion",
      "by": "Arnold Schwarzenegger, seven-time Mr. Olympia"
    },
    {
      "quote": "In training, you listen to your body. In competition, you tell your body to shut up",
      "by": "Rich Froning Jr., four-time CrossFit Games champion" 
    },
    {
      "quote": "You shall gain, but you shall pay with sweat, blood, and vomit",
      "by": "Pavel Tsatsouline, chairman of StrongFirst and father of the modern Kettlebell movement" 
    },
    {
      "quote": "There's no seceret formula. I lift heavy, work hard, and aim to be the best",
      "by": "Ronnie Coleman, eight-time Mr. Olympia" 
    },
    {
      "quote": "If something stands between you and your success, move it. Never be denied",
      "by": "Dwayne 'The rock' Johnson" 
    },
    {
      "quote": "Success is usually the culminatioin of controlling failure",
      "by": "Sylvester Stallone" 
    },
    {
      "quote": "Dont be afraid of failure. This is the way to succeed",
      "by": "Lebron James, two-time NBA Championship winner" 
    },
    {
      "quote": "I will sacrifice whatever is necessary to be the best",
      "by": "J.J. Watt, defensive end for the Houstan Texans" 
    },
    {
      "quote": "Most people give up right before the big break comes= don't let that person be you",
      "by": "Michael Boyle, performance coach to the 2013 World Series Championship Red Sox" 
    },
    {
      "quote": "You're going to have to let it hurt. Let it suck. The harder you work, the better you will look. Your appearance isn't parallel to how heavy you lift, it's parallel to how hard you work.",
      "by": "Joe Manganiello, 100 fittest Men of All Time" 
    },
    {
      "quote": "You have to push past your perceived limits, push past that point you thought was as far as you can go.",
      "by": "Drew Brees, quarterback for the New Orleans Saints and 2010 SuperBowl MVP" 
    },
    {
      "quote": "If you ain't pissed off for greatness, that just means you're okay with being mediocre",
      "by": "Ray Lewis, Two-time Super Bowl Champion" 
    },
    {
      "quote": "You dream. You plain. You reach. There will be obstacles. There will be mistakes. But with hard work, with belief, with confidence and trust in yourself and those around you, there are no limits",
      "by": "Michael Phelps, 23-time Olympic Gold Medalist" 
    },
    {
      "quote": "When you have a clear vision of your goal, it’s easier to take the first step toward it",
      "by": "L.L. Cool J., rapper and actor" 
    },
    {
      "quote": "I was never a natural athlete, but I paid my dues in sweat and concentration, and took the time necessary to learn karate and became a world champion",
      "by": "Chuck Norris, Martial Artist and Actor" 
    },
    {
      "quote": "Your health account, your bank account, they’re the same thing. The more you put in, the more you can take out. Exercise is king and nutrition is queen. Together you have a kingdom.",
      "by": "Jack LaLanne, bodybuilder known as the “Godfather of Fitness" 
    },
    {
      "quote": "To keep winning, You have to keep Improving",
      "by": "Craig Alexander, 4-time Ironman World Champion" 
    },
    {
      "quote": "To keep winning, You have to keep Improving",
      "by": "Craig Alexander, 4-time Ironman World Champion" 
    },
    {
      "quote": "Some people want it to happen, some wish it would happen, others make it happen.",
      "by": "Michael Jordan, 6-Time NBA Championship winner" 
    },
    {
      "quote": "Some people want it to happen, some wish it would happen, others make it happen.",
      "by": "Michael Jordan, 6-Time NBA Championship winner" 
    },
    {
      "quote": "Know that if you set your mind to something, even if people are saying you can’t do it, you will achieve it.",
      "by": "David Beckham, Internationally renowned former soccer player" 
    },
    {
      "quote": "Some people want it to happen, some wish it would happen, others make it happen.",
      "by": "Michael Jordan, 6-Time NBA Championship winner" 
    },
    {
      "quote": "We must appreciate and never underestimate our own inner power.",
      "by": "Noah Galloway, 2014 Ultimate Men's Health Guy" 
    },
    {
      "quote": "Some people want it to happen, some wish it would happen, others make it happen.",
      "by": "Michael Jordan, 6-Time NBA Championship winner" 
    },
    {
      "quote": "SUCCESS BEGINS WITH THE SECOND LETTER",
      "by": "" 
    },
    {
      "quote": "The meaning of life is not simply to exist, to survive but to move ahead, to go up, to achieve, to conquer",
      "by": "Arnold Schwarzenegger" 
    },
    {
      "quote": "Success isnt given. Its earned. In the kitchen, ALL Day. With BLOOD, SWEAT< and the occasional TEAR",
      "by": "Rich Froning" 
    },
    {
      "quote": "Everybody want to be a bodybuilder. But dont nobody want to lift no heavy ass weights.",
      "by": "Ronnie Coleman" 
    },
    {
      "quote": "Its not the size of the dog in the fight , it's the size of the fight in the dog",
      "by": "Rich Franklin" 
    },
    {
      "quote": "We don't stop exercising because we grow old, We grow old because we stop excercising",
      "by": "Mike Banks" 
    },
    {
      "quote": "If you ever lack the motivation to train then think what happens to your mind & body when you dont",
      "by": "Shifu Yan Lei, 34th Generation Master from the Shaolin Temple in China" 
    },
    {
      "quote": "Just get things done, instead of TALKING about getting them done",
      "by": "Henry Rollins" 
    },
    {
      "quote": "The first step in achieving your goal, is to take a moment to respect your goal. Know what it means to achieve it!",
      "by": "Dwayne 'The rock' Johnson" 
    },
    {
      "quote": "You can't climb the ladder of success with your hands in your pockets",
      "by": "Arnold Schwarzenegger" 
    },
    {
      "quote": "A lof of times people look at the negative side of what they feel they can't do. Always look on the positive side what you can do",
      "by": "Chuch Norris" 
    },
    {
      "quote": "Your struggles develop your strengths. When you go through hardships and decide not to surrender, that is strength",
      "by": "Arnold Schwarzenegger" 
    },
    {
      "quote": "Remember this: Your body is your slave. It works for you.",
      "by": "Jack LaLanne" 
    },
    {
      "quote": "Don't say you can't. Say I presently struggle with.",
      "by": "Tony Horton" 
    },
    {
      "quote": "Believe you can, and you're half way there",
      "by": "Theodore Roosevelt" 
    },
    {
      "quote": "It's not whether you get knocked down. It's whether you get up",
      "by": "Vince Lombardi" 
    },
    {
      "quote": "It's not about how hard you hit: It's about how hard you can get hit, and keep moving forward. Its how much you can take, and keep moving forward. That's how winning is done",
      "by": "Rocky Balboa" 
    },
    {
      "quote": "Every champion was once a contender that refused to give up",
      "by": "Rocky Balboa" 
    },
    {
      "quote": "I am not the best. But I have the potential to be something GREAT",
      "by": "Anderson Silva" 
    },
    {
      "quote": "The fight is won or lost far away from the witnesses, behind the lines, in the gym, and out there on the raod",
      "by": "Muhammad Ali" 
    },
    {
      "quote": "I fear not the man who has practiced  10,000 kicks once, but i fear the man who has practiced one kick 10,000 times",
      "by": "Bruce Lee" 
    },
    {
      "quote": "I've failed over and over and over again in my life. And that is why I succeed",
      "by": "Michael Jordan" 
    },
    {
      "quote": "You miss 100 percent of the shots you don't take.",
      "by": "Wayne Gretzky" 
    },
    {
      "quote": "Motivation is what gets you started. Habit is what keeps you going",
      "by": "Jim Ryun" 
    },
    {
      "quote": "If you don't like the road you're walking, start paving another one.",
      "by": "Dolly Parton" 
    },
    {
      "quote": "Never give up on a dream just because of the time it will take to accomplish it. The time will pass anyway",
      "by": "Earl Nightingale" 
    },
    {
      "quote": "Today I will do what other won't, so tomorrow I can accomplish what others cant.",
      "by": "Jerry Rice" 
    },
    {
      "quote": "Don't Count the days, make the days count",
      "by": "Muhammad Ali" 
    },
    {
      "quote": "It's Hard to beat a person, who never gives up",
      "by": "Babe Ruth" 
    },
    {
      "quote": "Do or Do Not there is no try",
      "by": "Yoda" 
    },
    {
      "quote": "I command you to GROW",
      "by": "C.T. Fletcher" 
    },
    {
      "quote": "I'm going to succeed because I'm crazy enough to think it",
      "by": "C.T. Fletcher" 
    },
    {
      "quote": "If you can control your mind, you can control your muscles. Command them to grow!",
      "by": "C.T. Fletcher" 
    },

  ];


  $('#quoteButton').click(function (evt) {
    //define the containers of the info we target
    var quote = $('#quoteContainer p').text();
    var quoteGenius = $('#quoteGenius').text();
    //prevent browser's default action
    evt.preventDefault();
    //getting a new random number to attach to a quote and setting a limit
    var sourceLength = quoteSource.length;
    var randomNumber = Math.floor(Math.random() * sourceLength);
    //set a new quote
    for (i = 0; i <= sourceLength; i += 1) {
      var newQuoteText = quoteSource[randomNumber].quote;
      var newQuoteGenius = quoteSource[randomNumber].by;
      //console.log(newQuoteText,newQuoteGenius);
      var timeAnimation = 500;
      var quoteContainer = $('#quoteContainer');
      //fade out animation with callback
      quoteContainer.fadeOut(timeAnimation, function () {
        quoteContainer.html('');
        quoteContainer.append('<p>' + newQuoteText + '</p>' + '<p id="quoteGenius">' + '-								' + newQuoteGenius + '</p>');

        //fadein animation.
        quoteContainer.fadeIn(timeAnimation);
      });

      break;
    };//end for loop

  });//end quoteButton function


});//end document ready



})

