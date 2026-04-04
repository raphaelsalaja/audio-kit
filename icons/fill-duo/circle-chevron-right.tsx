import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CircleChevronRight({
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
          d="M17 9C17 4.589 13.411 1 9 1C4.589 1 1 4.589 1 9C1 13.411 4.589 17 9 17C13.411 17 17 13.411 17 9Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M7.47 6.53003C7.177 6.23703 7.177 5.76199 7.47 5.46899C7.616 5.32299 7.808 5.24902 8 5.24902C8.192 5.24902 8.384 5.32199 8.53 5.46899L11.53 8.46899C11.823 8.76199 11.823 9.23703 11.53 9.53003L8.53 12.53C8.237 12.823 7.762 12.823 7.469 12.53C7.176 12.237 7.176 11.762 7.469 11.469L9.939 8.99902L7.469 6.52899L7.47 6.53003Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default CircleChevronRight;
