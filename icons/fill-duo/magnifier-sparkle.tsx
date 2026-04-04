import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function MagnifierSparkle({
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
          d="M1.5 7.75C1.5 4.29829 4.29829 1.5 7.75 1.5C11.2017 1.5 14 4.29829 14 7.75C14 11.2017 11.2017 14 7.75 14C4.29829 14 1.5 11.2017 1.5 7.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M11.6073 12.668L15.2197 16.2803C15.5125 16.5732 15.9874 16.5732 16.2803 16.2803C16.5732 15.9874 16.5732 15.5126 16.2803 15.2197L12.668 11.6073C12.3581 12.0018 12.0018 12.3581 11.6073 12.668Z"
          fill={fill}
        />
        <path
          d="M7.75 4.5C8.09415 4.5 8.39414 4.73422 8.47761 5.0681L8.86847 6.63153L10.4319 7.02239C10.7658 7.10586 11 7.40585 11 7.75C11 8.09415 10.7658 8.39414 10.4319 8.47761L8.86847 8.86847L8.47761 10.4319C8.39414 10.7658 8.09415 11 7.75 11C7.40585 11 7.10586 10.7658 7.02239 10.4319L6.63153 8.86847L5.0681 8.47761C4.73422 8.39414 4.5 8.09415 4.5 7.75C4.5 7.40585 4.73422 7.10586 5.0681 7.02239L6.63153 6.63153L7.02239 5.0681C7.10586 4.73422 7.40585 4.5 7.75 4.5Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default MagnifierSparkle;
