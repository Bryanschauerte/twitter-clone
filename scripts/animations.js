$(document).ready(function(){

  $('#postable').hide();
  $('tweet-actions').hide();

  $('#tweet-content').mouseover(function(){
    $(this).find('textarea').css('height', '5em');
    $(this).find('#char-count').css({'visibility': "visible"});
    $(this).find('#tweet-controls').css({'visibility': "visible"});

})



  $('#tweet-content').mouseleave(function(){

  $(this).find('textarea').css('height', '2.5em');
  $(this).find('#char-count').css({'visibility': "hidden"});
  $(this).find('#tweet-controls').css({'visibility': "hidden"});


  })


$('.tweet-compose').keydown(function(){
  var boxInputLength = $('.tweet-compose').val().length;
  console.log(boxInputLength);
  $('#char-count').text(140-boxInputLength);
  var number = $('#char-count').text();
  console.log(number);
  if(number < 11 ){
    $('#char-count').css({'color': 'red'});
  }
  if(number < 1){
    $('#tweet-submit').attr("disabled", "disabled");
  }
if (number > 0){
  $('#tweet-submit').removeAttr("disabled");
}
})


$('#tweet-submit').on('click', function(event){
  event.preventDefault();
  var text =  $('.tweet-compose').val();
  var targetText = $('#new-tweet-text');

  $('.tweet-compose').val('');
  $(targetText).text(text);

  $('.tweet-compose').val('');
  var tweetClone = $('#postable').clone();

  $('#stream').prepend(tweetClone);

  $(tweetClone).find('.tweet-actions').hide();

  $(tweetClone).show();

})



$('.tweet').mouseover(function(){

  $(this).find('.tweet-actions').show();

})

$('.tweet').mouseleave(function(){

  $(this).find('.tweet-actions').hide();

})




}) //ending of document.ready
