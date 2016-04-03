import Ractive from 'ractive';
import { init, parse } from 'rcu';
import { es6 } from 'rcu-builders';

init(Ractive);

function translate(load) {
  var definition = parse(load.source);
  return es6(definition, {
    preserveExtensions: true
  });
}

export { translate };