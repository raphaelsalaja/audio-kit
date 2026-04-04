import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Bottle({
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
          d="M7.25 6.75V4.75H10.75V6.75C10.75 6.75 13.25 7.188 13.25 10V15.75C13.25 16.302 12.802 16.75 12.25 16.75H9H5.75C5.198 16.75 4.75 16.302 4.75 15.75V13.7031H9.24664V9.75H4.75679C4.89973 7.16177 7.25 6.75 7.25 6.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M4.75 9.75H9.25V13.75H4.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M7.25 4.75H10.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9 16.75H12.25C12.802 16.75 13.25 16.302 13.25 15.75V10C13.25 7.188 10.75 6.75 10.75 6.75V2.25C10.75 1.698 10.302 1.25 9.75 1.25H8.25C7.698 1.25 7.25 1.698 7.25 2.25V6.75C7.25 6.75 4.75 7.188 4.75 10V15.75C4.75 16.302 5.198 16.75 5.75 16.75H9Z"
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

export default Bottle;
