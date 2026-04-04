import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CodeBranch({
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
          d="M5.5 5.75C5.5 5.33579 5.16421 5 4.75 5C4.33579 5 4 5.33579 4 5.75V10.75V12.25C4 12.6642 4.33579 13 4.75 13C5.16421 13 5.5 12.6642 5.5 12.25V10.75C5.5 10.0592 6.05921 9.5 6.75 9.5H11.25C12.7692 9.5 14 8.26921 14 6.75V5.75C14 5.33579 13.6642 5 13.25 5C12.8358 5 12.5 5.33579 12.5 5.75V6.75C12.5 7.44079 11.9408 8 11.25 8H6.75C6.29984 8 5.875 8.10807 5.5 8.29968V5.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M4.75 6C6.13071 6 7.25 4.88071 7.25 3.5C7.25 2.11929 6.13071 1 4.75 1C3.36929 1 2.25 2.11929 2.25 3.5C2.25 4.88071 3.36929 6 4.75 6Z"
          fill={fill}
        />
        <path
          d="M4.75 17C6.13071 17 7.25 15.8807 7.25 14.5C7.25 13.1193 6.13071 12 4.75 12C3.36929 12 2.25 13.1193 2.25 14.5C2.25 15.8807 3.36929 17 4.75 17Z"
          fill={fill}
        />
        <path
          d="M13.25 6C14.6307 6 15.75 4.88071 15.75 3.5C15.75 2.11929 14.6307 1 13.25 1C11.8693 1 10.75 2.11929 10.75 3.5C10.75 4.88071 11.8693 6 13.25 6Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default CodeBranch;
