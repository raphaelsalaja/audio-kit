import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Timer2({
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
          d="M9 1C8.586 1 8.25 1.336 8.25 1.75V4.25C8.25 4.664 8.586 5 9 5C9.414 5 9.75 4.664 9.75 4.25V2.543C12.982 2.916 15.5 5.669 15.5 9C15.5 12.584 12.584 15.5 9 15.5C5.416 15.5 2.5 12.584 2.5 9C2.5 7.264 3.176 5.631 4.404 4.404C4.697 4.111 4.697 3.636 4.404 3.343C4.111 3.05 3.636 3.05 3.343 3.343C1.832 4.854 1 6.863 1 9C1 13.411 4.589 17 9 17C13.411 17 17 13.411 17 9C17 4.589 13.411 1 9 1Z"
          fill={fill}
        />
        <path
          d="M5.46967 5.46967C5.76256 5.17678 6.23744 5.17678 6.53033 5.46967L9.53033 8.46967C9.82322 8.76256 9.82322 9.23744 9.53033 9.53033C9.23744 9.82322 8.76256 9.82322 8.46967 9.53033L5.46967 6.53033C5.17678 6.23744 5.17678 5.76256 5.46967 5.46967Z"
          fill={secondaryfill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default Timer2;
