import _ from 'lodash';

export default function isArrayEqual(x, y) {
  return _(x).differenceWith(y, _.isEqual).isEmpty();
}
