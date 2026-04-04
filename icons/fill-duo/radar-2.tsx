import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Radar2({
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
          d="M4.5 9C4.5 6.51475 6.51475 4.5 9 4.5C11.4852 4.5 13.5 6.51475 13.5 9C13.5 11.4852 11.4852 13.5 9 13.5C6.51475 13.5 4.5 11.4852 4.5 9Z"
          fill={secondaryfill}
          fillOpacity="0.2"
          fillRule="evenodd"
        />
        <path
          d="M9 1C4.58179 1 1 4.58179 1 9C1 13.4182 4.58179 17 9 17C13.4182 17 17 13.4182 17 9C17 4.58179 13.4182 1 9 1ZM9 4.5C6.51475 4.5 4.5 6.51475 4.5 9C4.5 11.4852 6.51475 13.5 9 13.5C11.4852 13.5 13.5 11.4852 13.5 9C13.5 6.51475 11.4852 4.5 9 4.5Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M16.2803 1.71967C16.5732 2.01256 16.5732 2.48744 16.2803 2.78033L9.53033 9.53033C9.23744 9.82322 8.76256 9.82322 8.46967 9.53033C8.17678 9.23744 8.17678 8.76256 8.46967 8.46967L15.2197 1.71967C15.5126 1.42678 15.9874 1.42678 16.2803 1.71967Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default Radar2;
