import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function MoneyBills2({
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
          d="M4.25 10.75C4.664 10.75 5 10.414 5 10C5 9.586 4.664 9.25 4.25 9.25C3.836 9.25 3.5 9.586 3.5 10C3.5 10.414 3.836 10.75 4.25 10.75Z"
          fill={fill}
        />
        <path
          d="M13.75 10.75C14.164 10.75 14.5 10.414 14.5 10C14.5 9.586 14.164 9.25 13.75 9.25C13.336 9.25 13 9.586 13 10C13 10.414 13.336 10.75 13.75 10.75Z"
          fill={fill}
        />
        <path
          d="M3 1.75C3 1.33579 3.33579 1 3.75 1H14.25C14.6642 1 15 1.33579 15 1.75C15 2.16421 14.6642 2.5 14.25 2.5H3.75C3.33579 2.5 3 2.16421 3 1.75Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default MoneyBills2;
