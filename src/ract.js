import Ractive from "ractive"
import {init, parse} from "rcu"
import {es6} from "rcu-builders"

init(Ractive)

export function translate(load) {
  let definition = parse(load.source)
  return es6(definition, {
    preserveExtensions: true
  })
}
