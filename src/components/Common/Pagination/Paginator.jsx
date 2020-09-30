import React, { useState } from "react";
import styled from "styled-components";

const SpanPagination = styled.span`
  cursor: pointer;
  margin-left: 0.2rem;
  margin-right: 0.2rem;
  &.activePage {
    display: inline-block;
    color: black;
    text-align: center;
    border-radius: 50%;
    min-width: 24px;
    min-height: 24px;
    background-color: #ffc107;
  }
  &.activePage span {
    display: inline-block;
    padding-top: 50%;
    padding-bottom: 50%;
  }
`;
const DivPagingWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const BtnPaging = styled.button`
  margin-left: 0.3rem;
  margin-right: 0.3rem;
  padding: 0.15rem 0.5rem;
  &:focus {
    outline: none;
    box-shadow: none;
  }
`;

const UsersPagination = ({
  totalUsersCount,
  pageSize,
  currentPage,
  changeCurrentPage,
  portionSize = 10,
}) => {
  const pagesCount = Math.ceil(totalUsersCount / pageSize);

  const pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  const portionCount = Math.ceil(pagesCount / portionSize);
  const [portionNumber, setPortionNumber] = useState(
    Math.ceil(currentPage / portionSize)
  );
  const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
  const rightPortionPageNumber = portionNumber * portionSize;

  const pagingPages = pages
    .filter((p) => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
    .map((p) => {
      return (
        <SpanPagination
          key={p}
          className={currentPage === p ? `activePage` : null}
          onClick={() => changeCurrentPage(p)}
        >
          {p}
        </SpanPagination>
      );
    });

  return (
    <DivPagingWrapper>
      <BtnPaging
        type="button"
        disabled={portionNumber <= 1}
        className="btn btn-outline-dark"
        onClick={() => {
          setPortionNumber(portionNumber - 1);
        }}
      >
        PREV
      </BtnPaging>
      {pagingPages}
      <BtnPaging
        disabled={portionCount <= portionNumber}
        type="button"
        className="btn btn-outline-dark"
        onClick={() => {
          setPortionNumber(portionNumber + 1);
        }}
      >
        NEXT
      </BtnPaging>
    </DivPagingWrapper>
  );
};

export default UsersPagination;
