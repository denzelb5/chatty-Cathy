import 'bootstrap';
import '../styles/main.scss';
import m from './components/messages/messages';
import i from './components/input-box/input';
import dark from './components/darkMode/darkMode';

const init = () => {
  m.printMessages();
  dark.enableDarkMode();
  i.printNewMessage();
};

init();
