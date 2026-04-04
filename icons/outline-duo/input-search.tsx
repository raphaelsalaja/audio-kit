import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function InputSearch({
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
          d="M4 5C2.895 5 2 5.895 2 7V11C2 12.105 2.895 13 4 13H8.612C8.539 12.678 8.5 12.344 8.5 12C8.5 9.515 10.515 7.5 13 7.5C14.0552 7.5 15.025 7.8627 15.7921 8.4707C15.8632 8.527 15.9059 8.48227 16 8.38037V7C16 5.895 15.105 5 14 5H4Z"
          fill={secondaryfill}
          fillRule="evenodd"
          opacity="0.3"
          stroke="none"
        />
        <path
          d="M13 14.25C14.243 14.25 15.25 13.243 15.25 12C15.25 10.757 14.243 9.75 13 9.75C11.757 9.75 10.75 10.757 10.75 12C10.75 13.243 11.757 14.25 13 14.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14.5901 13.59L16.2501 15.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M16.25 7.90918V6.75C16.25 5.645 15.355 4.75 14.25 4.75H3.75C2.645 4.75 1.75 5.645 1.75 6.75V11.25C1.75 12.355 2.645 13.25 3.75 13.25H7.91699"
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

export default InputSearch;
