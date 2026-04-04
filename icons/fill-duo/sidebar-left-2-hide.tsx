import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SidebarLeft2Hide({
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
          d="M14.2501 2H3.75009C2.23131 2 1.00009 3.23122 1.00009 4.75V13.25C1.00009 14.7688 2.23131 16 3.75009 16H14.2501C15.7689 16 17.0001 14.7688 17.0001 13.25V4.75C17.0001 3.23122 15.7689 2 14.2501 2Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M4.75009 5C4.33599 5 4.00009 5.3359 4.00009 5.75V12.25C4.00009 12.6641 4.33599 13 4.75009 13C5.16419 13 5.50009 12.6641 5.50009 12.25V5.75C5.50009 5.3359 5.16419 5 4.75009 5Z"
          fill={fill}
        />
        <path
          d="M13.2501 8.24999H9.06061L10.0303 7.28026C10.3233 6.98726 10.3233 6.51273 10.0303 6.21983C9.73731 5.92693 9.26271 5.92683 8.96981 6.21983L6.71981 8.46983C6.42681 8.76283 6.42681 9.23736 6.71981 9.53026L8.96981 11.7803C9.11631 11.9268 9.30821 12 9.50011 12C9.69201 12 9.88391 11.9268 10.0304 11.7803C10.3234 11.4873 10.3234 11.0127 10.0304 10.7198L9.06071 9.75011H13.2502C13.6643 9.75011 14.0002 9.41421 14.0002 9.00011C14.0002 8.58601 13.6642 8.24999 13.2501 8.24999Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default SidebarLeft2Hide;
