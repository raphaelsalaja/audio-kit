import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function FacePouting({
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
          d="M9 16.25C13.0041 16.25 16.25 13.0041 16.25 9C16.25 4.99594 13.0041 1.75 9 1.75C4.99594 1.75 1.75 4.99594 1.75 9C1.75 13.0041 4.99594 16.25 9 16.25Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M6.103 13.243C6.257 13.397 6.469 13.464 6.686 13.432C8.218 13.193 9.798 13.194 11.324 13.433C11.538 13.465 11.745 13.398 11.896 13.248C12.05 13.095 12.123 12.872 12.089 12.65C11.859 11.139 10.531 9.99899 9 9.99899C7.469 9.99899 6.14 11.14 5.911 12.653C5.878 12.869 5.95 13.089 6.103 13.242V13.243Z"
          fill={fill}
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
          d="M6 9.5C6.55228 9.5 7 9.05228 7 8.5C7 7.94772 6.55228 7.5 6 7.5C5.44772 7.5 5 7.94772 5 8.5C5 9.05228 5.44772 9.5 6 9.5Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M12 9.5C12.5523 9.5 13 9.05228 13 8.5C13 7.94772 12.5523 7.5 12 7.5C11.4477 7.5 11 7.94772 11 8.5C11 9.05228 11.4477 9.5 12 9.5Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M4.5 7L7.25 8"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M13.5 7L10.75 8"
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

export default FacePouting;
