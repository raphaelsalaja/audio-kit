import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SquareCode({
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
          d="M4.75 2.75C4.88968 2.75 6.83668 2.736 6.66951 3.14167C6.33368 3.95663 6.49685 4.92883 7.15901 5.59099L9.40901 7.84099C10.258 8.68995 11.6166 8.71866 12.5 7.92713C13.1724 8.52958 14.1201 8.65686 14.9088 8.30897C15.173 8.19244 15.25 8.62932 15.25 8.7781V13.25C15.25 14.3546 14.3546 15.25 13.25 15.25H4.75C3.64543 15.25 2.75 14.3546 2.75 13.25V4.75C2.75 3.64543 3.64543 2.75 4.75 2.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M14 6.25L16.25 4L14 1.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M6.0225 2.75H4.75C3.645 2.75 2.75 3.646 2.75 4.75V13.25C2.75 14.354 3.645 15.25 4.75 15.25H13.25C14.355 15.25 15.25 14.354 15.25 13.25V8.97748"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M11 6.25L8.75 4L11 1.75"
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

export default SquareCode;
