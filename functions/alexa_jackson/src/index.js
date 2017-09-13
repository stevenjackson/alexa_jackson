'use strict';
const Alexa = require('alexa-sdk');
const APP_ID = "amzn1.ask.skill.1eb99632-170a-4fde-8186-4c551d2d30dd";
const SKILL_NAME = "jackson";

const stopMessage = "See you later, aligator";
const tellMeAboutReprompt = "Say tell me about Steven"

const STEVEN_FACTS = [
  "Steven wants to be a xeno zoo biologist when he grows up",
  "Steven's birthday is September 2nd",
  "Steven was born in Houston, Texas",
  "Steven is the tallest 2nd grader at A von East",
  "Steven loves to eat pizza",
  "Steven is a Lego Master Builder"
]

const ZACK_FACTS = [
  "Zack weighs 30 pounds",
  "Zack's birthday is September 18th",
  "Zack was born in Cleveland, Ohio",
  "Zack loves to eat cheese",
  "Zack knows what the fox says and has Gangham Style",
  "Zack sits down to put on his shoes",
  "Zack likes to dance"
]

const pick = function(list) {
  let index = Math.floor(Math.random() * list.length);
  return list[index];
}

const tellMeAbout = function(name) {
  let facts = []
  if(name == "Zachary" || name == "Zack") {
    facts =  ZACK_FACTS;
  } else if(name == "Steven") {
    facts = STEVEN_FACTS;
  } else {
    facts = pick([STEVEN_FACTS, ZACK_FACTS])
  }
  return pick(facts)
}


const handlers = {
  'LaunchRequest': function() {
    this.emit(':ask', "Would you like to hear about Steven or Zack?", tellMeAboutReprompt);
  },
  'TellMeAbout': function() {
    console.log("Tell me about" + this.event.request.intent.slots.Name.value);
    this.emit(':ask', tellMeAbout(this.event.request.intent.slots.Name.value), tellMeAboutReprompt);
  },
  'AMAZON.CancelIntent': function () {
    this.emit(':tell', stopMessage);
  },
  'AMAZON.StopIntent': function () {
    this.emit(':tell', stopMessage);
  }
}

export default function(event, context) {
  var alexa = Alexa.handler(event, context);
  alexa.appId = APP_ID;
  alexa.registerHandlers(handlers);
  alexa.execute();
}
