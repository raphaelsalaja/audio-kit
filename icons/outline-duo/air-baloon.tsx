import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function AirBaloon({
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
          d="M8 1.75C5.218 1.75 2.75 3.562 2.75 6.523C2.75 9.484 5.9 11.7851 5.9 11.7851H8H10.1C10.3842 11.5009 10.4226 11.292 10.4226 10.499C8.8019 10.4579 7.5 9.13054 7.5 7.5C7.5 6.31654 8.18584 5.29278 9.18161 4.80463C9.42768 4.01759 9.91034 3.33515 10.5463 2.84054C11.2729 2.2755 8.25047 1.75 8 1.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M9.5 14.75H6V16.25H9.5V14.75Z"
          fill={fill}
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M10.0919 2.2617C9.3921 1.9394 8.6039 1.75 7.75 1.75C4.968 1.75 2.75 3.562 2.75 6.5229C2.75 9.4838 5.65 11.75 5.65 11.75H9.85C9.85 11.75 10.0834 11.5652 10.4135 11.2412"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.452 5.52C15.228 4.369 14.217 3.5 13 3.5C11.619 3.5 10.5 4.619 10.5 6C9.672 6 9 6.672 9 7.5C9 8.328 9.672 9 10.5 9H15.25C16.216 9 17 8.217 17 7.25C17 6.353 16.322 5.622 15.452 5.52Z"
          fill={fill}
          stroke="none"
        />
      </g>
    </svg>
  );
}

export default AirBaloon;
