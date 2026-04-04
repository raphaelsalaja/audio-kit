import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function GhostSinging({
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
          d="M13.75 6.75101C14.5784 6.75101 15.25 6.07901 15.25 5.25101C15.25 4.42201 14.5784 3.75101 13.75 3.75101C12.9216 3.75101 12.25 4.42201 12.25 5.25101C12.25 6.07901 12.9216 6.75101 13.75 6.75101Z"
          fill={secondaryfill}
          opacity="0.3"
          stroke="none"
        />
        <path
          d="M10.9321 2.77602C10.3518 3.43702 10 4.30301 10 5.25101C10 7.32201 11.6789 9.00101 13.75 9.00101V16.251C12.8367 16.251 12.3916 15.842 11.966 15.451C11.576 15.094 11.2024 14.751 10.5 14.751C9.7616 14.751 9.3708 15.13 8.9822 15.507C8.5977 15.88 8.2152 16.251 7.5 16.251C6.7848 16.251 6.4023 15.88 6.0178 15.507C5.6291 15.13 5.2384 14.751 4.5 14.751C3.7976 14.751 3.424 15.094 3.034 15.451C2.6084 15.842 2.1633 16.251 1.25 16.251V8.00101C1.25 4.54901 4.048 1.75101 7.5 1.75101C8.7676 1.75101 9.947 2.12802 10.9321 2.77602Z"
          fill={secondaryfill}
          fillRule="evenodd"
          opacity="0.3"
          stroke="none"
        />
        <path
          d="M6 11.0006H8C8.276 11.0006 8.5 11.2246 8.5 11.5006C8.5 12.3286 7.828 13.0006 7 13.0006C6.172 13.0006 5.5 12.3286 5.5 11.5006C5.5 11.2246 5.724 11.0006 6 11.0006Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M4.5 10.0006C5.052 10.0006 5.5 9.55261 5.5 9.00061C5.5 8.44861 5.052 8.00061 4.5 8.00061C3.948 8.00061 3.5 8.44861 3.5 9.00061C3.5 9.55261 3.948 10.0006 4.5 10.0006Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M9.5 10.0006C10.052 10.0006 10.5 9.55261 10.5 9.00061C10.5 8.44861 10.052 8.00061 9.5 8.00061C8.948 8.00061 8.5 8.44861 8.5 9.00061C8.5 9.55261 8.948 10.0006 9.5 10.0006Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M13.75 6.75061C14.578 6.75061 15.25 6.07861 15.25 5.25061C15.25 4.42261 14.578 3.75061 13.75 3.75061C12.922 3.75061 12.25 4.42261 12.25 5.25061C12.25 6.07861 12.922 6.75061 13.75 6.75061Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.25 5.25061V0.75061C15.25 0.75061 15.896 1.64661 17.25 2.25061"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M10.2865 2.41521C9.4466 1.99501 8.5029 1.75061 7.5 1.75061C4.048 1.75061 1.25 4.54851 1.25 8.00061V16.2506C3 16.2506 3.031 14.7506 4.5 14.7506C5.969 14.7506 6.062 16.2506 7.5 16.2506C8.938 16.2506 9.031 14.7506 10.5 14.7506C11.969 14.7506 12 16.2506 13.75 16.2506V9.75061"
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

export default GhostSinging;
