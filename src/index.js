import React from "react";
import ReactDOM from "react-dom";
import { faker } from "@faker-js/faker";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";
import Message from "./Message";
import Projects from "./Projects";

const App = () => {
  return (
    <div className="ui container comments">
      <Message 
      header='Changes in service'
      text='We just updated our privacy policy here to better service our customers'
      />
      <Projects 
      title='Blog project'
      image={faker.image.avatar()}
      content="Elyse is a copywriter working in New York."
      />
      <ApprovalCard>
        <CommentDetail
          author="Sam"
          time="Today at 12:00pm"
          text="Nice one"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="James"
          time="Today at 01:00pm"
          text="This is awesome"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Jane"
          time="Today at 03:30pm"
          text="Wow! this is great"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Mike"
          time="Today at 05:20pm"
          text="You are doing well"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="John"
          time="Today at 08:10pm"
          text="cool, interesting.."
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
