import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function AnimationFast({
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
          d="M11.828 15.17C11.124 15.17 10.42 14.902 9.88398 14.366L6.46298 10.944C5.94298 10.425 5.65698 9.73501 5.65698 9.00001C5.65698 8.26501 5.94298 7.57501 6.46298 7.05601L9.88398 3.63401C10.956 2.56301 12.701 2.56201 13.773 3.63401L17.194 7.05601C17.714 7.57501 18 8.26501 18 9.00001C18 9.73501 17.714 10.425 17.194 10.944L13.773 14.366C13.237 14.902 12.533 15.17 11.828 15.17Z"
          fill={fill}
        />
        <path
          d="M0 9C0 8.58579 0.335786 8.25 0.75 8.25H3.5C3.91421 8.25 4.25 8.58579 4.25 9C4.25 9.41421 3.91421 9.75 3.5 9.75H0.75C0.335786 9.75 0 9.41421 0 9Z"
          fill={secondaryfill}
          fillRule="evenodd"
        />
        <path
          d="M2.25 5.75C2.25 5.33579 2.58579 5 3 5H4.75C5.16421 5 5.5 5.33579 5.5 5.75C5.5 6.16421 5.16421 6.5 4.75 6.5H3C2.58579 6.5 2.25 6.16421 2.25 5.75Z"
          fill={secondaryfill}
          fillRule="evenodd"
        />
        <path
          d="M2.25 12.25C2.25 11.8358 2.58579 11.5 3 11.5H4.75C5.16421 11.5 5.5 11.8358 5.5 12.25C5.5 12.6642 5.16421 13 4.75 13H3C2.58579 13 2.25 12.6642 2.25 12.25Z"
          fill={secondaryfill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default AnimationFast;
