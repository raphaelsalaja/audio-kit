import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function FaceXmark({
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
          d="M11.818 3.00101L11.409 2.59202C11.239 2.42202 11.0088 2.14772 10.8765 1.86532C10.2425 1.68332 9.693 1.75101 9 1.75101C4.996 1.75101 1.75 4.99701 1.75 9.00101C1.75 13.005 4.996 16.251 9 16.251C13.004 16.251 16.25 13.005 16.25 9.00101C16.25 8.30701 16.5271 7.78071 16.3451 7.14571C16.0078 7.04771 15.579 6.76102 15.409 6.59202L15 6.18302L14.591 6.59202C13.712 7.47002 12.288 7.47002 11.409 6.59202C10.53 5.71302 10.53 4.28801 11.409 3.41001L11.818 3.00101Z"
          fill={secondaryfill}
          fillRule="evenodd"
          opacity="0.3"
          stroke="none"
        />
        <path
          d="M11.25 11.7586C10.778 12.5046 9.946 13.0006 9 13.0006C8.054 13.0006 7.222 12.5046 6.75 11.7586"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M6 10.0006C6.552 10.0006 7 9.55261 7 9.00061C7 8.44861 6.552 8.00061 6 8.00061C5.448 8.00061 5 8.44861 5 9.00061C5 9.55261 5.448 10.0006 6 10.0006Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M12 10.0006C12.552 10.0006 13 9.55261 13 9.00061C13 8.44861 12.552 8.00061 12 8.00061C11.448 8.00061 11 8.44861 11 9.00061C11 9.55261 11.448 10.0006 12 10.0006Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M13 1.00061L17 5.00061"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M17 1.00061L13 5.00061"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M10.1456 1.85701C9.7716 1.79501 9.392 1.75061 9 1.75061C4.996 1.75061 1.75 4.99671 1.75 9.00061C1.75 13.0045 4.996 16.2506 9 16.2506C13.004 16.2506 16.25 13.0045 16.25 9.00061C16.25 8.61021 16.2058 8.23232 16.1443 7.86002"
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

export default FaceXmark;
