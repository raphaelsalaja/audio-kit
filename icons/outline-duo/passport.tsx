import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Passport({
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
          d="M5.25 1.75H12.75C13.8546 1.75 14.75 2.64543 14.75 3.75V14.25C14.75 15.3546 13.8546 16.25 12.75 16.25H5.25C4.14543 16.25 3.25 15.3546 3.25 14.25V3.75C3.25 2.64543 4.14543 1.75 5.25 1.75ZM10.75 7.5C10.75 8.4665 9.9665 9.25 9 9.25C8.0335 9.25 7.25 8.4665 7.25 7.5C7.25 6.5335 8.0335 5.75 9 5.75C9.9665 5.75 10.75 6.5335 10.75 7.5Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M9 9.25C9.9665 9.25 10.75 8.4665 10.75 7.5C10.75 6.5335 9.9665 5.75 9 5.75C8.0335 5.75 7.25 6.5335 7.25 7.5C7.25 8.4665 8.0335 9.25 9 9.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M12.75 1.75H5.25C4.14543 1.75 3.25 2.64543 3.25 3.75V14.25C3.25 15.3546 4.14543 16.25 5.25 16.25H12.75C13.8546 16.25 14.75 15.3546 14.75 14.25V3.75C14.75 2.64543 13.8546 1.75 12.75 1.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M7 12.25H11"
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

export default Passport;
