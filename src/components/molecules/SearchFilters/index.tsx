import React from 'react';
import Filter, { FilterProp } from '../Filter';
import { Col, Row } from 'antd';

interface SearchFiltersProps {
  /**
   * 필터 목록
   */
  filters?: FilterProp[];
  /**
   * 필터 변경 이벤트
   */
  onChange?: (...args: any) => void;
}

/**
 * TODO: ...
 *
 * @Author: circlegiven
 * @Date: 2022-04-11
 */
const SearchFilters = ({ filters, onChange }: SearchFiltersProps) => {
  /******************************************
   * Constant / State
   * ****************************************/

  /******************************************
   * Global State
   * ****************************************/

  /******************************************
   * Handler
   * ****************************************/

  /******************************************
   * Function
   * ****************************************/

  /******************************************
   * Lifecycle
   * ****************************************/

  /******************************************
   * Render
   * ****************************************/
  return (
    <Row
      gutter={[24, 8]}>
      {(filters ?? []).map((filter: FilterProp, index: number) => (
        <Col
          key={index}
          span={8}>
          <Filter
            {...filter}
            onChange={onChange}
          />
        </Col>
      ))}
    </Row>
  );
};

export default SearchFilters;
