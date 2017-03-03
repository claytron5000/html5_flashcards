function myObject(what){
  this.iAm = 'an object';
  this.whatIAm = function(language){
    alert('I am ' + this.iAm + ' of the ' + language + ' language.');
  }
}

var newObject = new myObject('an object');
newObject.whatIAm('Javascript');
