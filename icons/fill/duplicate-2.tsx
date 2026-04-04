import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Duplicate2({
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
          d="M10.75 1.5H4.25C2.73122 1.5 1.5 2.73122 1.5 4.25V10.75C1.5 12.2688 2.73122 13.5 4.25 13.5H10.75C12.2688 13.5 13.5 12.2688 13.5 10.75V4.25C13.5 2.73122 12.2688 1.5 10.75 1.5Z"
          fill={fill}
        />
        <path
          d="M16.9697 12.8154L15.9922 6.23482C15.9307 5.82462 15.541 5.537 15.1397 5.6035C14.7305 5.664 14.4473 6.04591 14.5079 6.45561L15.4854 13.0357C15.5352 13.3668 15.4522 13.6963 15.253 13.9644C15.0548 14.2325 14.7637 14.4073 14.4337 14.4561L7.50993 15.4854C7.00113 15.5611 6.50602 15.3213 6.24722 14.8736C6.04112 14.5162 5.58022 14.3946 5.22282 14.6011C4.86442 14.8091 4.74233 15.2681 4.95033 15.6265C5.45033 16.4883 6.35073 16.9995 7.32043 16.9995C7.45613 16.9995 7.59293 16.9892 7.73063 16.9687L14.6535 15.9394C15.3801 15.832 16.0217 15.4477 16.4592 14.8579C16.8957 14.2676 17.0772 13.5425 16.9697 12.8154Z"
          fill={secondaryfill}
        />
      </g>
    </svg>
  );
}

export default Duplicate2;
