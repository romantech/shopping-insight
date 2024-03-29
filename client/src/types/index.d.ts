// process.env 타입
declare namespace NodeJS {
  interface ProcessEnv {
    [key: string]: string;
  }
}

type ValueType = string | number | boolean;
type InsightParamsHandler = (
  type: RequestParamKeys,
  value: ValueType | Array<ValueType>,
) => void;

type FormStatus = '' | 'warning' | 'error';
type FormSize = 'large' | 'middle' | 'small';

type FormOptionKey = 'key' | 'label';
type FormOptionList = { [key in FormOptionKey]: string }[];

type Metric = { [key: string]: number | string };
interface RenderData {
  category: Category | null;
  metrics: Metric[];
  groups: Ages[];
}
