import { extractChartDataAndGroup } from './utils';

const dummyData: Data[] = [
  {
    period: '2022-03-01',
    ratio: 7.57575,
    group: '10',
  },
  {
    period: '2022-03-01',
    ratio: 21.21212,
    group: '20',
  },
  {
    period: '2022-03-01',
    ratio: 39.39393,
    group: '30',
  },
  {
    period: '2022-03-01',
    ratio: 10.60606,
    group: '40',
  },
  {
    period: '2022-03-01',
    ratio: 19.69696,
    group: '50',
  },
  {
    period: '2022-03-01',
    ratio: 10.60606,
    group: '60',
  },
  {
    period: '2022-03-02',
    ratio: 1.51515,
    group: '10',
  },
  {
    period: '2022-03-02',
    ratio: 25.75757,
    group: '20',
  },
  {
    period: '2022-03-02',
    ratio: 48.48484,
    group: '30',
  },
  {
    period: '2022-03-02',
    ratio: 51.51515,
    group: '40',
  },
  {
    period: '2022-03-02',
    ratio: 36.36363,
    group: '50',
  },
  {
    period: '2022-03-02',
    ratio: 4.54545,
    group: '60',
  },
  {
    period: '2022-03-03',
    ratio: 30.30303,
    group: '10',
  },
  {
    period: '2022-03-03',
    ratio: 22.72727,
    group: '20',
  },
  {
    period: '2022-03-03',
    ratio: 53.0303,
    group: '30',
  },
  {
    period: '2022-03-03',
    ratio: 100,
    group: '40',
  },
  {
    period: '2022-03-03',
    ratio: 21.21212,
    group: '50',
  },
  {
    period: '2022-03-03',
    ratio: 9.0909,
    group: '60',
  },
  {
    period: '2022-03-04',
    ratio: 9.0909,
    group: '10',
  },
  {
    period: '2022-03-04',
    ratio: 36.36363,
    group: '20',
  },
  {
    period: '2022-03-04',
    ratio: 34.84848,
    group: '30',
  },
  {
    period: '2022-03-04',
    ratio: 80.30303,
    group: '40',
  },
  {
    period: '2022-03-04',
    ratio: 34.84848,
    group: '50',
  },
  {
    period: '2022-03-04',
    ratio: 7.57575,
    group: '60',
  },
  {
    period: '2022-03-05',
    ratio: 12.12121,
    group: '10',
  },
  {
    period: '2022-03-05',
    ratio: 21.21212,
    group: '20',
  },
  {
    period: '2022-03-05',
    ratio: 42.42424,
    group: '30',
  },
  {
    period: '2022-03-05',
    ratio: 24.24242,
    group: '40',
  },
  {
    period: '2022-03-05',
    ratio: 19.69696,
    group: '50',
  },
  {
    period: '2022-03-05',
    ratio: 3.0303,
    group: '60',
  },
  {
    period: '2022-03-06',
    ratio: 4.54545,
    group: '10',
  },
  {
    period: '2022-03-06',
    ratio: 24.24242,
    group: '20',
  },
  {
    period: '2022-03-06',
    ratio: 33.33333,
    group: '30',
  },
  {
    period: '2022-03-06',
    ratio: 63.63636,
    group: '40',
  },
  {
    period: '2022-03-06',
    ratio: 24.24242,
    group: '50',
  },
  {
    period: '2022-03-06',
    ratio: 4.54545,
    group: '60',
  },
  {
    period: '2022-03-07',
    ratio: 16.66666,
    group: '10',
  },
  {
    period: '2022-03-07',
    ratio: 24.24242,
    group: '20',
  },
  {
    period: '2022-03-07',
    ratio: 54.54545,
    group: '30',
  },
  {
    period: '2022-03-07',
    ratio: 62.12121,
    group: '40',
  },
  {
    period: '2022-03-07',
    ratio: 31.81818,
    group: '50',
  },
  {
    period: '2022-03-07',
    ratio: 24.24242,
    group: '60',
  },
  {
    period: '2022-03-08',
    ratio: 7.57575,
    group: '10',
  },
  {
    period: '2022-03-08',
    ratio: 33.33333,
    group: '20',
  },
  {
    period: '2022-03-08',
    ratio: 77.27272,
    group: '30',
  },
  {
    period: '2022-03-08',
    ratio: 39.39393,
    group: '40',
  },
  {
    period: '2022-03-08',
    ratio: 56.0606,
    group: '50',
  },
  {
    period: '2022-03-08',
    ratio: 9.0909,
    group: '60',
  },
  {
    period: '2022-03-09',
    ratio: 9.0909,
    group: '10',
  },
  {
    period: '2022-03-09',
    ratio: 22.72727,
    group: '20',
  },
  {
    period: '2022-03-09',
    ratio: 19.69696,
    group: '30',
  },
  {
    period: '2022-03-09',
    ratio: 33.33333,
    group: '40',
  },
  {
    period: '2022-03-09',
    ratio: 24.24242,
    group: '50',
  },
  {
    period: '2022-03-10',
    ratio: 1.51515,
    group: '10',
  },
  {
    period: '2022-03-10',
    ratio: 27.27272,
    group: '20',
  },
  {
    period: '2022-03-10',
    ratio: 30.30303,
    group: '30',
  },
  {
    period: '2022-03-10',
    ratio: 57.57575,
    group: '40',
  },
  {
    period: '2022-03-10',
    ratio: 13.63636,
    group: '50',
  },
  {
    period: '2022-03-10',
    ratio: 3.0303,
    group: '60',
  },
];

const { metrics, groups } = extractChartDataAndGroup(dummyData);
export default { metrics, groups };
