import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Money({
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
          d="M3.75 3C2.23079 3 1 4.23079 1 5.75V12.25C1 13.7692 2.23079 15 3.75 15H14.25C15.7692 15 17 13.7692 17 12.25V5.75C17 4.23079 15.7692 3 14.25 3H3.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M9 11.25C10.2431 11.25 11.25 10.2431 11.25 9C11.25 7.75688 10.2431 6.75 9 6.75C7.75688 6.75 6.75 7.75688 6.75 9C6.75 10.2431 7.75688 11.25 9 11.25Z"
          fill={fill}
        />
        <path
          d="M17 7.46909C16.8362 7.48949 16.6693 7.5 16.5 7.5C14.29 7.5 12.5 5.71 12.5 3.5C12.5 3.33066 12.5105 3.16379 12.5309 3H14.25C15.7692 3 17 4.23079 17 5.75V7.46909Z"
          fill={fill}
        />
        <path
          d="M5.5 3.5C5.5 5.71 3.71 7.5 1.5 7.5C1.33066 7.5 1.16379 7.48949 1 7.46909V5.75C1 4.23079 2.23079 3 3.75 3H5.46909C5.48949 3.16379 5.5 3.33066 5.5 3.5Z"
          fill={fill}
        />
        <path
          d="M17 10.5309C16.8362 10.5105 16.6693 10.5 16.5 10.5C14.29 10.5 12.5 12.29 12.5 14.5C12.5 14.6693 12.5105 14.8362 12.5309 15H14.25C15.7692 15 17 13.7692 17 12.25V10.5309Z"
          fill={fill}
        />
        <path
          d="M5.5 14.5C5.5 12.29 3.71 10.5 1.5 10.5C1.33066 10.5 1.16379 10.5105 1 10.5309V12.25C1 13.7692 2.23079 15 3.75 15H5.46909C5.48949 14.8362 5.5 14.6693 5.5 14.5Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Money;
