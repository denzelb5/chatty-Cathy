import utilities from '../../helpers/utilities';
import d from '../../helpers/data';
import './messages.scss';

const printMessages = () => {
  let domString = '';
  const messages = d.getMessages();
  messages.forEach((message) => {
    // domString += '<div class="message-box>';
    domString += `<div class="chat-output"><img src="${message.avatar}">${message.message}</div>`;
    // domString += '</div>';
  });
  utilities.printToDom(domString, 'message-body');
};

export default { printMessages };
