let foo = 'foo';

const set = (text) => {
  foo = text;
}

const get = () => {
  return foo;
}

module.exports = {
  foo: foo,
  get: get,
  set: set
};