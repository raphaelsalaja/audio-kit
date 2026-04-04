import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function AnimationRepeat({
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
          d="M6.75 4C5.23079 4 4 5.23079 4 6.75V11.25C4 12.7692 5.23079 14 6.75 14H11.25C12.7692 14 14 12.7692 14 11.25V6.75C14 5.23079 12.7692 4 11.25 4H6.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M4 7V11.25C4 12.7692 5.23079 14 6.75 14H11V14.25C11 15.7692 9.76921 17 8.25 17H3.75C2.23079 17 1 15.7692 1 14.25V9.75C1 8.23079 2.23079 7 3.75 7H4Z"
          fill={secondaryfill}
          fillOpacity="0.2"
        />
        <path
          d="M9.75 1C8.23079 1 7 2.23079 7 3.75V8.25C7 9.76921 8.23079 11 9.75 11H14.25C15.7692 11 17 9.76921 17 8.25V3.75C17 2.23079 15.7692 1 14.25 1H9.75Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default AnimationRepeat;
