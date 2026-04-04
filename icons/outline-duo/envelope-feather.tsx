import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function EnvelopeFeather({
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
          d="M14.25 3.25H3.75C2.6454 3.25 1.75 4.1454 1.75 5.25V5.75L8.517 9.483C8.8176 9.6488 9.1824 9.6488 9.483 9.483L16.25 5.75V5.25C16.25 4.1454 15.3546 3.25 14.25 3.25Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M1.75 5.75L8.517 9.483C8.818 9.649 9.182 9.649 9.483 9.483L16.25 5.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M16.25 7.85001V5.25C16.25 4.146 15.355 3.25 14.25 3.25H3.75C2.645 3.25 1.75 4.146 1.75 5.25V12.75C1.75 13.854 2.645 14.75 3.75 14.75H8.2774"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M17.2629 10.7364C15.544 12.3051 18.0473 16.8444 11.2218 15.5093C12.8239 11.3205 16.1448 10.7531 17.2629 10.7364Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M10.75 17.25C10.75 17.25 11.432 11.259 17.25 10.75C15.82 12.44 17.25 15.75 13.5 15.75"
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

export default EnvelopeFeather;
