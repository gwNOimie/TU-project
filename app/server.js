const express = require('express')
const app = express()

app.set('views', `${__dirname}/views`);
app.set('view engine', 'twig');

// This section is optional and can be used to configure twig.
app.set('twig options', {
  strict_variables: false
});

app.listen(3000, () => console.log('Listening on port 3000!'))