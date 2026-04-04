import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function TileToLeft({
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
          d="M14.2501 15.5H3.75009C2.23349 15.5 1.00009 14.2666 1.00009 12.75V5.25C1.00009 3.7334 2.23349 2.5 3.75009 2.5H14.2501C15.7667 2.5 17.0001 3.7334 17.0001 5.25V12.75C17.0001 14.2666 15.7667 15.5 14.2501 15.5Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M13.7501 8.24999H10.5606L11.2803 7.53026C11.5733 7.23726 11.5733 6.76273 11.2803 6.46983C10.9873 6.17693 10.5127 6.17683 10.2198 6.46983L8.21981 8.46983C7.92681 8.76283 7.92681 9.23736 8.21981 9.53026L10.2198 11.5303C10.3663 11.6768 10.5582 11.75 10.7501 11.75C10.942 11.75 11.1339 11.6768 11.2804 11.5303C11.5734 11.2373 11.5734 10.7627 11.2804 10.4698L10.5607 9.75011H13.7502C14.1643 9.75011 14.5002 9.41421 14.5002 9.00011C14.5002 8.58601 14.1642 8.24999 13.7501 8.24999Z"
          fill={fill}
        />
        <path
          d="M6.25009 5H4.75009C4.33588 5 4.00009 5.33579 4.00009 5.75V12.25C4.00009 12.6642 4.33588 13 4.75009 13H6.25009C6.66431 13 7.00009 12.6642 7.00009 12.25V5.75C7.00009 5.33579 6.66431 5 6.25009 5Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default TileToLeft;
