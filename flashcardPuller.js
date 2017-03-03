const request = require('request');
const fs = require('fs');
const cheerio = require('cheerio');

let elements = JSON.parse(fs.readFileSync('./html5_elements.json'));

function readPages(elements, callback) {
  let results = [];
  for (let i =0; i<elements.length; i++) {
    request(elements[i].href, function(err, res, body) {
      if (err) {
        return err;
      }
      $ = cheerio.load(body);
      name = $('.element-name a').text();
      description = $('.element-description p').text();
      element = {
        name: name,
        description: description
      }
      results.push(element);
      if (results.length === elements.length) {
        results = trimExcess(results);
        callback(JSON.stringify(results));
      }
    });
  }
}

function writeToFile(results) {
  fs.writeFile('./definitions.json', results, function(err) {
    if(err) {
      console.log(err);
    }
    else
    console.log('done');
  });
}

function trimExcess(results) {
  for (let i=0; i<results.length; i++) {
    results[i].name = results[i].name.replace(/[#^\s\n]/g, '');
  }
  return results;
}

readPages(elements, writeToFile);

/*
async call inside for loop
function func(urls_array, callback){ // The "callback" will be called when all results have returned.
  var results = []; // Array to store the results of each $.get
  for(var i=0;i<urls_array.length;i++){ // Loop through each url
    $.get(urls_array[i], function(x){ // get the data at the url
      results.push(x); // store the results of this get function
      if(results.length == urls_array.length){ // If all urls have returned
        callback(results); // execute the callback function letting it know that you have finished
      }
    });
  }
}
*/
