/*
 * NOTE: This file generates fake tweet data, and is not intended to be part of your implementation.
 * You can safely leave this file untouched, and confine your changes to index.html.
 */

// set up data structures
window.streams = {};
streams.input=[];
streams.home = [];
streams.users = {};
streams.users.ingikim = [];
streams.users.yannheo = [];
streams.users.hoyoungjung = [];
streams.users.julie = [];

window.users = Object.keys(streams.users);

//console.log(new Date());
//console.log(streams)
//console.log(streams.users)
//console.log(window.users)
// utility function for adding tweets to our data structures

var addTweet = function(newTweet){  //6
  var username = newTweet.user;
  streams.users[username].push(newTweet);
  streams.home.push(newTweet);
  
};

// utility function
var randomElement = function(array){  //3 //5
  var randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
};

// random tweet generator
var opening = ['just', '', '', '', '', 'ask me how i', 'completely', 'nearly', 'productively', 'efficiently', 'last night i', 'the president', 'that wizard', 'a ninja', 'a seedy old man'];
var verbs = ['drank', 'drunk', 'deployed', 'got', 'developed', 'built', 'invented', 'experienced', 'fought off', 'hardened', 'enjoyed', 'developed', 'consumed', 'debunked', 'drugged', 'doped', 'made', 'wrote', 'saw'];
var objects = ['my', 'your', 'the', 'a', 'my', 'an entire', 'this', 'that', 'the', 'the big', 'a new form of'];
var nouns = ['cat', 'koolaid', 'system', 'city', 'worm', 'cloud', 'potato', 'money', 'way of life', 'belief system', 'security system', 'bad decision', 'future', 'life', 'pony', 'mind'];
var tags = ['#techlife', '#burningman', '#sf', 'but only i know how', 'for real', '#sxsw', '#ballin', '#omg', '#yolo', '#magic', '', '', '', ''];

var randomMessage = function(){ //4
  return [randomElement(opening), randomElement(verbs), randomElement(objects), randomElement(nouns), randomElement(tags)].join(' ');
};

// generate random tweets on a random schedule
var generateRandomTweet = function(){ //2
  var tweet = {};
  //console.log(users);
  tweet.user = randomElement(users);  // users가 뭔지?? window.users
  tweet.message = randomMessage();
  tweet.created_at = new Date();      // Date 없음 정의해야할듯.
  addTweet(tweet);
};

for(var i = 0; i < 10; i++){    // 1
  generateRandomTweet();
}

var scheduleNextTweet = function(){ 
  
  generateRandomTweet();
  setTimeout(function(){
//    streams.home=[]  
   // console.log(streams.home)
    scheduleNextTweet()}, Math.random() * 15000);
};
scheduleNextTweet();

// utility function for letting students add "write a tweet" functionality
// (note: not used by the rest of this file.)
var writeTweet = function(message,visitor){

  console.log(users,!users.includes(visitor))
  if(!users.includes(visitor)){
    throw new Error('set the global visitor property!');
  }
  var tweet = {};
  tweet.user = visitor;
  tweet.message = message;
  tweet.created_at = new Date();
  addTweet(tweet);
};
