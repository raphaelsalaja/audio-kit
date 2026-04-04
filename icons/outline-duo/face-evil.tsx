import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function FaceEvil({
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
          d="M9 16.2506C13.004 16.2506 16.25 13.0047 16.25 9.00061C16.25 4.99651 13.004 1.75061 9 1.75061C4.996 1.75061 1.75 4.99651 1.75 9.00061C1.75 13.0047 4.996 16.2506 9 16.2506Z"
          fill={secondaryfill}
          opacity="0.3"
          stroke="none"
        />
        <path
          d="M5.00003 2.95361C4.56003 2.87761 3.89702 2.70661 3.18802 2.29261C2.31502 1.78261 1.78104 1.14361 1.50104 0.75061C1.38504 1.27261 1.21304 2.39561 1.64704 3.68861C1.92604 4.52061 2.35403 5.11661 2.66303 5.47961L5.00003 2.95361Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M13 2.95361C13.44 2.87761 14.103 2.70661 14.812 2.29261C15.685 1.78261 16.219 1.14361 16.499 0.75061C16.615 1.27261 16.787 2.39561 16.353 3.68861C16.074 4.52061 15.646 5.11661 15.337 5.47961L13 2.95361Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M13 2.95361C13.44 2.87761 14.103 2.70661 14.812 2.29261C15.685 1.78261 16.219 1.14361 16.5 0.75061C16.616 1.27261 16.788 2.39561 16.354 3.68861C16.075 4.52061 15.647 5.11661 15.338 5.47961"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M5.00003 2.95361C4.56003 2.87761 3.89702 2.70661 3.18802 2.29261C2.31502 1.78261 1.78104 1.14361 1.50104 0.75061C1.38504 1.27261 1.21304 2.39561 1.64704 3.68861C1.92604 4.52061 2.35403 5.11661 2.66303 5.47961"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9 16.2506C13.004 16.2506 16.25 13.0047 16.25 9.00061C16.25 4.99651 13.004 1.75061 9 1.75061C4.996 1.75061 1.75 4.99651 1.75 9.00061C1.75 13.0047 4.996 16.2506 9 16.2506Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
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
          d="M6 10.0006C6.552 10.0006 7 9.55291 7 9.00061C7 8.44831 6.552 8.00061 6 8.00061C5.448 8.00061 5 8.44831 5 9.00061C5 9.55291 5.448 10.0006 6 10.0006Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M12 10.0006C12.552 10.0006 13 9.55291 13 9.00061C13 8.44831 12.552 8.00061 12 8.00061C11.448 8.00061 11 8.44831 11 9.00061C11 9.55291 11.448 10.0006 12 10.0006Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M4.5 7.50061L7.25 8.50061"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M13.5 7.50061L10.75 8.50061"
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

export default FaceEvil;
