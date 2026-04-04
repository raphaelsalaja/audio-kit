import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Images2({
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
          d="M6.57821 12.2427L11.7936 7.04964C12.1833 6.66168 12.813 6.66106 13.2034 7.04826L16.25 10.0699V4.75C16.25 3.64543 15.3546 2.75 14.25 2.75H6.75C5.64543 2.75 4.75 3.64543 4.75 4.75V10.25C4.75 11.2967 5.55406 12.1556 6.57821 12.2427Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M6.587 12.243L11.793 7.04301C12.184 6.65201 12.817 6.65201 13.207 7.04301L16.25 10.086"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M1.75 6.75V13.25C1.75 14.355 2.645 15.25 3.75 15.25H12.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M6.75 12.25L14.25 12.25C15.3546 12.25 16.25 11.3546 16.25 10.25V4.75C16.25 3.64543 15.3546 2.75 14.25 2.75L6.75 2.75C5.64543 2.75 4.75 3.64543 4.75 4.75L4.75 10.25C4.75 11.3546 5.64543 12.25 6.75 12.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M8 7C7.449 7 7 6.551 7 6C7 5.449 7.449 5 8 5C8.551 5 9 5.449 9 6C9 6.551 8.551 7 8 7Z"
          fill={fill}
          stroke="none"
        />
      </g>
    </svg>
  );
}

export default Images2;
