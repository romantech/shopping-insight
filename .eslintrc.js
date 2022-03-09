// TypeScript, JavaScript 모두 적용되는 Rules
const commonRules = {
  'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
  'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
  // Prettier 가 잡은 내용은 'warn' 으로 취급하도록 설정(ESLint - Prettier 충돌 방지) ▼
  // { endOfLine: 'auto' }는 엔드라인 시퀀스 자동 변경 ▼
  'prettier/prettier': ['warn', { endOfLine: 'auto' }],
  'no-param-reassign': ['error', { props: false }],
  'prefer-const': 1,
  'no-plusplus': 0,
  'vars-on-top': 0,
  'no-underscore-dangle': 0, // var _foo;
  'comma-dangle': 0,
  'func-names': 0, // setTimeout(function () {}, 0);
  'prefer-arrow-callback': 0, // setTimeout(function () {}, 0);
  'prefer-template': 0,
  'no-nested-ternary': 0,
  'max-classes-per-file': 0,
  'arrow-parens': ['error', 'as-needed'], // a => {}
  'no-restricted-syntax': [0, 'ForOfStatement'],
  'consistent-return': 1,
};

module.exports = {
  root: true, // 루트 폴더에선 주석 처리, 하위 폴더(프로젝트)에선 주석 해제
  env: {
    es2021: true,
    browser: true,
    node: true,
    mocha: true,
    commonjs: true,
  },
  // eslint-plugin-react 플러그인의 preset 을 사용하므로 plugins 에 react 를 안적어도됨 ▼
  // plugin:prettier/recommended 플러그인의 preset 을 사용하므로 plugins/extends 배열에 prettier 안적어도됨 ▼
  plugins: ['@typescript-eslint'],
  // extends 배열에서 아래에 위치할수록 우선순위 높음. prettier 규칙은 가장 마지막에 입력 ▼
  // airbnb 프리셋은 eslint-plugin-import/jsx-ally/react/react-hooks 를 포함하므로 추가 안해도 됨 ▼
  extends: [
    'airbnb',
    'airbnb/hooks',
    'airbnb-typescript',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended', // 타입스크립트 Lint 규칙 모음
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module', // import 사용 허용
    project: './tsconfig.json', // 하위 폴더에도 적용하려면 ** 형식으로 입력
    tsconfigRootDir: __dirname, // 다른 자식 폴더에서 ts 파일 읽지 못하는 문제 해결
    ecmaFeatures: {
      jsx: true, // JSX 파싱 허용
    },
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  ignorePatterns: [
    '**/*test.js',
    '**/spec',
    '**/__test__/',
    '**/node_modules/**',
  ],
  rules: {
    ...commonRules,
    '@typescript-eslint/no-unused-expressions': 1,
    '@typescript-eslint/explicit-module-boundary-types': [
      'warn',
      {
        allowDirectConstAssertionInArrowFunctions: true,
        allowHigherOrderFunctions: true,
        allowTypedFunctionExpressions: true,
      },
    ],
    '@typescript-eslint/default-param-last': 1,
    '@typescript-eslint/no-var-requires': 1,
    '@typescript-eslint/no-unused-vars': 1, // VSCode 내장 Linter 와 겹침 (TS6133)
    '@typescript-eslint/ban-types': 1,
    '@typescript-eslint/no-use-before-define': [
      'error',
      { variables: false, functions: false },
    ], // styled components 를 파일 하단에 선언했을 때 오류 해결
    'react/default-props-match-prop-types': [
      'error',
      { allowRequiredDefaults: true },
    ],
  },
};
