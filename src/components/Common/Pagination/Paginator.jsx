import React from "react";
import styled from "styled-components";

const SpanPagination = styled.span`
  cursor: pointer;
  &.activePage {
    font-weight: bold;
  }
`;
const DivPagingWrapper = styled.div`
  text-align: center;
`;

const UsersPagination = ({
  totalUsersCount,
  pageSize,
  currentPage,
  changeCurrentPage,
}) => {
  const pagesCount = Math.ceil(totalUsersCount / pageSize);
  const pages = [];

  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  const pagingPages = pages.map((p) => (
    <SpanPagination
      key={p.index}
      className={currentPage === p ? `activePage` : null}
      onClick={() => changeCurrentPage(p)}
    >
      {p}
    </SpanPagination>
  ));

  return <DivPagingWrapper>{pagingPages}</DivPagingWrapper>;
};

export default UsersPagination;
