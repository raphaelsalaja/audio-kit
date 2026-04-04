import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Train({
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
          d="M5.75 12.75L4 17.25"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M12.25 12.75L14 17.25"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M4.75 15.75H13.25"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M5.5764 1.75H12.4235C13.4579 1.75 14.3216 2.53881 14.4153 3.56891L15.0517 10.5689C15.1582 11.7401 14.236 12.75 13.0599 12.75H4.94001C3.76391 12.75 2.8417 11.7402 2.9482 10.5689L3.58461 3.56891C3.67831 2.53871 4.542 1.75 5.5764 1.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M6 11C6.552 11 7 10.552 7 10C7 9.448 6.552 9 6 9C5.448 9 5 9.448 5 10C5 10.552 5.448 11 6 11Z"
          fill={secondaryfill}
          stroke="none"
        />
        <path
          d="M12 11C12.552 11 13 10.552 13 10C13 9.448 12.552 9 12 9C11.448 9 11 9.448 11 10C11 10.552 11.448 11 12 11Z"
          fill={secondaryfill}
          stroke="none"
        />
        <path
          d="M12.2627 7.5L11.9673 4.25H6.03271L5.7373 7.5H12.2627Z"
          fill={secondaryfill}
          stroke="none"
        />
      </g>
    </svg>
  );
}

export default Train;
