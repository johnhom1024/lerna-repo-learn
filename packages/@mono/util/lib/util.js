'use strict';

import { concat } from '@mm/array-tool'

module.exports = util;

function util(...args) {
    return concat(..args);
}
