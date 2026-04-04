import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Sliders({
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
          d="M11 7.5C12.2426 7.5 13.25 6.49264 13.25 5.25C13.25 4.00736 12.2426 3 11 3C9.75736 3 8.75 4.00736 8.75 5.25C8.75 6.49264 9.75736 7.5 11 7.5Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M7 15C8.24264 15 9.25 13.9926 9.25 12.75C9.25 11.5074 8.24264 10.5 7 10.5C5.75736 10.5 4.75 11.5074 4.75 12.75C4.75 13.9926 5.75736 15 7 15Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M13.25 5.25H16.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M1.75 5.25H8.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M11 7.5C12.2426 7.5 13.25 6.49264 13.25 5.25C13.25 4.00736 12.2426 3 11 3C9.75736 3 8.75 4.00736 8.75 5.25C8.75 6.49264 9.75736 7.5 11 7.5Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M4.75 12.75H1.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M16.25 12.75H9.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M7 15C8.24264 15 9.25 13.9926 9.25 12.75C9.25 11.5074 8.24264 10.5 7 10.5C5.75736 10.5 4.75 11.5074 4.75 12.75C4.75 13.9926 5.75736 15 7 15Z"
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

export default Sliders;
