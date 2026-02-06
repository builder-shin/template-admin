export type DataTableConfig = typeof dataTableConfig;

export const dataTableConfig = {
  textOperators: [
    { label: '포함', value: 'iLike' as const },
    { label: '미포함', value: 'notILike' as const },
    { label: '일치', value: 'eq' as const },
    { label: '불일치', value: 'ne' as const },
    { label: '비어있음', value: 'isEmpty' as const },
    { label: '비어있지 않음', value: 'isNotEmpty' as const }
  ],
  numericOperators: [
    { label: '일치', value: 'eq' as const },
    { label: '불일치', value: 'ne' as const },
    { label: '미만', value: 'lt' as const },
    { label: '이하', value: 'lte' as const },
    { label: '초과', value: 'gt' as const },
    { label: '이상', value: 'gte' as const },
    { label: '범위', value: 'isBetween' as const },
    { label: '비어있음', value: 'isEmpty' as const },
    { label: '비어있지 않음', value: 'isNotEmpty' as const }
  ],
  dateOperators: [
    { label: '일치', value: 'eq' as const },
    { label: '불일치', value: 'ne' as const },
    { label: '이전', value: 'lt' as const },
    { label: '이후', value: 'gt' as const },
    { label: '이전(포함)', value: 'lte' as const },
    { label: '이후(포함)', value: 'gte' as const },
    { label: '범위', value: 'isBetween' as const },
    { label: '오늘 기준 상대', value: 'isRelativeToToday' as const },
    { label: '비어있음', value: 'isEmpty' as const },
    { label: '비어있지 않음', value: 'isNotEmpty' as const }
  ],
  selectOperators: [
    { label: '일치', value: 'eq' as const },
    { label: '불일치', value: 'ne' as const },
    { label: '비어있음', value: 'isEmpty' as const },
    { label: '비어있지 않음', value: 'isNotEmpty' as const }
  ],
  multiSelectOperators: [
    { label: '하나 이상 포함', value: 'inArray' as const },
    { label: '모두 미포함', value: 'notInArray' as const },
    { label: '비어있음', value: 'isEmpty' as const },
    { label: '비어있지 않음', value: 'isNotEmpty' as const }
  ],
  booleanOperators: [
    { label: '일치', value: 'eq' as const },
    { label: '불일치', value: 'ne' as const }
  ],
  sortOrders: [
    { label: '오름차순', value: 'asc' as const },
    { label: '내림차순', value: 'desc' as const }
  ],
  filterVariants: [
    'text',
    'number',
    'range',
    'date',
    'dateRange',
    'boolean',
    'select',
    'multiSelect'
  ] as const,
  operators: [
    'iLike',
    'notILike',
    'eq',
    'ne',
    'inArray',
    'notInArray',
    'isEmpty',
    'isNotEmpty',
    'lt',
    'lte',
    'gt',
    'gte',
    'isBetween',
    'isRelativeToToday'
  ] as const,
  joinOperators: ['and', 'or'] as const
};
