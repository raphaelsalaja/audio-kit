import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function AxisX({
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
          d="M16 10H7.99999V1.75C7.99999 1.336 7.66399 1 7.24999 1C6.83599 1 6.49999 1.336 6.49999 1.75V10.439L1.21999 15.72C0.926994 16.013 0.926994 16.488 1.21999 16.781C1.36599 16.927 1.55799 17.001 1.74999 17.001C1.94199 17.001 2.13399 16.928 2.27999 16.781L7.55999 11.501H15.999C16.413 11.501 16.749 11.165 16.749 10.751C16.749 10.337 16.413 10.001 15.999 10.001L16 10Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M13.763 13.975C13.571 13.975 13.379 13.902 13.233 13.755C12.94 13.462 12.94 12.987 13.233 12.694L15.177 10.749L13.233 8.80401C12.94 8.51101 12.94 8.036 13.233 7.743C13.526 7.45 14.001 7.45 14.294 7.743L16.769 10.218C17.062 10.511 17.062 10.986 16.769 11.279L14.294 13.754C14.148 13.9 13.956 13.974 13.764 13.974L13.763 13.975Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default AxisX;
