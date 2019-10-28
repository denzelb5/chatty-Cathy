import 'bootstrap';
import '../styles/main.scss';
import m from './components/messages/messages';
import i from './components/input-box/input';

const init = () => {
  m.printMessages();
  i.printNewMessage();
};

init();
