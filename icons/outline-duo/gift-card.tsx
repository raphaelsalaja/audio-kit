import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function GiftCard({
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
          d="M16.25 12.25V6.75C16.25 5.64543 15.3546 4.75 14.25 4.75L3.75 4.75C2.64543 4.75 1.75 5.64543 1.75 6.75V12.25C1.75 13.3546 2.64543 14.25 3.75 14.25H14.25C15.3546 14.25 16.25 13.3546 16.25 12.25Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M4.5 1.25C3.534 1.25 2.75 2.034 2.75 3C2.75 3.966 3.534 4.75 4.5 4.75H7.25C7.25 4.75 7.047 1.25 4.5 1.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M10 1.25C10.966 1.25 11.75 2.034 11.75 3C11.75 3.966 10.966 4.75 10 4.75H7.25C7.25 4.75 7.453 1.25 10 1.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M7.25 4.75V14.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M1.75 8.25H16.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M16.25 12.25V6.75C16.25 5.64543 15.3546 4.75 14.25 4.75L3.75 4.75C2.64543 4.75 1.75 5.64543 1.75 6.75V12.25C1.75 13.3546 2.64543 14.25 3.75 14.25H14.25C15.3546 14.25 16.25 13.3546 16.25 12.25Z"
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

export default GiftCard;
