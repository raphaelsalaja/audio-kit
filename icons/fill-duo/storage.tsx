import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Storage({
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
          d="M9.00009 13C12.8661 13 16.0001 11.2091 16.0001 9C16.0001 6.79086 12.8661 5 9.00009 5C5.1341 5 2.00009 6.79086 2.00009 9C2.00009 11.2091 5.1341 13 9.00009 13Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M9.00009 9.5C12.8661 9.5 16.0001 7.70914 16.0001 5.5C16.0001 3.29086 12.8661 1.5 9.00009 1.5C5.1341 1.5 2.00009 3.29086 2.00009 5.5C2.00009 7.70914 5.1341 9.5 9.00009 9.5Z"
          fill={fill}
        />
        <path
          d="M9.00009 13C6.18129 13 3.80819 12.0918 2.69029 10.75C2.25149 11.2764 2.00009 11.8677 2.00009 12.5C2.00009 14.7432 5.07479 16.5 9.00009 16.5C12.9254 16.5 16.0001 14.7432 16.0001 12.5C16.0001 11.8677 15.7486 11.2764 15.3099 10.75C14.192 12.0918 11.819 13 9.00009 13Z"
          fill={secondaryfill}
          opacity="0.2"
        />
      </g>
    </svg>
  );
}

export default Storage;
