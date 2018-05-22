# nanooverlay

a small and simple overlay (widget) HTML Custom Element,
that works with DOM-diffing libarys like [Choo](https://github.com/choojs/choo) and is build with [Nanocomponent](https://github.com/choojs/nanocomponent).



### how to get

```shell
npm i nanooverlay
```

### parameters
```javascript
{
    content      : '<!-- content of the overlay -->',
    close        : () => { <-- function that is handling the closing of the overlay --> },
    contentCSS   : css`<-- modify the content element`,
    backgroundCSS: css`<-- modify the background css -->`
}
```


### how to use

#### with choo
```javascript
    var choo = require('choo');
    var html = require('nanohtml');
    var nanooverlay = require('nanooverlay');
    var Overlay = new nanooverlay();

    var app = choo()
    app.use((state, emitter) => {
        state.openOverlay = true;
    });
    app.route('/', mainView)
    app.mount('body')

    function mainView (state, emit) {

        let $overlay = '';
        if (state.openOverlay) {
            $overlay = Overlay.render({
                content: html`<div>overlay content</div>`,
                close  : function () {
                    state.openOverlay = false;
                    emit('render');
                }
            })
        }

        return html`<body>
            ${$overlay}
        </body>`;
    }
```

#### standalone

```javascript
    const Overlay = require('./nanooverlay.js');
    const overlay = new Overlay();

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
```



