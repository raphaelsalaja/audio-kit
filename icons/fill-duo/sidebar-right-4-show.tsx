import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SidebarRight4Show({
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
          d="M14.2501 2H3.75012C2.23134 2 1.00012 3.23122 1.00012 4.75V13.25C1.00012 14.7688 2.23134 16 3.75012 16H14.2501C15.7689 16 17.0001 14.7688 17.0001 13.25V4.75C17.0001 3.23122 15.7689 2 14.2501 2Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M13.7501 4.5H10.7501C10.3359 4.5 10.0001 4.83579 10.0001 5.25V12.75C10.0001 13.1642 10.3359 13.5 10.7501 13.5H13.7501C14.1643 13.5 14.5001 13.1642 14.5001 12.75V5.25C14.5001 4.83579 14.1643 4.5 13.7501 4.5Z"
          fill={fill}
        />
        <path
          d="M8.25011 8.24999H6.0606L6.78031 7.53026C7.07331 7.23726 7.07331 6.76273 6.78031 6.46983C6.48731 6.17693 6.01271 6.17683 5.71981 6.46983L3.71981 8.46983C3.42681 8.76283 3.42681 9.23736 3.71981 9.53026L5.71981 11.5303C5.86631 11.6768 6.05771 11.75 6.25011 11.75C6.44251 11.75 6.6339 11.6768 6.7804 11.5303C7.0734 11.2373 7.0734 10.7627 6.7804 10.4698L6.06071 9.75011H8.25021C8.66431 9.75011 9.00021 9.41421 9.00021 9.00011C9.00021 8.58601 8.66421 8.24999 8.25011 8.24999Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default SidebarRight4Show;
