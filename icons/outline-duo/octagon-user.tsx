import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function OctagonUser({
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
          d="M10.968 2.25H7.03301C6.50301 2.25 5.99401 2.461 5.61901 2.836L2.83701 5.618C2.46201 5.993 2.25101 6.502 2.25101 7.032V10.967C2.25101 11.497 2.46201 12.006 2.83701 12.381L5.2702 14.8142C5.84697 13.3169 7.29942 12.2545 9 12.2545C10.7009 12.2545 12.1535 13.3172 12.7301 14.8149L15.164 12.381C15.539 12.006 15.75 11.497 15.75 10.967V7.032C15.75 6.502 15.539 5.993 15.164 5.618L12.382 2.836C12.007 2.461 11.498 2.25 10.968 2.25ZM9 9.75C10.1046 9.75 11 8.85457 11 7.75C11 6.64543 10.1046 5.75 9 5.75C7.89543 5.75 7 6.64543 7 7.75C7 8.85457 7.89543 9.75 9 9.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M9 9.75C10.1046 9.75 11 8.85457 11 7.75C11 6.64543 10.1046 5.75 9 5.75C7.89543 5.75 7 6.64543 7 7.75C7 8.85457 7.89543 9.75 9 9.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M5.26599 14.812C5.84399 13.313 7.29699 12.25 8.99999 12.25C10.703 12.25 12.156 13.313 12.734 14.812"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M10.968 2.25H7.03301C6.50301 2.25 5.99401 2.461 5.61901 2.836L2.83701 5.618C2.46201 5.993 2.25101 6.502 2.25101 7.032V10.967C2.25101 11.497 2.46201 12.006 2.83701 12.381L5.61901 15.163C5.99401 15.538 6.50301 15.749 7.03301 15.749H10.968C11.498 15.749 12.007 15.538 12.382 15.163L15.164 12.381C15.539 12.006 15.75 11.497 15.75 10.967V7.032C15.75 6.502 15.539 5.993 15.164 5.618L12.382 2.836C12.007 2.461 11.498 2.25 10.968 2.25Z"
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

export default OctagonUser;
