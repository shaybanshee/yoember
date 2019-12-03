import Controller from '@ember/controller';
import { match, not } from '@ember/object/computed';

export default Controller.extend({

  contactHeader: 'Contact',
  emailAddress : '',
  text: '',

  isValid: match('emailAddress', /^.+@.+\..+$/),
  isDisabled: not('isValid'),

  actions: {
  sendMessage() {
    alert(`Sending of your message is in progress: ${this.get('emailAddress')}`);
    this.set('responseMessage', `Thank you! We've just saved your email address: ${this.get('emailAddress')}`);
    this.set('emailAddress', '');
    }
  }
});
