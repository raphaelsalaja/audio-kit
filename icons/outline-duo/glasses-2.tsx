import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Glasses2({
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
          d="M12.889 14.25H13.679C15.016 14.25 16.116 13.199 16.176 11.864L16.246 10.319C16.285 9.46501 15.603 8.75101 14.748 8.75101H11.819C10.964 8.75101 10.282 9.46501 10.321 10.319L10.391 11.864C10.452 13.199 11.552 14.25 12.888 14.25H12.889Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M5.111 14.25H4.321C2.984 14.25 1.884 13.199 1.824 11.864L1.754 10.319C1.715 9.46501 2.397 8.75101 3.252 8.75101H6.181C7.036 8.75101 7.718 9.46501 7.679 10.319L7.609 11.864C7.548 13.199 6.447 14.25 5.111 14.25Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M7.75 10.25H10.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M6.39901 4.115C5.31901 3.355 3.81101 3.832 3.36501 5.076L1.86201 9.404C1.78901 9.615 1.75101 9.837 1.75101 10.06V10.2"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M11.601 4.115C12.681 3.355 14.189 3.832 14.635 5.076L16.138 9.404C16.211 9.615 16.249 9.837 16.249 10.06V10.2"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M12.889 14.25H13.679C15.016 14.25 16.116 13.199 16.176 11.864L16.246 10.319C16.285 9.46501 15.603 8.75101 14.748 8.75101H11.819C10.964 8.75101 10.282 9.46501 10.321 10.319L10.391 11.864C10.452 13.199 11.552 14.25 12.888 14.25H12.889Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M5.111 14.25H4.321C2.984 14.25 1.884 13.199 1.824 11.864L1.754 10.319C1.715 9.46501 2.397 8.75101 3.252 8.75101H6.181C7.036 8.75101 7.718 9.46501 7.679 10.319L7.609 11.864C7.548 13.199 6.447 14.25 5.111 14.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default Glasses2;
