import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Decentralize({
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
          d="M9 16.25C8.0335 16.25 7.25 15.466 7.25 14.5C7.25 13.534 8.0335 12.75 9 12.75C9.9665 12.75 10.75 13.534 10.75 14.5C10.75 15.466 9.9665 16.25 9 16.25Z"
          fill={secondaryfill}
          opacity="0.3"
          stroke="none"
        />
        <path
          d="M14.5 14.25C13.5335 14.25 12.75 13.466 12.75 12.5C12.75 11.534 13.5335 10.75 14.5 10.75C15.4665 10.75 16.25 11.534 16.25 12.5C16.25 13.466 15.4665 14.25 14.5 14.25Z"
          fill={secondaryfill}
          opacity="0.3"
          stroke="none"
        />
        <path
          d="M3.5 14.25C4.4665 14.25 5.25 13.466 5.25 12.5C5.25 11.534 4.4665 10.75 3.5 10.75C2.5335 10.75 1.75 11.534 1.75 12.5C1.75 13.466 2.5335 14.25 3.5 14.25Z"
          fill={secondaryfill}
          opacity="0.3"
          stroke="none"
        />
        <path
          d="M9 8.25C9.966 8.25 10.75 7.466 10.75 6.5C10.75 5.534 9.966 4.75 9 4.75C8.034 4.75 7.25 5.534 7.25 6.5C7.25 7.466 8.034 8.25 9 8.25Z"
          fill={secondaryfill}
          opacity="0.3"
          stroke="none"
        />
        <path
          d="M9 16.25C8.0335 16.25 7.25 15.466 7.25 14.5C7.25 13.534 8.0335 12.75 9 12.75C9.9665 12.75 10.75 13.534 10.75 14.5C10.75 15.466 9.9665 16.25 9 16.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14.5 14.25C13.5335 14.25 12.75 13.466 12.75 12.5C12.75 11.534 13.5335 10.75 14.5 10.75C15.4665 10.75 16.25 11.534 16.25 12.5C16.25 13.466 15.4665 14.25 14.5 14.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9 10.75V12.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M13.25 7.75L14.2072 8.70749C14.3947 8.89499 14.5 9.14929 14.5 9.41449V10.5189"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M3.5 14.25C4.4665 14.25 5.25 13.466 5.25 12.5C5.25 11.534 4.4665 10.75 3.5 10.75C2.5335 10.75 1.75 11.534 1.75 12.5C1.75 13.466 2.5335 14.25 3.5 14.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M13.4034 4.7644C12.708 3.0041 11.0073 1.75 8.99995 1.75C6.99265 1.75 5.29196 3.0042 4.59656 4.7644"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M4.75 7.75L3.7928 8.70749C3.6053 8.89499 3.5 9.14929 3.5 9.41449V10.5189"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9 8.25C9.966 8.25 10.75 7.466 10.75 6.5C10.75 5.534 9.966 4.75 9 4.75C8.034 4.75 7.25 5.534 7.25 6.5C7.25 7.466 8.034 8.25 9 8.25Z"
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

export default Decentralize;
