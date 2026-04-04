import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Ticket4({
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
          d="M1 5.75C1 4.23203 2.23054 3 3.75 3H5.25C5.66421 3 6 3.33579 6 3.75V4C6 4.55228 6.44772 5 7 5C7.55228 5 8 4.55228 8 4V3.75C8 3.33579 8.33579 3 8.75 3H14.25C15.7695 3 17 4.23203 17 5.75V12.25C17 13.768 15.7695 15 14.25 15H8.75C8.33579 15 8 14.6642 8 14.25V14C8 13.4477 7.55228 13 7 13C6.44772 13 6 13.4477 6 14V14.25C6 14.6642 5.66421 15 5.25 15H3.75C2.23054 15 1 13.768 1 12.25V5.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M7 8C7.4142 8 7.75 7.664 7.75 7.25C7.75 6.836 7.4142 6.5 7 6.5C6.5858 6.5 6.25 6.836 6.25 7.25C6.25 7.664 6.5858 8 7 8Z"
          fill={fill}
        />
        <path
          d="M7 11.5C7.4142 11.5 7.75 11.164 7.75 10.75C7.75 10.336 7.4142 10 7 10C6.5858 10 6.25 10.336 6.25 10.75C6.25 11.164 6.5858 11.5 7 11.5Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Ticket4;
