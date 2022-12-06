import React from "react";
import { useNavigate } from "react-router-dom";

import NewMeetupForm from "./NewMeetupForm";

function NewMeetupPage() {
  const navigate = useNavigate();

  function onAddMeetupHandler(meetupData) {
    fetch(
      "https://react-getting-started-be2ec-default-rtdb.firebaseio.com/meetups.json",
      {
        method: "POST",
        body: JSON.stringify(meetupData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then(() => {
      navigate("/", { replace: true });
    });
  }

  return (
    <div>
      <NewMeetupForm onAddMeetup={onAddMeetupHandler} />
    </div>
  );
}

export default NewMeetupPage;
