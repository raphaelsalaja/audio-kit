import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function TableColsMerge({
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
          d="M13.2501 2C14.7667 2 16.0001 3.2334 16.0001 4.75V13.25C16.0001 14.7666 14.7667 16 13.2501 16H9.00012V9V2H13.2501Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M14.0304 8.46975L11.7804 6.21975C11.4874 5.92675 11.0128 5.92675 10.7199 6.21975C10.427 6.51275 10.4269 6.98727 10.7199 7.28017L11.6896 8.2499H9.00012V9.7499H11.6896L10.7199 10.7196C10.4269 11.0126 10.4269 11.4873 10.7199 11.7802C10.8664 11.9267 11.0578 11.9998 11.2502 11.9998C11.4426 11.9998 11.634 11.9267 11.7805 11.7802L14.0305 9.53017C14.3235 9.23717 14.3234 8.76265 14.0304 8.46975Z"
          fill={fill}
        />
        <path
          d="M2.00012 4.75V13.25C2.00012 14.7666 3.23352 16 4.75012 16H9.00012V9.75H6.31061L7.28032 10.7197C7.57332 11.0127 7.57332 11.4873 7.28032 11.7802C6.98732 12.0731 6.51272 12.0732 6.21982 11.7802L3.96982 9.53015C3.82332 9.38365 3.75012 9.19178 3.75012 8.99988C3.75012 8.80798 3.82332 8.6161 3.96982 8.4696L6.21982 6.2196C6.51282 5.9266 6.98742 5.9266 7.28032 6.2196C7.57322 6.5126 7.57332 6.98725 7.28032 7.28015L6.31061 8.24976H9.00012V1.99976H4.75012C3.23352 1.99976 2.00012 3.2334 2.00012 4.75Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default TableColsMerge;
