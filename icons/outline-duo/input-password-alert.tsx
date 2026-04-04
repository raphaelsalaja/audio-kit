import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function InputPasswordAlert({
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
          d="M4 5C2.895 5 2 5.895 2 7V11C2 12.105 2.895 13 4 13H10.308L12.155 10.084C12.548 9.46398 13.452 9.46398 13.845 10.084L15.356 12.47C15.752 12.105 16 11.581 16 11V7C16 5.895 15.105 5 14 5H4Z"
          fill={secondaryfill}
          fillRule="evenodd"
          opacity="0.3"
          stroke="none"
        />
        <path
          d="M5.5 10C6.052 10 6.5 9.552 6.5 9C6.5 8.448 6.052 8 5.5 8C4.948 8 4.5 8.448 4.5 9C4.5 9.552 4.948 10 5.5 10Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M9 10C9.552 10 10 9.552 10 9C10 8.448 9.552 8 9 8C8.448 8 8 8.448 8 9C8 9.552 8.448 10 9 10Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M15.4999 16.25H15.9329C16.7209 16.25 17.1999 15.381 16.7779 14.715L13.8449 10.084C13.4519 9.46396 12.5479 9.46396 12.1549 10.084L9.22195 14.715C8.79995 15.381 9.27895 16.25 10.0669 16.25H10.4999"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M13 12.75V14.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M13 17.5C13.414 17.5 13.75 17.164 13.75 16.75C13.75 16.336 13.414 16 13 16C12.586 16 12.25 16.336 12.25 16.75C12.25 17.164 12.586 17.5 13 17.5Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M16.25 8.30048V6.75C16.25 5.646 15.355 4.75 14.25 4.75H3.75C2.645 4.75 1.75 5.646 1.75 6.75V11.25C1.75 12.354 2.645 13.25 3.75 13.25H6.6112"
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

export default InputPasswordAlert;
