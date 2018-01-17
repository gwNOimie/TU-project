const express = require('express')
const app = express()
const path = require('path')

app.set('views', `views`);
app.set('view engine', 'twig');

// This section is optional and can be used to configure twig.
app.set('twig options', {
  strict_variables: false
});

app.use(express.static(path.join(__dirname, '../public')));

app.get('/register', function(req, res){
    res.render('register')
})

app.listen(3000, () => console.log('Listening on port 3000!'))