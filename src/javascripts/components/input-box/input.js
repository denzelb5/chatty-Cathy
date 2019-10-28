import $ from 'jquery';
import d from '../../helpers/data';
import m from '../messages/messages';

const printNewMessage = () => {
  $('#input-box').on('keydown', (e) => {
    const newMessage = $('#input-box').val().toLowerCase();
    const messageArray = d.getMessages();
    const newData = {};
    if (e.keyCode === 13 && $('#check1').is(':checked')) {
      newData.avatar = 'https://upload.wikimedia.org/wikipedia/commons/8/88/Avatar_TRYPKO.jpg';
      newData.message = newMessage;
      newData.id = $('#user1');
      messageArray.push(newData);
    } else if (e.keyCode === 13 && $('#check2').is(':checked')) {
      newData.avatar = 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQcKVrFa5_weBOxqvU6S45sRG17e18OOo37-Am7eaPF1OvZ8Gkt';
      newData.message = newMessage;
      newData.id = $('#user2');
      messageArray.push(newData);
    }
    m.printMessages(messageArray);
  });
};

export default { printNewMessage };
