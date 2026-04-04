import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SidebarLeft4Hide({
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
          d="M7.25012 4.5H4.25012C3.83591 4.5 3.50012 4.83579 3.50012 5.25V12.75C3.50012 13.1642 3.83591 13.5 4.25012 13.5H7.25012C7.66434 13.5 8.00012 13.1642 8.00012 12.75V5.25C8.00012 4.83579 7.66434 4.5 7.25012 4.5Z"
          fill={fill}
        />
        <path
          d="M13.7501 8.24999H11.5606L12.2803 7.53026C12.5733 7.23726 12.5733 6.76273 12.2803 6.46983C11.9873 6.17693 11.5127 6.17683 11.2198 6.46983L9.21981 8.46983C8.92681 8.76283 8.92681 9.23736 9.21981 9.53026L11.2198 11.5303C11.3663 11.6768 11.5577 11.75 11.7501 11.75C11.9425 11.75 12.1339 11.6768 12.2804 11.5303C12.5734 11.2373 12.5734 10.7627 12.2804 10.4698L11.5607 9.75011H13.7502C14.1643 9.75011 14.5002 9.41421 14.5002 9.00011C14.5002 8.58601 14.1642 8.24999 13.7501 8.24999Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default SidebarLeft4Hide;
