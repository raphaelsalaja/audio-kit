import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SidebarLeft2Show({
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
          d="M13.7804 8.46975L11.5304 6.21975C11.2374 5.92675 10.7628 5.92675 10.4699 6.21975C10.177 6.51275 10.1769 6.98727 10.4699 7.28017L11.4396 8.2499H7.25009C6.83599 8.2499 6.50009 8.5858 6.50009 8.9999C6.50009 9.414 6.83599 9.7499 7.25009 9.7499H11.4396L10.4699 10.7196C10.1769 11.0126 10.1769 11.4873 10.4699 11.7802C10.6164 11.9267 10.8083 11.9998 11.0002 11.9998C11.1921 11.9998 11.384 11.9267 11.5305 11.7802L13.7805 9.53017C14.0735 9.23717 14.0734 8.76265 13.7804 8.46975Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default SidebarLeft2Show;
