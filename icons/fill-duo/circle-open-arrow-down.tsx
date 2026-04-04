import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CircleOpenArrowDown({
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
          d="M6.28 8.46997C5.987 8.17697 5.51199 8.17697 5.21899 8.46997C5.07299 8.61597 4.99899 8.808 4.99899 9C4.99899 9.192 5.07199 9.38403 5.21899 9.53003L8.46899 12.78C8.76199 13.073 9.237 13.073 9.53 12.78L12.78 9.53003C13.073 9.23703 13.073 8.76199 12.78 8.46899C12.487 8.17599 12.012 8.17599 11.719 8.46899L9.74899 10.439V1.75C9.74899 1.336 9.41299 1 8.99899 1C8.58499 1 8.24899 1.336 8.24899 1.75V10.439L6.27899 8.46899L6.28 8.46997Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default CircleOpenArrowDown;
