import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function MoneyBills({
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
          d="M3.75 4C2.23079 4 1 5.23079 1 6.75V13.25C1 14.7692 2.23079 16 3.75 16H14.25C15.7692 16 17 14.7692 17 13.25V6.75C17 5.23079 15.7692 4 14.25 4H3.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M9 12.25C10.2431 12.25 11.25 11.2431 11.25 10C11.25 8.75688 10.2431 7.75 9 7.75C7.75688 7.75 6.75 8.75688 6.75 10C6.75 11.2431 7.75688 12.25 9 12.25Z"
          fill={fill}
        />
        <path
          d="M17 8.46909C16.8362 8.48949 16.6693 8.5 16.5 8.5C14.29 8.5 12.5 6.71 12.5 4.5C12.5 4.33066 12.5105 4.16379 12.5309 4H14.25C15.7692 4 17 5.23079 17 6.75V8.46909Z"
          fill={fill}
        />
        <path
          d="M5.5 4.5C5.5 6.71 3.71 8.5 1.5 8.5C1.33066 8.5 1.16379 8.48949 1 8.46909V6.75C1 5.23079 2.23079 4 3.75 4H5.46909C5.48949 4.16379 5.5 4.33066 5.5 4.5Z"
          fill={fill}
        />
        <path
          d="M17 11.5309C16.8362 11.5105 16.6693 11.5 16.5 11.5C14.29 11.5 12.5 13.29 12.5 15.5C12.5 15.6693 12.5105 15.8362 12.5309 16H14.25C15.7692 16 17 14.7692 17 13.25V11.5309Z"
          fill={fill}
        />
        <path
          d="M5.5 15.5C5.5 13.29 3.71 11.5 1.5 11.5C1.33066 11.5 1.16379 11.5105 1 11.5309V13.25C1 14.7692 2.23079 16 3.75 16H5.46909C5.48949 15.8362 5.5 15.6693 5.5 15.5Z"
          fill={fill}
        />
        <path
          d="M2.5 1.75C2.5 1.33579 2.83579 1 3.25 1H14.75C15.1642 1 15.5 1.33579 15.5 1.75C15.5 2.16421 15.1642 2.5 14.75 2.5H3.25C2.83579 2.5 2.5 2.16421 2.5 1.75Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default MoneyBills;
