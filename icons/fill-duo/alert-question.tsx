import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function AlertQuestion({
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
          d="M8.65811 16C9.20911 16 9.65811 15.551 9.65811 15C9.65811 14.449 9.20911 14 8.65811 14C8.10711 14 7.65811 14.449 7.65811 15C7.65811 15.551 8.10711 16 8.65811 16Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M8.62509 12C8.21099 12 7.87509 11.6641 7.87509 11.25C7.87509 9.0947 9.09139 8.2285 10.0689 7.5327C10.9415 6.9116 11.397 6.5439 11.397 5.6211C11.397 3.5713 9.69389 3.4121 9.17189 3.4121C7.73099 3.4121 6.89749 3.9878 6.29349 5.3989C6.13089 5.7798 5.69099 5.956 5.30909 5.7934C4.92819 5.6308 4.75149 5.1899 4.91459 4.809C5.75979 2.8324 7.11279 1.912 9.17189 1.912C11.0259 1.912 12.897 3.059 12.897 5.621C12.897 7.3603 11.8111 8.1337 10.939 8.7548C10.065 9.3764 9.37499 9.8681 9.37499 11.2499C9.37499 11.664 9.03919 12 8.62509 12Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default AlertQuestion;
