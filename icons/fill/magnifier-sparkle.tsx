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
          d="M11.1083 11.1083C11.4012 10.8154 11.876 10.8154 12.1689 11.1083L16.2803 15.2197C16.5732 15.5126 16.5732 15.9874 16.2803 16.2803C15.9874 16.5732 15.5126 16.5732 15.2197 16.2803L11.1083 12.1689C10.8154 11.876 10.8154 11.4012 11.1083 11.1083Z"
          fill={secondaryfill}
          fillRule="evenodd"
        />
        <path
          d="M1.5 7.75C1.5 4.29829 4.29829 1.5 7.75 1.5C11.2017 1.5 14 4.29829 14 7.75C14 11.2017 11.2017 14 7.75 14C4.29829 14 1.5 11.2017 1.5 7.75ZM8.47761 5.0681C8.39414 4.73422 8.09415 4.5 7.75 4.5C7.40585 4.5 7.10586 4.73422 7.02239 5.0681L6.63153 6.63153L5.0681 7.02239C4.73422 7.10586 4.5 7.40585 4.5 7.75C4.5 8.09415 4.73422 8.39414 5.0681 8.47761L6.63153 8.86847L7.02239 10.4319C7.10586 10.7658 7.40585 11 7.75 11C8.09415 11 8.39414 10.7658 8.47761 10.4319L8.86847 8.86847L10.4319 8.47761C10.7658 8.39414 11 8.09415 11 7.75C11 7.40585 10.7658 7.10586 10.4319 7.02239L8.86847 6.63153L8.47761 5.0681Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default MagnifierSparkle;
