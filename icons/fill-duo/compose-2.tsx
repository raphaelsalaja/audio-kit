import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Compose2({
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
          d="M4.75 16C3.23079 16 2 14.7692 2 13.25V4.75C2 3.23672 3.22119 2.00962 4.73221 2.00006C4.73814 2.00002 4.74407 2 4.75 2H13.25C14.7692 2 16 3.23079 16 4.75V13.25C16 14.7692 14.7692 16 13.25 16H4.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M13.3057 1.63367C14.1506 0.788777 15.5215 0.788777 16.3664 1.63367C17.2113 2.47856 17.2113 3.84944 16.3664 4.69433L10.1164 10.9443C9.82658 11.2341 9.44374 11.422 9.10346 11.5492C8.75108 11.6809 8.37486 11.7726 8.04158 11.8369C7.70564 11.9017 7.39651 11.9418 7.17217 11.9658C7.05948 11.9779 6.96689 11.986 6.90146 11.9911C6.64968 12.011 6.40602 11.9667 6.21966 11.7803C6.03287 11.5935 5.98903 11.3506 6.0089 11.0986C6.01406 11.0331 6.02217 10.9405 6.03421 10.8279C6.05819 10.6035 6.0983 10.2944 6.1631 9.95845C6.22739 9.62516 6.31909 9.24895 6.45082 8.89657C6.57803 8.55629 6.76592 8.17344 7.0557 7.88367L13.3057 1.63367Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Compose2;
