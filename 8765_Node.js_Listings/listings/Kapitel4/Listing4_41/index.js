require('./my-module'); // Ausgabe: myModule called
delete require.cache[require.resolve('./my-module')];
require('./my-module'); // Ausgabe: myModule called
