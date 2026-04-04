import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Headphones4({
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
          d="M1.5 12.75C1.5 10.6789 3.17877 9 5.25 9C6.21607 9 7 9.78334 7 10.75V14.75C7 15.7167 6.21607 16.5 5.25 16.5C3.17877 16.5 1.5 14.8211 1.5 12.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M11 10.75C11 9.78334 11.7839 9 12.75 9C14.8212 9 16.5 10.6789 16.5 12.75C16.5 14.8211 14.8212 16.5 12.75 16.5C11.7839 16.5 11 15.7167 11 14.75V10.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M1.5 9C1.5 4.85789 4.85778 1.5 9 1.5C13.1422 1.5 16.5 4.85789 16.5 9V12.75C16.5 11.5231 15.9109 10.4338 15 9.74966V9C15 5.68631 12.3138 3 9 3C5.68622 3 3 5.68631 3 9V9.74966C2.08914 10.4338 1.5 11.5231 1.5 12.75V9Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Headphones4;
