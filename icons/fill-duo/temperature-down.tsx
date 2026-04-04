import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function TemperatureDown({
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
          d="M3 4.25C3 2.45479 4.45479 1 6.25 1C8.04521 1 9.5 2.45479 9.5 4.25V10.0171C10.1212 10.7542 10.5 11.707 10.5 12.75C10.5 15.0972 8.59721 17 6.25 17C3.90279 17 2 15.0972 2 12.75C2 11.707 2.37879 10.7542 3 10.0171V4.25Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M7 9.25C7 8.83579 6.66421 8.5 6.25 8.5C5.83579 8.5 5.5 8.83579 5.5 9.25V11.4509C5.05176 11.7104 4.75 12.1952 4.75 12.75C4.75 13.578 5.422 14.25 6.25 14.25C7.078 14.25 7.75 13.578 7.75 12.75C7.75 12.1952 7.44824 11.7104 7 11.4509V9.25Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M14.5 2.75C14.5 2.33579 14.1642 2 13.75 2C13.3358 2 13 2.33579 13 2.75V8.43934L11.7803 7.21967C11.4874 6.92678 11.0126 6.92678 10.7197 7.21967C10.4268 7.51256 10.4268 7.98744 10.7197 8.28033L13.2197 10.7803C13.5126 11.0732 13.9874 11.0732 14.2803 10.7803L16.7803 8.28033C17.0732 7.98744 17.0732 7.51256 16.7803 7.21967C16.4874 6.92678 16.0126 6.92678 15.7197 7.21967L14.5 8.43934V2.75Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default TemperatureDown;
