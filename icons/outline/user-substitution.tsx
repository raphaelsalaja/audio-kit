import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function UserSubstitution({
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
          d="M6.80701 7.25049C8.05001 7.25049 9.05701 6.24349 9.05701 5.00049C9.05701 3.75749 8.05001 2.7505 6.80701 2.7505C5.56401 2.7505 4.55701 3.75749 4.55701 5.00049C4.55701 6.24349 5.56401 7.25049 6.80701 7.25049Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.25 6.25049L17.25 8.25049L15.25 10.2505"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M17.25 8.25049H12.25"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M13.25 11.2505L11.25 13.2505L13.25 15.2505"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M11.25 13.2505H16.25"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9.6709 10.5874C8.8353 10.0686 7.86351 9.75049 6.80701 9.75049C4.66201 9.75049 2.80701 10.9795 1.90101 12.7705C1.50101 13.5615 1.929 14.5273 2.767 14.8184C3.798 15.1766 5.17501 15.5015 6.80701 15.5015C7.63461 15.5015 8.36571 15.4004 9.04621 15.2698"
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

export default UserSubstitution;
