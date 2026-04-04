import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function NightMode({
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
          d="M1 9C1 4.58168 4.58179 1 9 1C13.4182 1 17 4.58168 17 9C17 13.4183 13.4182 17 9 17C4.58179 17 1 13.4183 1 9Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M6.83479 9.5C6.38469 8.89353 6.01837 8.22116 5.75296 7.5H16.8596C16.9518 7.98588 17 8.48731 17 9C17 9.16792 16.9948 9.33464 16.9846 9.5H6.83479Z"
          fill={fill}
        />
        <path
          d="M8.2851 11C9.65128 12.0873 11.3813 12.737 13.263 12.737C14.366 12.737 15.4169 12.5138 16.373 12.11C16.524 11.7525 16.6497 11.3818 16.748 11H8.2851Z"
          fill={fill}
        />
        <path
          d="M5.57996 2.5C5.66674 2.20143 5.77046 1.91006 5.89 1.62701C6.84605 1.22324 7.89695 1 8.99999 1C10.7407 1 12.3516 1.55596 13.6647 2.5H5.57996Z"
          fill={fill}
        />
        <path
          d="M5.2965 4C5.27433 4.24269 5.263 4.48852 5.263 4.73699C5.263 5.16675 5.29689 5.5886 5.36214 6H16.4185C16.1247 5.27433 15.7276 4.60158 15.2454 4H5.2965Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default NightMode;
