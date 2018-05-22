(() => {
    'use strict';

    const Nanocomponent = require('nanocomponent');
    const html = require('nanohtml');
    const css = require('sheetify');

    const overlayCSS = css`
        :host {
            position: fixed;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
            z-index: 100;
            font-size: 1em;
        }

        :host * {
            box-sizing: border-box;
        }
    `;

    let backgroundCSS = css`
        :host {
            position: absolute;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;

            background-color: #000;
            opacity: 0.5;
        }
    `;

    let contentCSS = css`
        :host {
            position: absolute;
            display: flex;
            top: 5%;
            bottom:5%;
            left: 5%;
            right: 5%;
            margin: auto;
            background-color: #FEFEFE;
            z-index: 99999;
            padding: 10px;
            overflow: hidden;

            box-shadow: 3px 4px 5px 3px rgba(50,50,50,.6);
            border-radius: 10px;
            border: 1px solid #272727;
        }
    `;

    class Button extends Nanocomponent {
        constructor () {
            super();
            this.content = '';
        }

        createElement (params = {}) {
            if (!params.close) params.close = () => {};
            if (params.content) this.content = params.content;
            if (params.contentCSS) contentCSS = params.contentCSS;
            if (params.backgroundCSS) backgroundCSS = params.backgroundCSS;

            return html`<section class=${overlayCSS}>
                <div class=${backgroundCSS} onclick=${params.close}></div>
                <div class=${contentCSS}>
                    ${this.content}
                </div>
            </section>`;
        }
    }

    module.exports = Button;
})();
