import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function MoneyBill({
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
          d="M4.25 9.75C4.664 9.75 5 9.414 5 9C5 8.586 4.664 8.25 4.25 8.25C3.836 8.25 3.5 8.586 3.5 9C3.5 9.414 3.836 9.75 4.25 9.75Z"
          fill={fill}
        />
        <path
          d="M13.75 9.75C14.164 9.75 14.5 9.414 14.5 9C14.5 8.586 14.164 8.25 13.75 8.25C13.336 8.25 13 8.586 13 9C13 9.414 13.336 9.75 13.75 9.75Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default MoneyBill;
