import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function OctagonQuestion({
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
          d="M6.92499 6.619C7.31299 5.562 8.21899 5.127 9.10499 5.127C9.99999 5.127 10.923 5.765 10.923 6.935C10.923 8.719 9.10699 8.403 8.82699 10"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M8.79099 11.567C8.23999 11.567 7.79099 12.016 7.79099 12.567C7.79099 13.118 8.23999 13.567 8.79099 13.567C9.34199 13.567 9.79099 13.118 9.79099 12.567C9.79099 12.016 9.34199 11.567 8.79099 11.567Z"
          fill={fill}
          stroke="none"
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

export default OctagonQuestion;
