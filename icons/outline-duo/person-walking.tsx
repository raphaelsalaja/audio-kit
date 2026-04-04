import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function PersonWalking({
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
          d="M9.75 3.75C10.5784 3.75 11.25 3.07843 11.25 2.25C11.25 1.42157 10.5784 0.75 9.75 0.75C8.92157 0.75 8.25 1.42157 8.25 2.25C8.25 3.07843 8.92157 3.75 9.75 3.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M9.75 3.75C10.5784 3.75 11.25 3.07843 11.25 2.25C11.25 1.42157 10.5784 0.75 9.75 0.75C8.92157 0.75 8.25 1.42157 8.25 2.25C8.25 3.07843 8.92157 3.75 9.75 3.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9.66899 9.626L10.038 7.169C10.15 6.422 9.57099 5.749 8.81599 5.749C8.20399 5.749 7.68399 6.197 7.59399 6.802L7.17899 9.569C7.06999 10.296 7.36899 11.025 7.95699 11.466L9.77199 12.827C9.92199 12.94 10.038 13.093 10.105 13.268L11.252 16.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M8.38901 5.826L5.46601 6.839C5.17201 6.941 4.94301 7.173 4.84501 7.468L4.25101 9.251"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9.884 6.367L11.49 8.634C11.655 8.867 11.912 9.018 12.196 9.05L14 9.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M6.69199 13.625L6.56199 14.046C6.52099 14.18 6.45099 14.305 6.35899 14.41L4.74899 16.249"
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

export default PersonWalking;
