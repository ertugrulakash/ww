var cmd = require('node-cmd');
var mainjson = process.env;


console.log('i am pop.js');
console.log('git update command will be executed in 5 minutes'); 

setTimeout(function(url){
  cmd.get(
      `
          git remote add origin ${url}
          git fetch
          git checkout origin/master app.js
      `,
      function(err, data, stderr){
          if (!err) {
            cmd.run('refresh');  // Refresh project
            console.log("git updated with origin master");
          } else {
             console.log('error', err)
          }

      }
    );
}, 20000, mainjson.giturl);


