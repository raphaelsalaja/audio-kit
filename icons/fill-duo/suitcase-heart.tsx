import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SuitcaseHeart({
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
          d="M13.7122 17.4332C13.882 17.5224 14.0803 17.5224 14.2501 17.4332C15.1473 16.9617 17.9811 15.2522 17.9811 12.4725C17.9855 11.2517 17.0074 10.2575 15.7945 10.2501C15.0648 10.2595 14.3865 10.6301 13.9811 11.2408C13.5757 10.6301 12.8974 10.2595 12.1677 10.2501C10.9548 10.2575 9.97669 11.2517 9.98109 12.4725C9.98109 15.2522 12.815 16.9616 13.7122 17.4332Z"
          fill={fill}
        />
        <path
          d="M1 6.75C1 5.23203 2.23054 4 3.75 4H14.25C15.7695 4 17 5.23203 17 6.75V8.95605C16.6256 8.82507 16.2233 8.75271 15.8036 8.75015L15.7894 8.75006L15.7752 8.75025C15.135 8.75849 14.5247 8.92905 13.9895 9.23472C13.4554 8.92428 12.8339 8.74603 12.1585 8.75015C10.1019 8.7627 8.48109 10.4298 8.48109 12.4725C8.48109 13.9012 9.02169 15.0823 9.69641 16H3.75C2.23054 16 1 14.768 1 13.25V6.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
      </g>
    </svg>
  );
}

export default SuitcaseHeart;
