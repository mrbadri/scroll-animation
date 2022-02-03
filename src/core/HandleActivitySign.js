import ActivitySign from "../components/activitySign";

const HandleActivitySign = ({ type, position }) => {
  switch (type) {
    case "magnifier":
      return (
        <>
          <ActivitySign
            id="activity_sign_up"
            type={"curve"}
            color={"#000"}
            style={{ transform: `translateX(${position})` }}
          />
          <ActivitySign
            id="activity_sign_down"
            type={"curve"}
            color={"#000"}
            style={{
              transform: `translateX(${position}) rotate(-180deg)`,
              top: "99%",
              bottom: "none",
            }}
          />
          <ActivitySign
            id="activity_sign_center"
            type={"circle"}
            color={"#ffb457"}
            style={{
              transform: `translateX(${position})`,
            }}
          />
        </>
      );

    case "hill":
      return (
        <>
          <ActivitySign
            id="activity_sign"
            type={"curve"}
            color={"#000"}
            style={{ transform: `translateX(${position})` }}
          />
        </>
      );

    case "wave":
      return (
        <>
          <ActivitySign
            id="activity_sign"
            type={"curve"}
            color={"#000"}
            style={{ transform: `translateX(${position})` }}
          />
          <ActivitySign
            id="activity_sign"
            type={"curve"}
            color={"#ffb457"}
            style={{
              transform: `translateX(${position})`,
              bottom: "0",
            }}
          />
        </>
      );

    case "fault":
      return (
        <>
          <ActivitySign
            id="activity_sign"
            type={"curve"}
            color={"#ffb457"}
            style={{
              transform: `translateX(${position})`,
              bottom: "0",
            }}
          />
        </>
      );

    case "hovering":
      return (
        <>
          <ActivitySign
            id="activity_sign"
            type={"curve"}
            color={"#ffb457"}
            style={{
              transform: `translateX(${position})  rotate(-180deg)`,
              top: 0,
            }}
          />
        </>
      );

    default:
      break;
  }
};

export default HandleActivitySign;
