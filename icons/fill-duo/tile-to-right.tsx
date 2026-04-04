import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function TileToRight({
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
          d="M1.00009 12.75V5.25C1.00009 3.7334 2.23349 2.5 3.75009 2.5H14.2501C15.7667 2.5 17.0001 3.7334 17.0001 5.25V12.75C17.0001 14.2666 15.7667 15.5 14.2501 15.5H3.75009C2.23349 15.5 1.00009 14.2666 1.00009 12.75Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M4.2501 8.24999H7.4396L6.7199 7.53026C6.4269 7.23726 6.4269 6.76273 6.7199 6.46983C7.0129 6.17693 7.4875 6.17683 7.7804 6.46983L9.7804 8.46983C10.0734 8.76283 10.0734 9.23736 9.7804 9.53026L7.7804 11.5303C7.6339 11.6768 7.442 11.75 7.2501 11.75C7.0582 11.75 6.8663 11.6768 6.7198 11.5303C6.4268 11.2373 6.4268 10.7627 6.7198 10.4698L7.4395 9.75011H4.25C3.8359 9.75011 3.5 9.41421 3.5 9.00011C3.5 8.58601 3.836 8.24999 4.2501 8.24999Z"
          fill={fill}
        />
        <path
          d="M13.2501 5H11.7501C11.3359 5 11.0001 5.33579 11.0001 5.75V12.25C11.0001 12.6642 11.3359 13 11.7501 13H13.2501C13.6643 13 14.0001 12.6642 14.0001 12.25V5.75C14.0001 5.33579 13.6643 5 13.2501 5Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default TileToRight;
