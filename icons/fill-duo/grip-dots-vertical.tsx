import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function GripDotsVertical({
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
          d="M6.75012 10.25C7.44048 10.25 8.00012 9.69036 8.00012 9C8.00012 8.30964 7.44048 7.75 6.75012 7.75C6.05977 7.75 5.50012 8.30964 5.50012 9C5.50012 9.69036 6.05977 10.25 6.75012 10.25Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M11.2501 10.25C11.9405 10.25 12.5001 9.69036 12.5001 9C12.5001 8.30964 11.9405 7.75 11.2501 7.75C10.5598 7.75 10.0001 8.30964 10.0001 9C10.0001 9.69036 10.5598 10.25 11.2501 10.25Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M6.75012 5C7.44048 5 8.00012 4.44036 8.00012 3.75C8.00012 3.05964 7.44048 2.5 6.75012 2.5C6.05977 2.5 5.50012 3.05964 5.50012 3.75C5.50012 4.44036 6.05977 5 6.75012 5Z"
          fill={fill}
        />
        <path
          d="M6.75012 15.5C7.44048 15.5 8.00012 14.9404 8.00012 14.25C8.00012 13.5596 7.44048 13 6.75012 13C6.05977 13 5.50012 13.5596 5.50012 14.25C5.50012 14.9404 6.05977 15.5 6.75012 15.5Z"
          fill={fill}
        />
        <path
          d="M11.2501 5C11.9405 5 12.5001 4.44036 12.5001 3.75C12.5001 3.05964 11.9405 2.5 11.2501 2.5C10.5598 2.5 10.0001 3.05964 10.0001 3.75C10.0001 4.44036 10.5598 5 11.2501 5Z"
          fill={fill}
        />
        <path
          d="M11.2501 15.5C11.9405 15.5 12.5001 14.9404 12.5001 14.25C12.5001 13.5596 11.9405 13 11.2501 13C10.5598 13 10.0001 13.5596 10.0001 14.25C10.0001 14.9404 10.5598 15.5 11.2501 15.5Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default GripDotsVertical;
