import Controller from '@ember/controller';
import { match, not } from '@ember/object/computed';
import { gte } from '@ember/object/computed';
import { and } from '@ember/object/computed';
export default Controller.extend({

  contactHeader: 'Contact',

  emailAddress : '',
  message: '',

  isValidEmail: match('emailAddress', /^.+@.+\..+$/),
  isLongEnough: gte("message.length", 5),
  isValid: and('isValidEmail', 'isLongEnough'),
  isDisabled: not('isValid'),

  actions: {
  sendMessage() {
    var email = this.get('emailAddress');
    var message = this.get('message');

    alert('Sending of your message is in progress...');

    var responseMessage = 'To: ' + email + ', Message: ' + message;
    this.set('responseMessage', responseMessage);
    this.set('emailAddress', '');
    this.set('message', '');
    }
  }
});
