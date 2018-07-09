import Jasmine from 'jasmine';

let jasmine = new Jasmine();
// points to jasmine.json
jasmine.loadConfigFile('./spec/support/jasmine.json');
jasmine.execute();