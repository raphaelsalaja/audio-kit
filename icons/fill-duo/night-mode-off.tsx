import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function NightModeOff({
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
          d="M14.6568 3.34314C13.2091 1.89543 11.2091 1 9 1C4.58179 1 1 4.58168 1 9C1 11.2091 1.89544 13.2091 3.34314 14.6568L14.6568 3.34314Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M16.0206 5.16137L5.16138 16.0206C6.3009 16.645 7.609 17 9.00001 17C13.4182 17 17 13.4183 17 9C17 7.60898 16.645 6.30088 16.0206 5.16137Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M5.57996 2.5C5.66674 2.20143 5.77046 1.91006 5.89 1.62701C6.84605 1.22324 7.89695 1 8.99999 1C10.7407 1 12.3516 1.55596 13.6647 2.5H5.57996Z"
          fill={fill}
        />
        <path
          d="M14 4H5.2965C5.27433 4.24269 5.263 4.48852 5.263 4.73699C5.263 5.16675 5.29689 5.5886 5.36214 6H12L14 4Z"
          fill={fill}
        />
        <path
          d="M10.5 7.5H5.75296C6.01837 8.22116 6.38469 8.89353 6.83479 9.5H8.49999L10.5 7.5Z"
          fill={fill}
        />
        <path
          d="M9.42438 11.7576C10.5639 12.382 11.872 12.737 13.263 12.737C14.366 12.737 15.4169 12.5138 16.373 12.11C16.524 11.7525 16.6497 11.3818 16.748 11H10.182L9.42438 11.7576Z"
          fill={fill}
        />
        <path
          d="M11.682 9.5H16.9846C16.9948 9.33464 17 9.16792 17 9C17 8.48731 16.9518 7.98588 16.8596 7.5H13.682L11.682 9.5Z"
          fill={fill}
        />
        <path
          d="M15.182 6H16.4185C16.3018 5.71173 16.1688 5.4318 16.0206 5.16137L15.182 6Z"
          fill={fill}
        />
        <path
          d="M16.5303 1.46967C16.8232 1.76256 16.8232 2.23744 16.5303 2.53033L2.53033 16.5303C2.23744 16.8232 1.76256 16.8232 1.46967 16.5303C1.17678 16.2374 1.17678 15.7626 1.46967 15.4697L15.4697 1.46967C15.7626 1.17678 16.2374 1.17678 16.5303 1.46967Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default NightModeOff;
