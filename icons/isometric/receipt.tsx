import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Receipt({
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
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      <g fill="none">
        <path
          d="M16.8944 10.9472L8 6.5V8L13 10.5L16 12V23L18 22V12.7361C18 11.9785 17.572 11.286 16.8944 10.9472Z"
          fill={secondaryfill}
          fillOpacity=".3"
        />
        <path
          d="M20 18L20 7.55087C20 7.17041 19.7841 6.8229 19.443 6.65435L19.3282 6.59762C19.1384 6.50384 18.9237 6.4727 18.7151 6.5087L16.625 6.8694L14.3335 4.20929C14.2545 4.11768 14.158 4.04287 14.0496 3.9893C13.8784 3.9047 13.6847 3.87661 13.4965 3.90909L11.375 4.27521L9.04404 1.56843C8.99207 1.50808 8.92849 1.4588 8.85709 1.42352C8.46233 1.22845 8 1.5157 8 1.95602V7.8694"
          stroke={fill}
          strokeMiterlimit="10"
        />
        <path
          d="M20 16V20.0729C20 20.6411 19.679 21.1605 19.1708 21.4146L16.6708 22.6646C16.2485 22.8757 15.7515 22.8757 15.3292 22.6646L4.82918 17.4146C4.321 17.1605 4 16.6411 4 16.0729V7.61803C4 6.87465 4.78231 6.39116 5.44721 6.72361L15.4472 11.7236C15.786 11.893 16 12.2393 16 12.618V22.5"
          stroke={fill}
          strokeLinecap="round"
        />
        <path d="M7 11.5L12.5 14.25" stroke={fill} strokeLinecap="round" />
        <path
          d="M7 14.375L8.5 15.125L9.25 15.5"
          stroke={fill}
          strokeLinecap="round"
        />
      </g>
    </svg>
  );
}

export default Receipt;
