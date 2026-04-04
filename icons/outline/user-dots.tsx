import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function UserDots({
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
          d="M9 7.25049C10.5188 7.25049 11.75 6.01929 11.75 4.50049C11.75 2.98169 10.5188 1.75049 9 1.75049C7.4812 1.75049 6.25 2.98169 6.25 4.50049C6.25 6.01929 7.4812 7.25049 9 7.25049Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M13 16.0005C12.449 16.0005 12 15.5525 12 15.0005C12 14.4485 12.449 14.0005 13 14.0005C13.551 14.0005 14 14.4485 14 15.0005C14 15.5525 13.551 16.0005 13 16.0005Z"
          fill={secondaryfill}
          stroke="none"
        />
        <path
          d="M10 16.0005C9.449 16.0005 9 15.5525 9 15.0005C9 14.4485 9.449 14.0005 10 14.0005C10.551 14.0005 11 14.4485 11 15.0005C11 15.5525 10.551 16.0005 10 16.0005Z"
          fill={secondaryfill}
          stroke="none"
        />
        <path
          d="M16 16.0005C15.449 16.0005 15 15.5525 15 15.0005C15 14.4485 15.449 14.0005 16 14.0005C16.551 14.0005 17 14.4485 17 15.0005C17 15.5525 16.551 16.0005 16 16.0005Z"
          fill={secondaryfill}
          stroke="none"
        />
        <path
          d="M13.6301 11.8333C12.4901 10.5601 10.8456 9.75049 8.99999 9.75049C6.44899 9.75049 4.26099 11.2805 3.29099 13.4705C2.92599 14.2955 3.37799 15.2444 4.23799 15.5154C4.99589 15.7544 5.91739 15.9712 6.95689 16.1072"
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

export default UserDots;
