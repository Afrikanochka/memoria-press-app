import React from 'react'
import Select from 'react-select';
import sprite from '../../images/sprite.svg';
import { PaginationStyled } from './PaginationStyled';

const options = [
  { value: 5, label: '5' },
  { value: 10, label: '10' },
];

const style = {
  control: base => ({
    ...base,
    border: 0,
    boxShadow: 'none',
  }),
};

const Pagination = ({ 
    page, 
    totalPages, 
    limit, 
    setLimit, 
    onChangePage, 
    onOpenPages 
}) => {
    return (
    <PaginationStyled>
          <p className="paginationText">Rows per page:</p>
      <div className="paginationSelect">
        <Select
          options={options}
          placeholder={limit}
          styles={style}
          components={{
            DropdownIndicator: () => null,
            IndicatorSeparator: () => null,
          }}
          onChange={({ value }) => setLimit(value)}
        />
        <svg className="paginationIcon_arrow" width="10" height="16" onClick={() => onChangePage(-1)}>
          <use href={sprite + '#icon-arrow'}></use>
        </svg>
        
      </div>
      <div className="paginationPage">
      <p className="paginationText">
        {(page - 1) * limit + 1}-{page * limit} of {totalPages * limit}
      </p>
        <svg className="paginationIcon" width="10" height="16" onClick={() => onChangePage(-1)}>
          <use href={sprite + '#icon-left'}></use>
        </svg>
        <svg className="paginationIcon" width="10" height="16" onClick={() => onChangePage(1)}>
          <use href={sprite + '#icon-right'}></use>
        </svg>
      </div>
    </PaginationStyled>
    );
}

export default Pagination;