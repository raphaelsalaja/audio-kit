import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function KnifeSpoon({
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
          d="M12.25 1.5C10.2213 1.5 8.875 3.53316 8.875 5.625C8.875 7.44685 9.89617 9.22419 11.5 9.65264V15.75C11.5 16.1642 11.8358 16.5 12.25 16.5C12.6642 16.5 13 16.1642 13 15.75V9.65264C14.6038 9.22419 15.625 7.44685 15.625 5.625C15.625 3.53316 14.2787 1.5 12.25 1.5Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M6.46883 1.53264C6.7844 1.6289 7 1.92008 7 2.25C7 6.75001 7 11.25 7 15.75C7 16.1642 6.66421 16.5 6.25 16.5C5.83579 16.5 5.5 16.1642 5.5 15.75V12.5947L3.26163 10.6742C3.09028 10.5272 2.99427 10.3108 3.00026 10.0851C3.03593 8.74126 3.25732 6.81111 4.11629 4.67786C4.57771 3.53535 5.12026 2.58571 5.6277 1.83138C5.81185 1.55763 6.15327 1.43637 6.46883 1.53264Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default KnifeSpoon;
