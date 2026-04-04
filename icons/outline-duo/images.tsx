import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Images({
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
          d="M4.25 4.75H13.75C14.8546 4.75 15.75 5.64543 15.75 6.75V12.5108L12.709 9.42034C11.9308 8.62949 10.6576 8.62323 9.87171 9.40638L4.0205 15.237C3.02402 15.1231 2.25 14.277 2.25 13.25V6.75C2.25 5.64543 3.14543 4.75 4.25 4.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M4 15.25L9.836 9.414C10.617 8.633 11.883 8.633 12.664 9.414L15.75 12.5"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M13.75 4.75H4.25C3.14543 4.75 2.25 5.64543 2.25 6.75V13.25C2.25 14.3546 3.14543 15.25 4.25 15.25H13.75C14.8546 15.25 15.75 14.3546 15.75 13.25V6.75C15.75 5.64543 14.8546 4.75 13.75 4.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M4.75 1.75H13.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M5.75 9.5C6.44036 9.5 7 8.94036 7 8.25C7 7.55964 6.44036 7 5.75 7C5.05964 7 4.5 7.55964 4.5 8.25C4.5 8.94036 5.05964 9.5 5.75 9.5Z"
          fill={fill}
          stroke="none"
        />
      </g>
    </svg>
  );
}

export default Images;
