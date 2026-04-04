import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ArrowsExpandY({
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
          d="M11.7197 12.4697L9.75 14.4394V10.7499C9.75 10.3358 9.4141 9.99991 9 9.99991C8.5859 9.99991 8.25 10.3358 8.25 10.7499V14.4394L6.2803 12.4697C5.9873 12.1767 5.5127 12.1767 5.2198 12.4697C4.9269 12.7627 4.9268 13.2373 5.2198 13.5302L8.4698 16.7802C8.6163 16.9267 8.8082 16.9999 9.0001 16.9999C9.192 16.9999 9.3839 16.9267 9.5304 16.7802L12.7804 13.5302C13.0734 13.2372 13.0734 12.7626 12.7804 12.4697C12.4874 12.1768 12.0126 12.1767 11.7197 12.4697Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M9.5303 1.21969C9.2373 0.926689 8.76271 0.926689 8.46981 1.21969L5.21981 4.46969C4.92681 4.76269 4.92681 5.23731 5.21981 5.53021C5.51281 5.82311 5.9874 5.82321 6.2803 5.53021L8.25001 3.56048V7.24999C8.25001 7.66409 8.58591 7.99999 9.00001 7.99999C9.41411 7.99999 9.75001 7.66409 9.75001 7.24999V3.56048L11.7197 5.53021C11.8662 5.67671 12.0581 5.7499 12.25 5.7499C12.4419 5.7499 12.6338 5.67671 12.7803 5.53021C13.0733 5.23721 13.0733 4.76259 12.7803 4.46969L9.5303 1.21969Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default ArrowsExpandY;
