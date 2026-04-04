import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SidebarLeft4Show({
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
          d="M14.2804 8.46975L12.2804 6.46975C11.9874 6.17675 11.5128 6.17675 11.2199 6.46975C10.927 6.76275 10.9269 7.23727 11.2199 7.53017L11.9396 8.2499H9.75012C9.33602 8.2499 9.00012 8.5858 9.00012 8.9999C9.00012 9.414 9.33602 9.7499 9.75012 9.7499H11.9396L11.2199 10.4696C10.9269 10.7626 10.9269 11.2373 11.2199 11.5302C11.3664 11.6767 11.5578 11.7498 11.7502 11.7498C11.9426 11.7498 12.134 11.6767 12.2805 11.5302L14.2805 9.53017C14.5735 9.23717 14.5734 8.76265 14.2804 8.46975Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default SidebarLeft4Show;
