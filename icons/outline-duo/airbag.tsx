import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Airbag({
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
          d="M12 9.25C13.7949 9.25 15.25 7.79493 15.25 6C15.25 4.20507 13.7949 2.75 12 2.75C10.2051 2.75 8.75 4.20507 8.75 6C8.75 7.79493 10.2051 9.25 12 9.25Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M12 9.25C13.7949 9.25 15.25 7.79493 15.25 6C15.25 4.20507 13.7949 2.75 12 2.75C10.2051 2.75 8.75 4.20507 8.75 6C8.75 7.79493 10.2051 9.25 12 9.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M3.25 6.75C4.07843 6.75 4.75 6.07843 4.75 5.25C4.75 4.42157 4.07843 3.75 3.25 3.75C2.42157 3.75 1.75 4.42157 1.75 5.25C1.75 6.07843 2.42157 6.75 3.25 6.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M4.69199 8.981L5.94199 11.414C6.28499 12.081 6.97099 12.5 7.72099 12.5H9.64799C10.019 12.5 10.359 12.705 10.532 13.033L12.101 16"
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

export default Airbag;
