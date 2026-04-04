import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function UserGlobe({
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
          d="M5.05099 11.25C6.15559 11.25 7.05099 10.355 7.05099 9.25C7.05099 8.145 6.15559 7.25 5.05099 7.25C3.94639 7.25 3.05099 8.145 3.05099 9.25C3.05099 10.355 3.94649 11.25 5.05099 11.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M1.25 16.5C1.775 14.903 3.278 13.75 5.051 13.75C6.824 13.75 8.327 14.903 8.852 16.5"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M11.5 11.75C12.6996 11.75 13.672 9.399 13.672 6.5C13.672 3.601 12.6996 1.25 11.5 1.25C10.3004 1.25 9.328 3.601 9.328 6.5C9.328 9.399 10.3004 11.75 11.5 11.75Z"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M11.5 11.75C14.399 11.75 16.75 9.399 16.75 6.5C16.75 3.601 14.399 1.25 11.5 1.25C9.3059 1.25 7.4459 2.60469 6.6637 4.51819"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M16.735 6.75H9.33099"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default UserGlobe;
