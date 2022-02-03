const ActivitySign = ({ style, type, color, children, ...params }) => {
  const sizes = {
    w_curve: "10.9",
    h_curve: "2.4",
    r_circle: "6.6",
    time_transition: "0.5s",
  };

  console.log(sizes.w_curve);
  console.log(sizes.w_curve / 2 - sizes.r_circle / 2);

  const styles = {
    curve: {
      position: "absolute",
      left: 0,
      bottom: "99%",
      width: `${sizes.w_curve}em`,
      height: `${sizes.h_curve}em`,
      transition: `${sizes.time_transition}em`,
      "will-change": "transform",
      "background-color": color,
      "clip-path": `url('#curve')`,
    },
    circle: {
      position: "absolute",
      height: `${sizes.r_circle}em`,
      width: `${sizes.r_circle}em`,
      transition: "0.5s",
      left: `${sizes.w_curve / 2 - sizes.r_circle / 2}em`,
      "background-color": color,
      "border-radius": "50%",
    },
  };

  return (
    <>
      <div style={{ ...styles[type], ...style }} {...params}>
        {children}
      </div>

      <div className="svg-container" style={{ width: 0, height: 0 }}>
        <svg viewBox="0 0 202.9 45.5">
          <clipPath
            id="curve"
            clipPathUnits="objectBoundingBox"
            transform="scale(0.0049285362247413 0.021978021978022)"
          >
            <path
              d="M6.7,45.5c5.7,0.1,14.1-0.4,23.3-4c5.7-2.3,9.9-5,18.1-10.5c10.7-7.1,11.8-9.2,20.6-14.3c5-2.9,9.2-5.2,15.2-7
          c7.1-2.1,13.3-2.3,17.6-2.1c4.2-0.2,10.5,0.1,17.6,2.1c6.1,1.8,10.2,4.1,15.2,7c8.8,5,9.9,7.1,20.6,14.3c8.3,5.5,12.4,8.2,18.1,10.5
          c9.2,3.6,17.6,4.2,23.3,4H6.7z"
            />
          </clipPath>
        </svg>
      </div>
    </>
  );
};

export default ActivitySign;
