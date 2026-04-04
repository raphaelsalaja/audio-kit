import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Bomb2({
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
          d="M13.5 5.657C13.244 5.222 12.857 4.664 12.288 4.106C11.769 3.597 11.255 3.242 10.843 3L9.51 4.333C8.751 3.963 7.901 3.75 7 3.75C3.824 3.75 1.25 6.324 1.25 9.5C1.25 12.676 3.824 15.25 7 15.25C10.176 15.25 12.75 12.676 12.75 9.5C12.75 8.599 12.537 7.749 12.167 6.99C12.701 6.457 12.966 6.191 13.5 5.657Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M12.34 4.15799L13.06 3.43799C13.546 2.95199 14.334 2.95199 14.82 3.43799L15.7 4.31799C16.117 4.73499 16.757 4.79399 17.237 4.49499"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M13.5 5.657C13.244 5.222 12.857 4.664 12.288 4.106C11.769 3.597 11.255 3.242 10.843 3L9.51 4.333C8.751 3.963 7.901 3.75 7 3.75C3.824 3.75 1.25 6.324 1.25 9.5C1.25 12.676 3.824 15.25 7 15.25C10.176 15.25 12.75 12.676 12.75 9.5C12.75 8.599 12.537 7.749 12.167 6.99C12.701 6.457 12.966 6.191 13.5 5.657Z"
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

export default Bomb2;
