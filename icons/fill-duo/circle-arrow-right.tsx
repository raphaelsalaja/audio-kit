import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CircleArrowRight({
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
          d="M1 9C1 13.411 4.589 17 9 17C13.411 17 17 13.411 17 9C17 4.589 13.411 1 9 1C4.589 1 1 4.589 1 9Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M10.28 5.96999L12.78 8.46999C12.926 8.61599 13 8.80802 13 9.00002C13 9.19202 12.927 9.38405 12.78 9.53005L10.28 12.0301C9.987 12.3231 9.512 12.3231 9.219 12.0301C8.926 11.7371 8.926 11.262 9.219 10.969L10.439 9.74905H5.75C5.336 9.74905 5 9.41305 5 8.99905C5 8.58505 5.336 8.24905 5.75 8.24905H10.439L9.219 7.02902C8.926 6.73602 8.926 6.26104 9.219 5.96804C9.512 5.67504 9.987 5.67504 10.28 5.96804V5.96999Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default CircleArrowRight;
