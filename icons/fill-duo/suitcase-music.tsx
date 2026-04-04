import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SuitcaseMusic({
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
          d="M17.5594 11.3168C17.1619 11.1366 16.7801 10.9213 16.4227 10.6772C16.0155 10.3994 15.6327 10.0791 15.285 9.7251C15.0711 9.5068 14.7469 9.4409 14.4666 9.5557C14.1844 9.6709 13.9998 9.9453 13.9998 10.25V13.1382C13.764 13.0541 13.514 13 13.2498 13C12.0096 13 10.9998 14.0093 10.9998 15.25C10.9998 16.4907 12.0096 17.5 13.2498 17.5C14.49 17.5 15.4998 16.4907 15.4998 15.25V11.8633C15.5252 11.8809 15.5506 11.8985 15.5769 11.916C16.0046 12.209 16.4636 12.4668 16.9402 12.6831C17.3152 12.854 17.7615 12.6875 17.9324 12.3101C18.1043 11.9327 17.9373 11.4882 17.5594 11.3168Z"
          fill={fill}
        />
        <path
          d="M1 6.75C1 5.23203 2.23054 4 3.75 4H14.25C15.7695 4 17 5.23203 17 6.75V9.24421C16.7729 9.07024 16.5567 8.87921 16.3551 8.67399C15.7142 8.02096 14.745 7.8219 13.8997 8.16693C13.0541 8.51213 12.4998 9.33487 12.4998 10.25V11.5752C10.7897 11.9233 9.49976 13.4375 9.49976 15.25C9.49976 15.5068 9.52565 15.7576 9.57498 16H3.75C2.23054 16 1 14.768 1 13.25V6.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
      </g>
    </svg>
  );
}

export default SuitcaseMusic;
