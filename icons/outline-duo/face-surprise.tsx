import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function FaceSurprise({
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
          d="M16.25 9C16.25 13.0041 13.0041 16.25 9 16.25C4.99594 16.25 1.75 13.0041 1.75 9C1.75 4.99594 4.99594 1.75 9 1.75C13.0041 1.75 16.25 4.99594 16.25 9ZM10.75 11.5C10.75 12.4665 9.9665 13.25 9 13.25C8.0335 13.25 7.25 12.4665 7.25 11.5C7.25 10.5335 8.0335 9.75 9 9.75C9.9665 9.75 10.75 10.5335 10.75 11.5Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M9 16.25C13.0041 16.25 16.25 13.0041 16.25 9C16.25 4.99594 13.0041 1.75 9 1.75C4.99594 1.75 1.75 4.99594 1.75 9C1.75 13.0041 4.99594 16.25 9 16.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9 13.25C9.9665 13.25 10.75 12.4665 10.75 11.5C10.75 10.5335 9.9665 9.75 9 9.75C8.0335 9.75 7.25 10.5335 7.25 11.5C7.25 12.4665 8.0335 13.25 9 13.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M6 9C6.55228 9 7 8.55228 7 8C7 7.44772 6.55228 7 6 7C5.44772 7 5 7.44772 5 8C5 8.55228 5.44772 9 6 9Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M12 9C12.5523 9 13 8.55228 13 8C13 7.44772 12.5523 7 12 7C11.4477 7 11 7.44772 11 8C11 8.55228 11.4477 9 12 9Z"
          fill={fill}
          stroke="none"
        />
      </g>
    </svg>
  );
}

export default FaceSurprise;
