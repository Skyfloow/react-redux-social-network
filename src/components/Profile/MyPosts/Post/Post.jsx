import React from "react";
import styled from "styled-components";

const DivItems = styled.div`
  color: black;
  img {
    width: 100%;
    max-width: 50px;
    height: 50px;
    border-radius: 30px;
    margin-right: 0.2rem;
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  }
`;

const Post = ({ message, likesCount }) => {
  return (
    <DivItems>
      <img
        src="https://movies4maniacs.liberty.me/wp-content/uploads/sites/1218/2015/09/avatarsucks.jpg"
        alt="img"
      />
      {message}
      <div>
        <span>like:</span> {likesCount}
      </div>
    </DivItems>
  );
};

export default Post;
