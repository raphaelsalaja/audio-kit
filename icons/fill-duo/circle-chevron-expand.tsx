import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CircleChevronExpand({
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
          d="M9 17C13.411 17 17 13.411 17 9C17 4.589 13.411 1 9 1C4.589 1 1 4.589 1 9C1 13.411 4.589 17 9 17Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M7 9.25C7 9.664 6.664 10 6.25 10C5.836 10 5.5 9.664 5.5 9.25V6.25C5.5 5.836 5.836 5.5 6.25 5.5H9.25C9.664 5.5 10 5.836 10 6.25C10 6.664 9.664 7 9.25 7H7V9.25Z"
          fill={fill}
        />
        <path
          d="M12.5 11.75C12.5 12.164 12.164 12.5 11.75 12.5H8.75C8.336 12.5 8 12.164 8 11.75C8 11.336 8.336 11 8.75 11H11V8.75C11 8.336 11.336 8 11.75 8C12.164 8 12.5 8.336 12.5 8.75V11.75Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default CircleChevronExpand;
