export type SelectListType = typeof categoryList;

export const requiredParamKeys: Array<keyof RequiredParams> = [
  'startDate',
  'endDate',
  'category',
  'keyword',
  'timeUnit',
];

export const categoryList = [
  {
    key: '50000008',
    label: '패션/의류',
  },
  {
    key: '50000000',
    label: '생활/건강',
  },
  {
    key: '50000005',
    label: '출산/육아',
  },
  {
    key: '50000003',
    label: '디지털/가전',
  },
  {
    key: '50000004',
    label: '가구/인테리어',
  },
  {
    key: '50000001',
    label: '패션/잡화',
  },
  {
    key: '50000007',
    label: '스포츠/레저',
  },
  {
    key: '50000002',
    label: '화장품/미용',
  },
  {
    key: '50000006',
    label: '식품',
  },
  {
    key: '50005542',
    label: '도서',
  },
  {
    key: '50000009',
    label: '여가/생활편의',
  },
  {
    key: '50000010',
    label: '면세점',
  },
];

export const ageList = [
  {
    key: '10',
    label: '10대',
  },
  {
    key: '20',
    label: '20대',
  },
  {
    key: '30',
    label: '30대',
  },
  {
    key: '40',
    label: '40대',
  },
  {
    key: '50',
    label: '50대',
  },
  {
    key: '60',
    label: '60대',
  },
];

export const genderList = [
  {
    key: '',
    label: '전체',
  },
  {
    key: 'm',
    label: '남성',
  },
  {
    key: 'f',
    label: '여성',
  },
];
export const deviceList = [
  {
    key: '',
    label: '전체',
  },
  {
    key: 'pc',
    label: 'PC',
  },
  {
    key: 'mo',
    label: 'Mobile',
  },
];

export const timeUnitList = [
  {
    key: 'date',
    label: '일간',
  },
  {
    key: 'week',
    label: '주간',
  },
  {
    key: 'month',
    label: '월간',
  },
];
