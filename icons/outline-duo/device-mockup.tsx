import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function DeviceMockup({
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
          d="M1.829 8.70899L5.523 10.674C6.065 10.963 6.717 10.958 7.255 10.662L16.179 5.75599C16.611 5.51899 16.607 4.89699 16.172 4.66499L12.478 2.69999C11.936 2.41099 11.284 2.41599 10.746 2.71199L1.821 7.61799C1.389 7.85499 1.393 8.47699 1.828 8.70899H1.829Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M1.829 8.70899L5.523 10.674C6.065 10.963 6.717 10.958 7.255 10.662L16.179 5.75599C16.611 5.51899 16.607 4.89699 16.172 4.66499L12.478 2.69999C11.936 2.41099 11.284 2.41599 10.746 2.71199L1.821 7.61799C1.389 7.85499 1.393 8.47699 1.828 8.70899H1.829Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M2.462 11.878L1.821 12.23C1.389 12.467 1.393 13.089 1.828 13.321L5.522 15.286C6.064 15.575 6.716 15.57 7.254 15.274L16.178 10.368C16.61 10.131 16.606 9.50901 16.171 9.27701L15.557 8.95001"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default DeviceMockup;
