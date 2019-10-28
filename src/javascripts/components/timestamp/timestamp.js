import $ from 'jquery';
import moment from 'moment';
import './timestamp.scss';

const getTime = () => {
  const time = moment().format('MMMM Do YYYY, LT');
  return $(`<p class="timestamp col-3">${time}</p>`).insertAfter('.chat-output');
};

export default { getTime };
