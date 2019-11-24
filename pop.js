var cmd = require('node-cmd');

console.log('i am pop.js');

cmd.get(
    `
        git remote add origin ${mainjson.giturl}
        git fetch
        git checkout origin/master app.js
    `,
    function(err, data, stderr){
        if (!err) {
          //cmd.run('refresh');  // Refresh project
          console.log("git updated with origin master");
        } else {
           console.log('error', err)
        }

    }
  );
 
