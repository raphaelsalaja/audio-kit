import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function BaseballCap({
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
          d="M2.937 6.647L2.75 10.75C4.267 10.317 6.411 9.875 9 9.875C11.589 9.875 13.733 10.317 15.25 10.75L15.063 6.647C15.02 5.682 14.521 4.794 13.709 4.271C12.62 3.57 10.933 2.75 9 2.75C7.067 2.75 5.38 3.57 4.291 4.271C3.48 4.794 2.981 5.682 2.937 6.647Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M2.75 10.75L2.937 6.647C2.981 5.682 3.48 4.794 4.291 4.271C5.38 3.57 7.067 2.75 9 2.75C10.933 2.75 12.62 3.57 13.709 4.271C14.521 4.794 15.02 5.682 15.063 6.647L15.25 10.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9 2.75C9.605 2.75 10.182 2.836 10.728 2.969C10.737 2.896 10.75 2.825 10.75 2.75C10.75 1.783 9.966 1 9 1C8.034 1 7.25 1.783 7.25 2.75C7.25 2.825 7.263 2.896 7.272 2.969C7.818 2.837 8.395 2.75 9 2.75Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M9 2.75C5.917 4.5 6.25 4.604 6.25 10.043"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9 2.75C12.083 4.5 11.75 4.604 11.75 10.043"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M2.75 10.75C4.267 10.317 6.411 9.875 9 9.875C11.589 9.875 13.733 10.317 15.25 10.75L15.884 13.604C16.046 14.331 15.392 14.972 14.67 14.789C13.15 14.404 11.227 14.083 9 14.083C7.582 14.083 5.615 14.214 3.351 14.784C2.623 14.967 1.953 14.336 2.115 13.603L2.749 10.749L2.75 10.75Z"
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

export default BaseballCap;
