import React from "react";
import MeetupList from "../components/meetups/MeetupList";

const DUMMY_DATA = [
  {
    id: "m1",
    title: "This is a first meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/VancouverIsland.A2003154.1930.250m.cropped.jpg/390px-VancouverIsland.A2003154.1930.250m.cropped.jpg",
    address: "Meetupstreet 5, 12345 Meetup City",
    description:
      "This is a first, amazing meetup which you definitely should not miss."
  },
  {
    id: "m2",
    title: "This is a second meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Vancouver_de.png/390px-Vancouver_de.png",
    address: "Meetupstreet 5, 12345 Meetup City",
    description:
      "This is a second, amazing meetup which you definitely should not miss."
  }
];

function AllMeetupsPage() {
  return (
    <section>
      <h1>All Meetups</h1>
      <MeetupList meetups={DUMMY_DATA} />
    </section>
  );
}

export default AllMeetupsPage;
