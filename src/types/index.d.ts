// process.env 타입
declare namespace NodeJS {
  interface ProcessEnv {
    [key: string]: string;
  }
}

type ValueType = string | number | boolean;
type HandlerCallback = (
  type: keyof RequestParams,
  value: ValueType | Array<ValueType>,
) => void;

type FormStatus = '' | 'warning' | 'error';
type FormSize = 'large' | 'middle' | 'small';

type FormOptionKey = 'key' | 'label';
type FormOptionList = { [key in FormOptionKey]: string }[];
