import Controller from '@ember/controller';
import { match, not } from '@ember/object/computed';

export default Controller.extend({

  contactHeader: 'Contact',
  successMessage: '',
  emailAddress : '',
  text: '',

  isValid: match('emailAddress', /^.+@.+\..+$/),
  isDisabled: not('isValid'),

  actions: {
  sendMessage() {
    alert(`Sending of your message is in progress: ${this.get('emailAddress', 'text')}`);
    this.set('successMessage', `Thank you! We'll be in touch soon': ${this.get('emailAddress', 'text')}`);
    this.set('emailAddress', '');
    this.set('text', '');
    }
  }
});
