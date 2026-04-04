import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function OctagonCheck({
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
          d="M10.968 2.25H7.03301C6.50301 2.25 5.99401 2.461 5.61901 2.836L2.83701 5.618C2.46201 5.993 2.25101 6.502 2.25101 7.032V10.967C2.25101 11.497 2.46201 12.006 2.83701 12.381L5.61901 15.163C5.99401 15.538 6.50301 15.749 7.03301 15.749H10.968C11.498 15.749 12.007 15.538 12.382 15.163L15.164 12.381C15.539 12.006 15.75 11.497 15.75 10.967V7.032C15.75 6.502 15.539 5.993 15.164 5.618L12.382 2.836C12.007 2.461 11.498 2.25 10.968 2.25Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M5.75 9.25L8 11.75L12.25 6.25"
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

export default OctagonCheck;
