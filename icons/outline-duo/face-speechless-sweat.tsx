import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function FaceSpeechlessSweat({
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
          d="M15.353 5.75C16.4 5.75 17.25 4.898 17.25 3.848C17.25 2.403 15.353 0.75 15.353 0.75C15.353 0.75 13.456 2.402 13.456 3.848C13.456 4.899 14.305 5.75 15.353 5.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M11.5361 2.20593C11.341 2.7018 11.206 3.25695 11.206 3.848C11.206 6.13624 13.057 8 15.353 8C15.6328 8 15.906 7.97229 16.17 7.91948C16.2227 8.272 16.25 8.63281 16.25 9C16.25 13.0041 13.0041 16.25 9 16.25C4.99594 16.25 1.75 13.0041 1.75 9C1.75 4.99594 4.99594 1.75 9 1.75C9.89216 1.75 10.7467 1.91115 11.5361 2.20593Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M6 10.5C6.55228 10.5 7 10.0523 7 9.5C7 8.94772 6.55228 8.5 6 8.5C5.44772 8.5 5 8.94772 5 9.5C5 10.0523 5.44772 10.5 6 10.5Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M12 10.5C12.5523 10.5 13 10.0523 13 9.5C13 8.94772 12.5523 8.5 12 8.5C11.4477 8.5 11 8.94772 11 9.5C11 10.0523 11.4477 10.5 12 10.5Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M7.75 12.25H10.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M5 8.25H13"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M11.3 2.129C10.576 1.887 9.805 1.75 9 1.75C4.996 1.75 1.75 4.996 1.75 9C1.75 13.004 4.996 16.25 9 16.25C13.004 16.25 16.25 13.004 16.25 9C16.25 8.717 16.23 8.439 16.198 8.165"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.353 5.75C16.4 5.75 17.25 4.898 17.25 3.848C17.25 2.403 15.353 0.75 15.353 0.75C15.353 0.75 13.456 2.402 13.456 3.848C13.456 4.899 14.305 5.75 15.353 5.75Z"
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

export default FaceSpeechlessSweat;
