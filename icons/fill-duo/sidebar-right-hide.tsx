import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SidebarRightHide({
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
          d="M11.0001 16H14.2501C15.7667 16 17.0001 14.7666 17.0001 13.25V4.75C17.0001 3.2334 15.7667 2 14.2501 2H11.0001V16Z"
          fill={fill}
        />
        <path
          d="M5.75005 12.25C5.55765 12.25 5.36625 12.1768 5.21975 12.0303C4.92675 11.7373 4.92675 11.2627 5.21975 10.9698L7.18948 9.00011L5.21975 7.03038C4.92675 6.73738 4.92675 6.26273 5.21975 5.96983C5.51275 5.67693 5.98737 5.67683 6.28027 5.96983L8.78027 8.46983C9.07327 8.76283 9.07327 9.23748 8.78027 9.53038L6.28027 12.0304C6.13377 12.1769 5.94245 12.25 5.75005 12.25Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default SidebarRightHide;
