(() => {
    'use strict';

    const Nanocomponent = require('nanocomponent');
    const nanooverlay = require('..');
    const test = require('tape');

    test('create a new overlay element', (t) => {
        let overlay = new nanooverlay();
        t.ok(overlay instanceof Nanocomponent, 'created a Nanocomponent element');
        t.end();
    });

    test('add to dom', (t) => {
        let overlay = new nanooverlay();
        const overlayContent = document.createElement('div');
        overlayContent.innerHTML = 'overlay content';

        // append to DOM
        const $element = overlay.render({
            content: overlayContent,
            close  : function () {
                document.body.removeChild($element);
            }
        });

        document.body.appendChild($element);
        t.ok($element.parentNode === document.body, 'is attached to body');
        t.end();
    });

})();
