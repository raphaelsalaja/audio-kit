import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ChartLineDot({
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
          d="M15 5.25C16.243 5.25 17.25 4.2426 17.25 3C17.25 1.7574 16.243 0.75 15 0.75C13.757 0.75 12.75 1.7574 12.75 3C12.75 4.2426 13.757 5.25 15 5.25Z"
          fill={secondaryfill}
          opacity="0.3"
          stroke="none"
        />
        <path
          d="M12.75 7.75L10.604 9.896C10.409 10.091 10.092 10.091 9.89697 9.896L8.10397 8.103C7.90897 7.908 7.59197 7.908 7.39697 8.103L5.25098 10.249"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.25 8.2435V13.25C15.25 14.355 14.355 15.25 13.25 15.25H4.75C3.645 15.25 2.75 14.355 2.75 13.25V4.75C2.75 3.645 3.645 2.75 4.75 2.75H9.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15 5.25C16.243 5.25 17.25 4.2426 17.25 3C17.25 1.7574 16.243 0.75 15 0.75C13.757 0.75 12.75 1.7574 12.75 3C12.75 4.2426 13.757 5.25 15 5.25Z"
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

export default ChartLineDot;
