import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function MagnifierSlash({
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
          d="M3.33058 3.33058C5.77131 0.889851 9.72869 0.889851 12.1694 3.33058L3.33058 12.1694C0.889853 9.72869 0.889853 5.77131 3.33058 3.33058Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M11.6073 12.668L15.2197 16.2803C15.5125 16.5732 15.9874 16.5732 16.2803 16.2803C16.5732 15.9874 16.5732 15.5126 16.2803 15.2197L12.668 11.6073C12.3581 12.0018 12.0018 12.3581 11.6073 12.668Z"
          fill={fill}
        />
        <path
          d="M13.4653 5.21671L5.21674 13.4653C5.99107 13.809 6.84825 14 7.75003 14C11.2017 14 14 11.2017 14 7.75C14 6.84822 13.809 5.99104 13.4653 5.21671Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M13.7803 1.71967C14.0732 2.01256 14.0732 2.48744 13.7803 2.78033L2.78033 13.7803C2.48744 14.0732 2.01256 14.0732 1.71967 13.7803C1.42678 13.4874 1.42678 13.0126 1.71967 12.7197L12.7197 1.71967C13.0126 1.42678 13.4874 1.42678 13.7803 1.71967Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default MagnifierSlash;
