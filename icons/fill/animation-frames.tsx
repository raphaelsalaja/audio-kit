import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function AnimationFrames({
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
          d="M10 6.75C10 5.78393 10.7833 5 11.75 5H16V13H11.75C10.7833 13 10 12.2161 10 11.25V9V6.75Z"
          fill={secondaryfill}
        />
        <path
          d="M8 6.75C8 5.78393 7.21666 5 6.25 5H2V13H6.25C7.21666 13 8 12.2161 8 11.25V9V6.75Z"
          fill={secondaryfill}
        />
        <path
          d="M1 4.75C1 3.23069 2.23128 2 3.75 2H14.25C15.7687 2 17 3.23069 17 4.75V13.25C17 14.7693 15.7687 16 14.25 16H3.75C2.23128 16 1 14.7693 1 13.25V4.75ZM3.75 3.5C3.05952 3.5 2.5 4.05931 2.5 4.75V13.25C2.5 13.9407 3.05952 14.5 3.75 14.5H14.25C14.9405 14.5 15.5 13.9407 15.5 13.25V4.75C15.5 4.05931 14.9405 3.5 14.25 3.5H3.75Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default AnimationFrames;
