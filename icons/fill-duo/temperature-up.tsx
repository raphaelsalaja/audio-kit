import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function TemperatureUp({
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
          d="M14.2803 2.21967C13.9874 1.92678 13.5126 1.92678 13.2197 2.21967L10.7197 4.71967C10.4268 5.01256 10.4268 5.48744 10.7197 5.78033C11.0126 6.07322 11.4874 6.07322 11.7803 5.78033L13 4.56066V10.25C13 10.6642 13.3358 11 13.75 11C14.1642 11 14.5 10.6642 14.5 10.25V4.56066L15.7197 5.78033C16.0126 6.07322 16.4874 6.07322 16.7803 5.78033C17.0732 5.48744 17.0732 5.01256 16.7803 4.71967L14.2803 2.21967Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M3 4.25C3 2.45479 4.45479 1 6.25 1C8.04521 1 9.5 2.45479 9.5 4.25V10.0171C10.1212 10.7542 10.5 11.707 10.5 12.75C10.5 15.0972 8.59721 17 6.25 17C3.90279 17 2 15.0972 2 12.75C2 11.707 2.37879 10.7542 3 10.0171V4.25Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M7 5.99255C7 5.57833 6.66421 5.24255 6.25 5.24255C5.83579 5.24255 5.5 5.57833 5.5 5.99255V11.4509C5.05176 11.7104 4.75 12.1952 4.75 12.75C4.75 13.578 5.422 14.25 6.25 14.25C7.078 14.25 7.75 13.578 7.75 12.75C7.75 12.1952 7.44824 11.7104 7 11.4509V5.99255Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default TemperatureUp;
