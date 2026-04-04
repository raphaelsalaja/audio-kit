import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SuitcaseShield({
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
          d="M11.75 5.5C11.336 5.5 11 5.164 11 4.75V2.25C11 2.112 10.888 2 10.75 2H7.25C7.112 2 7 2.112 7 2.25V4.75C7 5.164 6.664 5.5 6.25 5.5C5.836 5.5 5.5 5.164 5.5 4.75V2.25C5.5 1.285 6.285 0.5 7.25 0.5H10.75C11.715 0.5 12.5 1.285 12.5 2.25V4.75C12.5 5.164 12.164 5.5 11.75 5.5Z"
          fill={fill}
        />
        <path
          d="M17.561 10.317L14.811 9.067C14.614 8.97701 14.387 8.97701 14.19 9.067L11.44 10.317C11.172 10.439 11.001 10.706 11.001 11V13.94C11.001 15.99 13.961 16.878 14.299 16.972C14.365 16.991 14.433 17 14.501 17C14.569 17 14.637 16.991 14.703 16.972C15.04 16.878 18.001 15.99 18.001 13.94V11C18.001 10.706 17.828 10.439 17.561 10.317ZM16.5 13.94C16.5 14.549 15.373 15.176 14.5 15.465V10.573L16.5 11.482V13.94Z"
          fill={secondaryfill}
        />
        <path
          d="M10.1492 16C9.77025 15.4474 9.50098 14.7651 9.50098 13.94V11C9.50098 10.1205 10.0133 9.31837 10.8185 8.9518L13.5667 7.70262L13.5683 7.7019C14.1602 7.43206 14.8407 7.43205 15.4326 7.70186L15.4342 7.70262L17 8.41433V6.75C17 5.233 15.767 4 14.25 4H3.75C2.233 4 1 5.233 1 6.75V13.25C1 14.767 2.233 16 3.75 16H10.1492Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default SuitcaseShield;
