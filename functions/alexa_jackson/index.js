'use strict';
const Alexa = require('alexa-sdk');
const APP_ID = "amzn1.ask.skill.1eb99632-170a-4fde-8186-4c551d2d30dd";
const SKILL_NAME = "jackson";

const stopMessage = function() {
  return "See you later, aligator";
}

const STEVEN_FACTS = [
  "Steven wants to be a xenozoobiologist when he grows up",
  "Steven's birthday is September 2nd",
  "Steven was born in Houston, TX",
  "Steven is the tallest 2nd grader at Avon East",
  "Steven loves to eat pizza"
]

const ZACK_FACTS = [
  "Zack weighs 26 pounds",
  "Zack's birthday is September 18th",
  "Zack was born in Cleveland, Ohio",
  "Zack loves to eat cheese",
  "Zack knows what the fox says and has Gangham Style"
]

const handlers = {
  'LaunchRequest': function() {
    this.emit(':tell', "Would you like to hear about Steven or Zack?");
  },
  'TellMeAbout': function(a, b, c) {
    console.log(a, b, c);
    this.emit(':tell', "Sure");
  },
  'AMAZON.CancelIntent': function () {
    this.emit(':tell', stopMessage());
  },
  'AMAZON.StopIntent': function () {
    this.emit(':tell', stopMessage());
  }
}

exports.handler = function(event, context) {
  var alexa = Alexa.handler(event, context);
  alexa.APP_ID = APP_ID;
  alexa.registerHandlers(handlers);
  alexa.execute();
}
