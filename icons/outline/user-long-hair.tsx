import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function UserLongHair({
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
          d="M3.5,9h0c.276,0,.5,.224,.5,.5h0c0,1.38-1.12,2.5-2.5,2.5h0c-.276,0-.5-.224-.5-.5H1c0-1.38,1.12-2.5,2.5-2.5Z"
          fill={fill}
          stroke="none"
          transform="translate(5 21) rotate(180)"
        />
        <path
          d="M14.5,9h0c1.38,0,2.5,1.12,2.5,2.5h0c0,.276-.224,.5-.5,.5h0c-1.38,0-2.5-1.12-2.5-2.5h0c0-.276,.224-.5,.5-.5Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M2.953,16c1.298-1.958,3.522-3.25,6.047-3.25s4.749,1.291,6.047,3.25"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M12.75,6.5c0-2.071-1.679-3.75-3.75-3.75s-3.75,1.679-3.75,3.75c0,.085,.019,.165,.025,.249,1.555-.009,2.923-.811,3.725-2.02,.802,1.21,2.17,2.011,3.725,2.02,.006-.084,.025-.164,.025-.249Z"
          fill={fill}
          stroke="none"
        />
        <circle
          cx="9"
          cy="6.5"
          fill="none"
          r="3.75"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default UserLongHair;
