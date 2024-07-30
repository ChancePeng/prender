import { render } from '@change/prender';
import React, { useRef } from 'react';
import MergeHeadlineMiddleWare from './merge-middleware.tsx';

export default function () {
  const countRef = useRef({});

  const configs = [
    {
      type: 'Headline',
      dataSource: '一级标题',
      fieldProps: {
        tag: 'h2',
      },
    },
    {
      type: 'Table',
      instanceOf: 'Table',
      dataIndex: 'table',
      columns: [
        {
          title: '年龄',
          dataIndex: 'age',
        },
      ],
    },
  ];

  const data = {
    table: [
      {
        age: 26,
      },
    ],
  };

  const onFinished = ({ middlewares }) => {
    const instance = middlewares[0];
    countRef.current = instance?.count || {};
  };

  const jsx = render(configs, {
    data,
    middlewares: [MergeHeadlineMiddleWare],
    onFinished,
  });
  const count = countRef.current;
  return (
    <div>
      <div>
        {Object.keys(count).map((key) => (
          <div key={key}>
            {key}:{count[key]}
          </div>
        ))}
      </div>
      {jsx}
    </div>
  );
}
