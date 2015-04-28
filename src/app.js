var UI = require('ui'),
    ajax = require('ajax');


function parseData(data){
  var output = [];
  
  for(var i = 0; i < 11; i++){
    
    output.push({
      title: data.title
    });
    
  }
  
  return output;
}

ajax(
  {
    url: "http://api.devnews.today",
    type: 'json'
  },
  
  function(data) {
    var menuItems = parseData(data);
    
    var main = new UI.Menu({
        sections: [{
          items: menuItems
        }]
    });
    
     main.show();
  },
  
  function(error) {
    console.log(error);
  }
);
