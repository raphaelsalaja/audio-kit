import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ImageBinary({
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
          d="M3.75 3.25C2.64543 3.25 1.75 4.14543 1.75 5.25V12.75C1.75 13.8546 2.64543 14.75 3.75 14.75H4.01185L9.75 9.01185V3.25H3.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M4 14.75L9.75 9"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9.75 14.75H3.75C2.645 14.75 1.75 13.855 1.75 12.75V5.25C1.75 4.145 2.645 3.25 3.75 3.25H9.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M5.75 8.5C6.44036 8.5 7 7.94036 7 7.25C7 6.55964 6.44036 6 5.75 6C5.05964 6 4.5 6.55964 4.5 7.25C4.5 7.94036 5.05964 8.5 5.75 8.5Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M14.75 15.25C15.7165 15.25 16.5 14.1307 16.5 12.75C16.5 11.3693 15.7165 10.25 14.75 10.25C13.7835 10.25 13 11.3693 13 12.75C13 14.1307 13.7835 15.25 14.75 15.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14.75 7.75V2.75C14.75 2.75 14.177 3.758 12.962 3.99"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9.75 1.75V16.25"
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

export default ImageBinary;
