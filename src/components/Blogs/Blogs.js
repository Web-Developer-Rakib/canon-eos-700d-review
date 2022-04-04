import React from "react";
import "./Blogs.css";

const Blogs = () => {
  return (
    <section className="qna-section">
      <h1>Question and answer</h1>
      <div className="qna">
        <h3>
          <b>Question: </b>What is context API?
        </h3>
        <p>
          <b>Answer: </b>
          Due to the complexity of our project, there might be times where we’ve
          had to send states and props from component to component, thus further
          increasing the complexity. This is where React’s Context API can prove
          to be incredibly useful. Context API helpes us to avoid props
          drilling. So, We can share states and props very easily using context
          API.
        </p>
      </div>
      <div className="qna">
        <h3>
          <b>Question: </b>What is semantic tag?
        </h3>
        <p>
          <b>Answer: </b>When HTML 4 was there, everything was done by adding
          classes with div. But, HTML 5 has come up with some new meaningful
          tags. Their religion is like div. However, these will help you to
          easily understand the different parts of your web page. For example:
          there have nav, header, footer, aside, article and many more
          meaningful tags.
        </p>
      </div>
      <div className="qna">
        <h3>
          <b>Question: </b>What is the difrance between inline, block and
          inline-block element?
        </h3>
        <p>
          <b>Answer: </b>
          <i>
            <u>Inline element:</u>
          </i>{" "}
          Inline elements are just like that, they don't take up full space.
          Rather, they all huddle together in one line. They can be given margin
          on right and left, and padding on all sides, but hight, width cannot
          be given. <br /> <br />
          <i>
            <u>Block element:</u>
          </i>{" "}
          Declare the block element as well as sit comfortably with full weidth
          from its own position. They are large, so their height, width and
          margin, padding can be conveniently given. For example, h1 is a block
          element. <br />
          <br />
          <i>
            <u>Inline-Block element:</u>
          </i>{" "}
          By using inline-block CSS property, Elements are show their
          bidirectional behaviour. We can use inline element with block level
          elements privilege.
        </p>
      </div>
    </section>
  );
};

export default Blogs;
