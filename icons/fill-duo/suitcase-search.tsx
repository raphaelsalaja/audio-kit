import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SuitcaseSearch({
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
          d="M7 2.25C7 2.11221 7.11221 2 7.25 2H10.75C10.8878 2 11 2.11221 11 2.25V4H12.5V2.25C12.5 1.28379 11.7162 0.5 10.75 0.5H7.25C6.28379 0.5 5.5 1.28379 5.5 2.25V4H7V2.25Z"
          fill={fill}
        />
        <path
          d="M13.5 10C11.8433 10 10.5 11.3427 10.5 13C10.5 14.6573 11.8433 16 13.5 16C14.0563 16 14.5773 15.8486 15.024 15.5847L16.2196 16.7804C16.5125 17.0732 16.9874 17.0732 17.2803 16.7804C17.5732 16.4875 17.5732 16.0126 17.2803 15.7197L16.0847 14.5241C16.3486 14.0775 16.5 13.5565 16.5 13C16.5 11.3427 15.1567 10 13.5 10ZM15 13C15 12.1713 14.3285 11.5 13.5 11.5C12.6715 11.5 12 12.1713 12 13C12 13.8287 12.6715 14.5 13.5 14.5C14.3125 14.5 15 13.8086 15 13Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M1 6.75C1 5.23203 2.23054 4 3.75 4H14.25C15.7695 4 17 5.23203 17 6.75V10.1712C16.175 9.15168 14.9135 8.5 13.5 8.5C11.015 8.5 9 10.5141 9 13C9 14.1527 9.43326 15.204 10.1457 16H3.75C2.23054 16 1 14.768 1 13.25V6.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
      </g>
    </svg>
  );
}

export default SuitcaseSearch;
