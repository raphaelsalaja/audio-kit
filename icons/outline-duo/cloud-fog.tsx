import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CloudFog({
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
          d="M9 1.75C11.362 1.75 13.278 3.577 13.464 5.891C15.065 6.318 16.25 7.764 16.25 9.5C16.25 10.0333 16.1387 10.5406 15.9379 11H1.84449C1.78281 10.7603 1.75 10.509 1.75 10.25C1.75 8.637 3.027 7.33 4.624 7.263C4.549 6.936 4.5 6.6 4.5 6.25C4.5 3.765 6.515 1.75 9 1.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M1.75 13.25H11.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M8.75 16.25H14.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14.25 13.25H16.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M3.75 16.25H5.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M16.173 10.259C16.223 10.014 16.25 9.76 16.25 9.5C16.25 7.764 15.065 6.318 13.464 5.891C13.278 3.577 11.362 1.75 9 1.75C6.515 1.75 4.5 3.765 4.5 6.25C4.5 6.6 4.549 6.936 4.624 7.263C3.027 7.33 1.75 8.637 1.75 10.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9.705 7C10.392 6.233 11.389 5.75 12.5 5.75C12.833 5.75 13.157 5.809 13.464 5.891"
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

export default CloudFog;
