import React from 'react';
import {ContactForm} from "./ContactForm";
import {ContactList} from "./ContactList";

export const App = () => (
  <div>
    <h1>Meteor Wallet - Galaxy Cloud2</h1>
    <ContactForm />
    <ContactList />
  </div>
);
