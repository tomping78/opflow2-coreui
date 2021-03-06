import React from 'react';
import { ListTemplateA } from '../../templates/ListTemplate';
import { format } from 'date-fns';
import { DeleteOutlined } from '@ant-design/icons';
import { message, Select } from 'antd';
import { FilterProp } from '../../molecules/Filter';
import Search from '../../atoms/Search';

const columns = [
  {
    title: '제목',
    dataIndex: 'title',
    sorter: true,
    render: (title: string) => `${title}`,
    width: '20%',
  },
  {
    title: '내용',
    dataIndex: 'content',
  },
  {
    title: '작성자',
    dataIndex: 'author',
    width: '10%',
  },
  {
    title: '수정자',
    dataIndex: 'XXXXX',
    width: '10%',
    render: (XXXXX: string) => {
      return <span style={{ color: 'red' }}>{XXXXX ?? 'NULL'}</span>;
    },
  },
  {
    title: '생성일',
    dataIndex: 'createdDate',
    width: '15%',
    render: (createdDate: Date) => format(new Date(createdDate), 'yyyy-MM-dd'),
  },
  {
    title: '',
    dataIndex: 'id',
    width: '3%',
    render: () => (
      <DeleteOutlined onClick={() => message.info('삭제 되었습니다.')} />
    ),
  },
];

const filters: FilterProp[] = [
  {
    name: 'category',
    label: '카테고리',
    component: (
      <Select placeholder={'선택해주세요'}>
        <Select.Option value='jack'>Jack</Select.Option>
        <Select.Option value='lucy'>Lucy</Select.Option>
      </Select>
    ),
  },
  {
    name: 'country',
    label: '국가',
    component: (
      <Select placeholder={'선택해주세요'}>
        <Select.Option value='KOR'>KOR</Select.Option>
        <Select.Option value='JPN'>JPN</Select.Option>
      </Select>
    ),
  },
  {
    name: 'keyword',
    label: '검색어',
    component: <Search placeholder={'제목이나 내용을 입력하세요'} />,
  },
];

/**
 * Notices Component
 * @constructor
 */
const Notices = () => {
  /******************************************
   * Constant / State
   ******************************************/

  /******************************************
   * Global State
   ******************************************/

  /******************************************
   * Function
   ******************************************/

  /******************************************
   * Handler
   ******************************************/

  /******************************************
   * Lifecycle
   ******************************************/

  /******************************************
   * Render
   ******************************************/

  return (
    <ListTemplateA
      useImmediatelySearch={true}
      title={'공지사항'}
      subTitle='공지사항'
      url={'/mock-notices'}
      columns={columns}
      filters={filters}
    />
  );
};

export default Notices;
