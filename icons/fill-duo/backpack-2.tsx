import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Backpack2({
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
          d="M1.5 4.75C1.5 4.33579 1.83579 4 2.25 4H15.75C16.1642 4 16.5 4.33579 16.5 4.75V9.25C16.5 10.7688 15.2688 12 13.75 12H4.25C2.73119 12 1.5 10.7688 1.5 9.25V4.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M2.5 11.3714V14.25C2.5 15.7692 3.73079 17 5.25 17H12.75C14.2692 17 15.5 15.7692 15.5 14.25V11.3714C15.0245 11.7641 14.4148 12 13.75 12H4.25C3.58518 12 2.97547 11.7641 2.5 11.3714Z"
          fill={fill}
        />
        <path
          d="M7.5 12H6V9.75C6 9.33579 6.33579 9 6.75 9C7.16421 9 7.5 9.33579 7.5 9.75V12Z"
          fill={fill}
        />
        <path
          d="M12 12H10.5V9.75C10.5 9.33579 10.8358 9 11.25 9C11.6642 9 12 9.33579 12 9.75V12Z"
          fill={fill}
        />
        <path
          d="M7.5 2.75C7.5 2.61221 7.61221 2.5 7.75 2.5H10.25C10.3878 2.5 10.5 2.61221 10.5 2.75V4H12V2.75C12 1.78379 11.2162 1 10.25 1H7.75C6.78379 1 6 1.78379 6 2.75V4H7.5V2.75Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Backpack2;
