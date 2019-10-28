import $ from 'jquery';
import d from '../../helpers/data';
import m from '../messages/messages';

const printNewMessage = () => {
  $('#input-box').on('keydown', (e) => {
    const newMessage = $('#input-box').val().toLowerCase();
    const messageArray = d.getMessages();
    const newData = {};
    if (e.keyCode === 13) {
      newData.message = newMessage;
      messageArray.push(newData);
    }
    m.printMessages(messageArray);
  });
};

export default { printNewMessage };
