import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function UserDeveloper({
  fill = "currentColor",
  secondaryfill,
  strokewidth = 1,
  width = "1em",
  height = "1em",
  title = "badge 13",
  ...props
}: IconProps) {
  secondaryfill = secondaryfill || fill;

  return (
    <svg
      height={height}
      width={width}
      {...props}
      viewBox="0 0 18 18"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      <g fill={fill}>
        <path
          d="M1.953,14c1.298-1.958,3.522-3.25,6.047-3.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9.833,7.684c-.522,.357-1.153,.566-1.833,.566-1.795,0-3.25-1.455-3.25-3.25s1.455-3.25,3.25-3.25,3.25,1.455,3.25,3.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14.925,16.25h-6.175l1.868-4.203c.08-.181,.259-.297,.457-.297h5.406c.362,0,.604,.372,.457,.703l-1.556,3.5c-.08,.181-.259,.297-.457,.297Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M8.5,5l-3.961-.755c-.738-.141-1.466,.286-1.704,.999"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <circle cx="14.25" cy="2.25" fill={fill} r=".75" stroke="none" />
        <line
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x1="8.75"
          x2="5.75"
          y1="16.25"
          y2="16.25"
        />
        <rect
          height="3"
          width="3"
          fill={fill}
          rx="1"
          ry="1"
          stroke="none"
          x="7"
          y="3.5"
        />
        <rect
          height="3"
          width="3"
          fill={fill}
          rx="1"
          ry="1"
          stroke="none"
          x="10.5"
          y="3.5"
        />
        <polyline
          fill="none"
          points="2 8 .75 9 2 10"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <polyline
          fill="none"
          points="15.5 9 17.25 7.5 15.5 6"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default UserDeveloper;
