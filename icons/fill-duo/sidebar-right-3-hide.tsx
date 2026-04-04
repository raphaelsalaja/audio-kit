import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SidebarRight3Hide({
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
          d="M12.2804 8.46975L9.7804 5.96975C9.4874 5.67675 9.01279 5.67675 8.71989 5.96975C8.42699 6.26275 8.42689 6.73727 8.71989 7.03017L9.93959 8.2499H5.25009C4.83599 8.2499 4.50009 8.5858 4.50009 8.9999C4.50009 9.414 4.83599 9.7499 5.25009 9.7499H9.93959L8.71989 10.9696C8.42689 11.2626 8.42689 11.7373 8.71989 12.0302C8.86639 12.1767 9.05829 12.2498 9.25019 12.2498C9.44209 12.2498 9.63399 12.1767 9.78049 12.0302L12.2805 9.53017C12.5735 9.23717 12.5734 8.76265 12.2804 8.46975Z"
          fill={fill}
        />
        <path
          d="M14.2501 2H11.0001V5.06836L13.3409 7.40918C13.7662 7.83398 14.0001 8.3989 14.0001 9C14.0001 9.6011 13.7662 10.166 13.3409 10.5908L11.0001 12.9316V16H14.2501C15.7667 16 17.0001 14.7666 17.0001 13.25V4.75C17.0001 3.2334 15.7667 2 14.2501 2Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default SidebarRight3Hide;
