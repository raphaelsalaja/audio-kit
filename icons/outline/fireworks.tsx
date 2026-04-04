import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Fireworks({
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
          d="M6 11H8C8.276 11 8.5 11.224 8.5 11.5C8.5 12.328 7.828 13 7 13C6.172 13 5.5 12.328 5.5 11.5C5.5 11.224 5.724 11 6 11Z"
          fill={secondaryfill}
          stroke="none"
        />
        <path
          d="M4.5 10C5.052 10 5.5 9.552 5.5 9C5.5 8.448 5.052 8 4.5 8C3.948 8 3.5 8.448 3.5 9C3.5 9.552 3.948 10 4.5 10Z"
          fill={secondaryfill}
          stroke="none"
        />
        <path
          d="M9.5 10C10.052 10 10.5 9.552 10.5 9C10.5 8.448 10.052 8 9.5 8C8.948 8 8.5 8.448 8.5 9C8.5 9.552 8.948 10 9.5 10Z"
          fill={secondaryfill}
          stroke="none"
        />
        <path
          d="M13.75 6.75C14.578 6.75 15.25 6.078 15.25 5.25C15.25 4.422 14.578 3.75 13.75 3.75C12.922 3.75 12.25 4.422 12.25 5.25C12.25 6.078 12.922 6.75 13.75 6.75Z"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.25 5.25V0.75C15.25 0.75 15.896 1.646 17.25 2.25"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M10.2865 2.4146C9.4466 1.9944 8.5029 1.75 7.5 1.75C4.048 1.75 1.25 4.5479 1.25 8V16.25C3 16.25 3.031 14.75 4.5 14.75C5.969 14.75 6.062 16.25 7.5 16.25C8.938 16.25 9.031 14.75 10.5 14.75C11.969 14.75 12 16.25 13.75 16.25V9.75"
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

export default Fireworks;
