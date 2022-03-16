module.exports = {
  extends: ['taro/react'],
  rules: {
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'jsx-quotes': ['error', 'prefer-single'],
    'class-methods-use-this': 'off',
    'no-unused-expressions': 'off',
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
    'no-use-before-define': ['off', { functions: false }],
    'no-unused-vars': 'off',
    indent: ['error', 2, { SwitchCase: 1 }],
    semi: ['error', 'always', { omitLastInOneLineBlock: true }],

    // react rules
    'react/jsx-indent': ['error', 2],
    'react/jsx-indent-props': ['error', 2],
    'react/static-property-placement': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],

    // import rules
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
  }
}
