import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SidebarLeft3Hide({
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
          d="M5.71979 8.46975L8.21979 5.96975C8.51279 5.67675 8.98738 5.67675 9.28028 5.96975C9.57318 6.26275 9.57328 6.73727 9.28028 7.03017L8.06059 8.2499H12.7501C13.1642 8.2499 13.5001 8.5858 13.5001 8.9999C13.5001 9.414 13.1642 9.7499 12.7501 9.7499H8.06059L9.28028 10.9696C9.57328 11.2626 9.57328 11.7373 9.28028 12.0302C9.13378 12.1767 8.94189 12.2498 8.74999 12.2498C8.55809 12.2498 8.36619 12.1767 8.21969 12.0302L5.71969 9.53017C5.42669 9.23717 5.42679 8.76265 5.71979 8.46975Z"
          fill={fill}
        />
        <path
          d="M3.75009 2H7.00009V5.06836L4.65929 7.40918C4.23399 7.83398 4.00009 8.3989 4.00009 9C4.00009 9.6011 4.23399 10.166 4.65929 10.5908L7.00009 12.9316V16H3.75009C2.23349 16 1.00009 14.7666 1.00009 13.25V4.75C1.00009 3.2334 2.23349 2 3.75009 2Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default SidebarLeft3Hide;
