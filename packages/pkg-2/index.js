const { range } = require('lodash');
const pkg1 = require('pkg-1');
const { CONSTANTS } = require('common');

function pkg2() {
  pkg1();
  /* eslint-disable */
  console.log(`${CONSTANTS.HELLO} pkg-2`);
  console.log(range(0, 10));
  /* eslint-enable */
}

pkg2();
