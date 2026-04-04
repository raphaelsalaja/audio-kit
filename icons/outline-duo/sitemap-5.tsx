import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Sitemap5({
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
          d="M4.75 16.25C5.99264 16.25 7 15.2426 7 14C7 12.7574 5.99264 11.75 4.75 11.75C3.50736 11.75 2.5 12.7574 2.5 14C2.5 15.2426 3.50736 16.25 4.75 16.25Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M13.25 16.25C14.4926 16.25 15.5 15.2426 15.5 14C15.5 12.7574 14.4926 11.75 13.25 11.75C12.0074 11.75 11 12.7574 11 14C11 15.2426 12.0074 16.25 13.25 16.25Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M13.25 11.75V10.75C13.25 9.645 12.355 8.75 11.25 8.75H9H6.75C5.645 8.75 4.75 9.645 4.75 10.75V11.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9 6.25V8.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M4.75 16.25C5.99264 16.25 7 15.2426 7 14C7 12.7574 5.99264 11.75 4.75 11.75C3.50736 11.75 2.5 12.7574 2.5 14C2.5 15.2426 3.50736 16.25 4.75 16.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M13.25 16.25C14.4926 16.25 15.5 15.2426 15.5 14C15.5 12.7574 14.4926 11.75 13.25 11.75C12.0074 11.75 11 12.7574 11 14C11 15.2426 12.0074 16.25 13.25 16.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M10.25 1.75H7.75C7.19772 1.75 6.75 2.19772 6.75 2.75V5.25C6.75 5.80228 7.19772 6.25 7.75 6.25H10.25C10.8023 6.25 11.25 5.80228 11.25 5.25V2.75C11.25 2.19772 10.8023 1.75 10.25 1.75Z"
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

export default Sitemap5;
