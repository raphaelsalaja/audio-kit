import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Camera2Off({
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
          d="M10 11.182C12.567 11.6721 12.2604 9.55242 12.1602 9.02734L15.7004 5.48151C15.7805 5.69778 16.25 5.5059 16.25 5.75V12.25C16.25 13.3546 15.3546 14.25 14.25 14.25H7.83718L7.4375 13.7578L10 11.182Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M14.25 3.75H3.75C2.64543 3.75 1.75 4.64543 1.75 5.75V12.25C1.75 13.3546 2.64542 14.25 3.74997 14.25L7.6205 10.3795C7.38491 9.97398 7.25 9.50274 7.25 9C7.25 7.48122 8.48122 6.25 10 6.25C10.5027 6.25 10.974 6.38491 11.3795 6.6205L14.25 3.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M14.25 3.75H3.75C2.645 3.75 1.75 4.645 1.75 5.75V12.25C1.75 13.355 2.645 14.25 3.75 14.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M4.25 7C4.66421 7 5 6.66421 5 6.25C5 5.83579 4.66421 5.5 4.25 5.5C3.83579 5.5 3.5 5.83579 3.5 6.25C3.5 6.66421 3.83579 7 4.25 7Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M2 16L16 2"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M7.62 10.379C7.384 9.974 7.25 9.502 7.25 9C7.25 7.481 8.481 6.25 10 6.25C10.503 6.25 10.974 6.385 11.379 6.62"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M4.25 1.25H6.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M8 14.25H14.25C15.355 14.25 16.25 13.355 16.25 12.25V5.9922"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M12.6956 9.5471C12.4777 10.6272 11.6271 11.4777 10.547 11.6956"
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

export default Camera2Off;
