import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Bamboo({
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
          d="M11 9C10.775 9.92 10.569 11.133 10.563 12.563C10.557 14.05 10.769 15.308 11 16.25H9H7C7.23 15.307 7.443 14.05 7.437 12.562C7.431 11.133 7.225 9.919 7 9C7.225 8.08 7.431 6.867 7.437 5.438C7.443 3.951 7.231 2.693 7 1.75H11C10.77 2.693 10.557 3.95 10.563 5.438C10.569 6.867 10.775 8.081 11 9Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M11 9C10.775 9.92 10.569 11.133 10.563 12.563C10.557 14.05 10.769 15.308 11 16.25H9H7C7.23 15.307 7.443 14.05 7.437 12.562C7.431 11.133 7.225 9.919 7 9C7.225 8.08 7.431 6.867 7.437 5.438C7.443 3.951 7.231 2.693 7 1.75H11C10.77 2.693 10.557 3.95 10.563 5.438C10.569 6.867 10.775 8.081 11 9Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M11 9H7"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M2 4C3.932 4 5.5 5.568 5.5 7.5C5.5 7.776 5.276 8 5 8C3.068 8 1.5 6.432 1.5 4.5C1.5 4.224 1.724 4 2 4Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M13 12C12.724 12 12.5 11.776 12.5 11.5C12.5 9.568 14.068 8 16 8C16.276 8 16.5 8.224 16.5 8.5C16.5 10.432 14.932 12 13 12Z"
          fill={fill}
          stroke="none"
        />
      </g>
    </svg>
  );
}

export default Bamboo;
