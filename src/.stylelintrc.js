module.exports = {
  plugins: ['stylelint-order', 'stylelint-scss'],
  extends: ['stylelint-config-recommended-scss'],
  rules: {
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['global'],
      },
    ],
    'selector-pseudo-element-no-unknown': [
      true,
      {
        ignorePseudoElements: ['global'],
      },
    ],
    /* awaiting https://github.com/stylelint/stylelint/issues/3196 */
    'no-descending-specificity': null,
    'order/properties-order': [
      [
        {
          emptyLineBefore: 'always',
          properties: ['position', 'z-index', 'top', 'right', 'bottom', 'left'],
        },
        {
          emptyLineBefore: 'always',
          properties: [
            'display',
            'visibility',
            'float',
            'clear',
            'overflow',
            'overflow-x',
            'overflow-y',
            '-webkit-overflow-scrolling',
            'clip',
            'zoom',
            '-ms-flex-line-pack',
            'align-content',
            '-webkit-box-align',
            '-moz-box-align',
            'align-items',
            '-ms-flex-align',
            '-ms-flex-item-align',
            '-ms-grid-row-align',
            'align-self',
            'flex',
            'flex-flow',
            '-ms-flex-preferred-size',
            'flex-basis',
            '-webkit-box-orient',
            '-webkit-box-direction',
            '-moz-box-orient',
            '-moz-box-direction',
            'flex-direction',
            '-ms-flex-positive',
            'flex-grow',
            '-ms-flex-negative',
            'flex-shrink',
            'flex-wrap',
            '-webkit-box-pack',
            '-moz-box-pack',
            '-ms-flex-pack',
            '-webkit-justify-content',
            'justify-content',
            '-webkit-box-ordinal-group',
            '-moz-box-ordinal-group',
            'order',
          ],
        },
        {
          emptyLineBefore: 'always',
          properties: [
            '-webkit-box-sizing',
            '-moz-box-sizing',
            'box-sizing',
            'width',
            'min-width',
            'max-width',
            'height',
            'min-height',
            'max-height',
            'margin',
            'margin-top',
            'margin-right',
            'margin-bottom',
            'margin-left',
            'padding',
            'padding-top',
            'padding-right',
            'padding-bottom',
            'padding-left',
          ],
        },
        {
          emptyLineBefore: 'always',
          properties: [
            'table-layout',
            'empty-cells',
            'caption-side',
            'border-spacing',
            'border-collapse',
            'list-style',
            'list-style-position',
            'list-style-type',
            'list-style-image',
          ],
        },
        {
          emptyLineBefore: 'always',
          properties: [
            'content',
            'quotes',
            'counter-reset',
            'counter-increment',
            'resize',
            'cursor',
            'user-select',
            'nav-index',
            'nav-up',
            'nav-right',
            'nav-down',
            'nav-left',
            'transition',
            'transition-delay',
            'transition-timing-function',
            'transition-duration',
            'transition-property',
            'transform',
            'transform-origin',
            'animation',
            'animation-name',
            'animation-duration',
            'animation-play-state',
            'animation-timing-function',
            'animation-delay',
            'animation-iteration-count',
            'animation-direction',
            'text-align',
            'text-align-last',
            'vertical-align',
            'white-space',
            'text-decoration',
            'text-emphasis',
            'text-emphasis-color',
            'text-emphasis-style',
            'text-emphasis-position',
            'text-indent',
            'text-justify',
            'text-transform',
            'letter-spacing',
            'word-spacing',
            'text-outline',
            'text-transform',
            'text-wrap',
            'text-overflow',
            'text-overflow-ellipsis',
            'text-overflow-mode',
            'word-wrap',
            'word-break',
            'tab-size',
            'hyphens',
            'pointer-events',
          ],
        },
        {
          emptyLineBefore: 'always',
          properties: [
            'opacity',
            'filter',
            '-ms-filter',
            '-ms-interpolation-mode',
            'color',
            'border',
            'border-collapse',
            'border-width',
            'border-style',
            'border-color',
            'border-top',
            'border-top-width',
            'border-top-style',
            'border-top-color',
            'border-right',
            'border-right-width',
            'border-right-style',
            'border-right-color',
            'border-bottom',
            'border-bottom-width',
            'border-bottom-style',
            'border-bottom-color',
            'border-left',
            'border-left-width',
            'border-left-style',
            'border-left-color',
            'border-radius',
            'border-top-left-radius',
            'border-top-right-radius',
            'border-bottom-right-radius',
            'border-bottom-left-radius',
            'border-image',
            'border-image-source',
            'border-image-slice',
            'border-image-width',
            'border-image-outset',
            'border-image-repeat',
            'outline',
            'outline-width',
            'outline-style',
            'outline-color',
            'outline-offset',
            'background',
            'background-color',
            'background-image',
            'background-repeat',
            'background-attachment',
            'background-position',
            'background-position-y',
            'background-clip',
            'background-origin',
            'background-size',
            'box-decoration-break',
            'box-shadow',
            'text-shadow',
          ],
        },
        {
          emptyLineBefore: 'always',
          properties: [
            'font',
            'font-family',
            'font-size',
            'font-weight',
            'font-style',
            'font-variant',
            'font-size-adjust',
            'font-stretch',
            'font-effect',
            'font-emphasize',
            'font-emphasize-position',
            'font-emphasize-style',
            'font-smooth',
            'line-height',
          ],
        },
      ],
    ],
  },
};