import $ from 'jquery';
import './darkMode.scss';

const lightMode = () => {
  $('body').css('backgroundColor', 'pink');
  $('.chat-output').css('backgroundColor', 'rgb(53, 206, 233)');
  $('#message-body').css('backgroundColor', 'white');
  $('.chat-output').css('color', 'rgb(244, 45, 138)');
  $('.chat-output').css('border', '1px solid rgb(244, 45, 138)');
  $('#chat-navbar').css('backgroundColor', '#e3f2fd');
  $('#input-box').css('backgroundColor', 'white');
  $('#input-box').css('color', 'black');
};

const darkMode = () => {
  $('#message-body').css('backgroundColor', 'orange');
  $('body').css('backgroundColor', 'black');
  $('.chat-output').css('backgroundColor', 'black');
  $('.chat-output').css('color', 'orange');
  $('.chat-output').css('border', '1px solid red');
  $('#chat-navbar').css('backgroundColor', 'orange');
  $('#input-box').css('backgroundColor', 'black');
  $('#input-box').css('color', 'orange');
};

const enableDarkMode = () => {
  $('#dark-mode').click(() => {
    if ($('#dark-mode').is(':checked')) {
      darkMode();
    } else {
      lightMode();
    }
  });
};

export default { enableDarkMode };
