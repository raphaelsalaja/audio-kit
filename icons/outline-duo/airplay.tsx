import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Airplay({
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
          d="M3.8862 13.25H3.75C2.645 13.25 1.75 12.355 1.75 11.25V5.25C1.75 4.145 2.645 3.25 3.75 3.25H14.25C15.355 3.25 16.25 4.145 16.25 5.25V11.25C16.25 12.355 15.355 13.25 14.25 13.25H14.1139"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M8.586 11.659L6.006 15.47C5.781 15.802 6.019 16.25 6.42 16.25H11.58C11.981 16.25 12.219 15.802 11.994 15.47L9.414 11.659C9.216 11.366 8.784 11.366 8.586 11.659Z"
          fill={secondaryfill}
          opacity="0.3"
          stroke="none"
        />
        <path
          d="M8.586 11.659L6.006 15.47C5.781 15.802 6.019 16.25 6.42 16.25H11.58C11.981 16.25 12.219 15.802 11.994 15.47L9.414 11.659C9.216 11.366 8.784 11.366 8.586 11.659Z"
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

export default Airplay;
