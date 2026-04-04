import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CircleChevronExpand2({
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
          d="M8.75 7C8.336 7 8 6.664 8 6.25C8 5.836 8.336 5.5 8.75 5.5H11.75C12.164 5.5 12.5 5.836 12.5 6.25V9.25C12.5 9.664 12.164 10 11.75 10C11.336 10 11 9.664 11 9.25V7H8.75Z"
          fill={fill}
        />
        <path
          d="M6.25 12.5C5.836 12.5 5.5 12.164 5.5 11.75V8.75C5.5 8.336 5.836 8 6.25 8C6.664 8 7 8.336 7 8.75V11H9.25C9.664 11 10 11.336 10 11.75C10 12.164 9.664 12.5 9.25 12.5H6.25Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default CircleChevronExpand2;
