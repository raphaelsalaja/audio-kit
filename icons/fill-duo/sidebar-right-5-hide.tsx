import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SidebarRight5Hide({
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
          d="M13.2501 2H4.75011C3.23132 2 2.00012 3.23122 2.00012 4.75V13.25C2.00012 14.7688 3.23132 16 4.75011 16H13.2501C14.7689 16 16.0001 14.7688 16.0001 13.25V4.75C16.0001 3.23122 14.7689 2 13.2501 2Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M12.2501 13C11.836 13 11.5001 12.6641 11.5001 12.25V5.75C11.5001 5.3359 11.836 5 12.2501 5C12.6642 5 13.0001 5.3359 13.0001 5.75V12.25C13.0001 12.6641 12.6642 13 12.2501 13Z"
          fill={fill}
        />
        <path
          d="M6.50005 12C6.30765 12 6.11625 11.9268 5.96975 11.7803C5.67675 11.4873 5.67675 11.0127 5.96975 10.7198L7.68948 9.00011L5.96975 7.28038C5.67675 6.98738 5.67675 6.51273 5.96975 6.21983C6.26275 5.92693 6.73737 5.92683 7.03027 6.21983L9.28027 8.46983C9.57327 8.76283 9.57327 9.23748 9.28027 9.53038L7.03027 11.7804C6.88377 11.9269 6.69245 12 6.50005 12Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default SidebarRight5Hide;
