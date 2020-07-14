

//background change
function backgroundChange(){
  //random number genrator
  var random = Math.round(Math.random()*2) + 1;

  //if statement for chossing theme
  if( random==0){
    document.querySelector(".hero").style.backgroundImage = "url('images/background-5.jpg')";
    alert("This page has randomly genrated embeded themes click the button to change theme if it dosent changes do it again and again it will change eventually")

  }

  else if( random==1){
    document.querySelector(".hero").style.backgroundImage = "url('images/background-2.jpg')";
    document.querySelector(".quotes").style.backgroundImage = "url('images/mj.jpg')";
    document.querySelector("#quote").innerHTML = " Some people want it to happen, some wish it would happen, others make it happen.";
    document.querySelector("#quoteName").innerHTML = "-Michael Jordan";
    document.querySelector(".about").style.backgroundColor = "black";
    document.querySelector(".firstH1").style.color = "white";
    document.querySelector(".progress-bar").style.backgroundColor = "green";
    document.querySelector(".firstP").style.color = "white";
    document.querySelector(".services").style.backgroundColor = "white";
    document.querySelector(".secondH1").style.color = "black";
    document.querySelector(".learning").style.color = "orange";
    document.querySelector(".Training").style.color = "orange";
    document.querySelector(".blog").style.color = "orange";
    document.querySelector(".learningH3").style.color = "black";
    document.querySelector(".TrainingH3").style.color = "black";
    document.querySelector(".blogH3").style.color = "black";
    document.querySelector(".projects").style.backgroundColor = "black";
    document.querySelector("#my-project").style.color = "white";
    document.querySelector("#my-projects").style.color = "white";
    document.querySelector("#see-more").style.color = "white";
    document.querySelector("#dribble").style.color = "white";
    document.querySelector("#achieve").style.color = "white";
    document.querySelector("#github").style.color = "white";
    document.querySelector(".blogs").style.backgroundColor = "black";
  }

  else if( random==2){
    document.querySelector(".hero").style.backgroundImage = "url('images/background-3.png')";
    document.querySelector(".quotes").style.backgroundImage = "url('images/mc2.png')";
    document.querySelector("#quote").innerHTML = " Imagination is more important than knowledge.";
    document.querySelector("#quoteName").innerHTML = "-Albert Einstein";
    document.querySelector(".about").style.backgroundColor = "#222831";
    document.querySelector(".firstH1").style.color = "#eeeeee";
    document.querySelector(".progress-bar").style.backgroundColor = "#32e0c4";
    document.querySelector(".firstP").style.color = "#eeeeee";
    document.querySelector(".services").style.backgroundColor = "#393e46";
    document.querySelector(".secondH1").style.color = "#eeeeee";
    document.querySelector(".learning").style.color = "orange";
    document.querySelector(".Training").style.color = "orange";
    document.querySelector(".blog").style.color = "orange";
    document.querySelector(".learningH3").style.color = "#eeeeee";
    document.querySelector(".TrainingH3").style.color = "#eeeeee";
    document.querySelector(".blogH3").style.color = "#eeeeee";
    document.querySelector("#blogH1").style.color = "#eeeeee";
    document.querySelector(".projects").style.backgroundColor = "#222831";
    document.querySelector("#my-project").style.color = "white";
     document.querySelector("#my-projects").style.color = "white";
    document.querySelector("#see-more").style.color = "white";
    document.querySelector("#dribble").style.color = "white";
    document.querySelector("#achieve").style.color = "white";
    document.querySelector("#github").style.color = "white";
    document.querySelector(".blogs").style.backgroundColor = "#393e46";
  }

  else if( random==3){
    document.querySelector(".hero").style.backgroundImage = "url('images/background-4.jpg')";
    document.querySelector(".quotes").style.backgroundImage = "url('images/steve.jpg')";
    document.querySelector("#quote").innerHTML = "Innovation distinguishes between a leader and a follower.";
    document.querySelector("#quoteName").innerHTML = "-Steve Jobs";
    document.querySelector(".about").style.backgroundColor = "#204051";
    document.querySelector(".firstH1").style.color = "#e7dfd5";
    document.querySelector(".progress-bar").style.backgroundColor = "#6a197d";
    document.querySelector(".firstP").style.color = "#e7dfd5";
    document.querySelector(".services").style.backgroundColor = "#3b6978";
    document.querySelector(".secondH1").style.color = "#e7dfd5";
    document.querySelector(".learning").style.color = "orange";
    document.querySelector(".Training").style.color = "orange";
    document.querySelector(".blog").style.color = "orange";
    document.querySelector(".learningH3").style.color = "#e7dfd5";
    document.querySelector(".TrainingH3").style.color = "#e7dfd5";
    document.querySelector(".blogH3").style.color = "#e7dfd5";
    document.querySelector("#blogH1").style.color = "#e7dfd5";
    document.querySelector(".projects").style.backgroundColor = "#84a9ac";
    document.querySelector("#my-project").style.color = "white";
     document.querySelector("#my-projects").style.color = "white";
    document.querySelector("#see-more").style.color = "white";
    document.querySelector("#dribble").style.color = "white";
    document.querySelector("#achieve").style.color = "white";
    document.querySelector("#github").style.color = "white";
    document.querySelector(".blogs").style.backgroundColor = "#393e46";
  }
}

//Onscroll animation //
var timer = 0;
function recheck() {
    var window_top = $(this).scrollTop();
    var window_height = $(this).height();
    var view_port_s = window_top;
    var view_port_e = window_top + window_height;
    
    if ( timer ) {
      clearTimeout( timer );
    }
    
    $('.fly').each(function(){
      var block = $(this);
      var block_top = block.offset().top;
      var block_height = block.height();
      
      if ( block_top < view_port_e ) {
        timer = setTimeout(function(){
          block.addClass('show-block');
        },100);       
      } else {
        timer = setTimeout(function(){
          block.removeClass('show-block');
        },100);          
      }
    });
}

$(function(){
  $(window).scroll(function(){
    recheck();
  });
  
  $(window).resize(function(){
     recheck();   
  });
  
  recheck();
});

window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}