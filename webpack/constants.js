/* @flow */
'use strict';

import path from 'path';

export const ABSOLUTE_BASE: string = path.normalize(path.join(__dirname, '..'));

const constants: Object = Object.freeze({
    BUILD: path.join(ABSOLUTE_BASE, 'build/'),
    SRC: path.join(ABSOLUTE_BASE, 'src/'),
    PORT: 8081,
    INDEX: path.join(ABSOLUTE_BASE, 'src/index.html'),
    TREZOR_CONNECT_ROOT: path.join(ABSOLUTE_BASE, '../trezor.js2/')
});

export const TREZOR_CONNECT: string = path.join(constants.TREZOR_CONNECT_ROOT, 'src/js/entrypoints/connect');
export const TREZOR_LIBRARY: string = path.join(constants.TREZOR_CONNECT_ROOT, 'src/js/entrypoints/library');
export const TREZOR_IFRAME: string = path.join(constants.TREZOR_CONNECT_ROOT, 'src/js/iframe/iframe.js');
export const TREZOR_POPUP: string = path.join(constants.TREZOR_CONNECT_ROOT, 'src/js/popup/popup.js');
export const TREZOR_CONNECT_FILES: string = path.join(constants.TREZOR_CONNECT_ROOT, 'src/html/');
export const BUILD: string = constants.BUILD;
export const SRC: string = constants.SRC;
export const PORT: string = constants.PORT;
export const INDEX: string = constants.INDEX;

export default constants;