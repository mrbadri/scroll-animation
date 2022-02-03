import Icon from "./../asset/icons/index";

const dataTest = [
  {
    id: "1",
    text: "",
    icon: (
      <svg className="icon" viewBox="0 0 24 24">
        <path d="M3.8,6.6h16.4" />
        <path d="M20.2,12.1H3.8" />
        <path d="M3.8,17.5h16.4" />
      </svg>
    ),
  },
  {
    id: "2",
    text: "",
    icon: <Icon name={'B'} />,
  },
  {
    id: "3",
    text: "",
    active: true,
    icon: (
      <svg className="icon" viewBox="0 0 24 24">
        <path
          d="M5.1,3.9h13.9c0.6,0,1.2,0.5,1.2,1.2v13.9c0,0.6-0.5,1.2-1.2,1.2H5.1c-0.6,0-1.2-0.5-1.2-1.2V5.1
        C3.9,4.4,4.4,3.9,5.1,3.9z"
        />
        <path d="M4.2,9.3h15.6" />
        <path d="M9.1,9.5v10.3" />
      </svg>
    ),
  },
  {
    id: "5",
    text: "",
    url: "",
    icon: (
      <svg className="icon" viewBox="0 0 24 24">
        <path
          d="M5.1,3.9h13.9c0.6,0,1.2,0.5,1.2,1.2v13.9c0,0.6-0.5,1.2-1.2,1.2H5.1c-0.6,0-1.2-0.5-1.2-1.2V5.1
            C3.9,4.4,4.4,3.9,5.1,3.9z"
        />
        <path d="M5.5,20l9.9-9.9l4.7,4.7" />
        <path d="M10.4,8.8c0,0.9-0.7,1.6-1.6,1.6c-0.9,0-1.6-0.7-1.6-1.6C7.3,8,8,7.3,8.9,7.3C9.7,7.3,10.4,8,10.4,8.8z" />
      </svg>
    ),
  },
];

export default dataTest;
