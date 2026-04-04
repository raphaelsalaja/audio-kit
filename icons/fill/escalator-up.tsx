import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function EscalatorUp({
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
          d="M16.537 12.059C16.445 12.021 16.348 12.001 16.25 12.001H12.74C12.326 12.001 11.99 12.337 11.99 12.751C11.99 13.165 12.326 13.501 12.74 13.501H14.44L12.22 15.721C11.927 16.014 11.927 16.489 12.22 16.782C12.366 16.928 12.558 17.002 12.75 17.002C12.942 17.002 13.134 16.929 13.28 16.782L15.5 14.562V16.262C15.5 16.676 15.836 17.012 16.25 17.012C16.664 17.012 17 16.676 17 16.262V12.752C17 12.654 16.98 12.557 16.942 12.465C16.866 12.282 16.72 12.136 16.537 12.059Z"
          fill={secondaryfill}
        />
        <path
          d="M5.5 5.00101C4.3973 5.00101 3.5 4.10371 3.5 3.00101C3.5 1.89831 4.3973 1.00101 5.5 1.00101C6.6027 1.00101 7.5 1.89831 7.5 3.00101C7.5 4.10371 6.6027 5.00101 5.5 5.00101Z"
          fill={secondaryfill}
        />
        <path
          d="M3.5 10.501H4.3633L7.9232 7.1787L6.8716 6.4443C6.457 6.1538 5.9693 6 5.4614 6C4.104 6 3 7.104 3 8.4614V10.5515C3.1656 10.5305 3.3288 10.501 3.5 10.501Z"
          fill={secondaryfill}
        />
        <path
          d="M17.001 7.50101C17.001 6.12031 15.8817 5.00101 14.501 5.00101H13.5386C12.8424 5.00101 12.1722 5.26521 11.6633 5.74011L4.9546 12.001H3.5C2.1193 12.001 1 13.1203 1 14.501C1 15.8817 2.1193 17.001 3.5 17.001H4.4621C5.1588 17.001 5.8295 16.7366 6.3389 16.2613L13.0464 10.001H14.501C15.8817 10.001 17.001 8.88171 17.001 7.50101Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default EscalatorUp;
