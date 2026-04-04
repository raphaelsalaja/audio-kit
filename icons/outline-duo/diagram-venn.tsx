import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function DiagramVenn({
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
          d="M8.99997 4C7.23657 4.8537 6.01978 6.6592 6.01978 8.75C6.01978 10.8408 7.23657 12.6462 8.99997 13.499C10.7634 12.6462 11.9802 10.8407 11.9802 8.75C11.9802 6.6593 10.7634 4.8538 8.99997 4Z"
          fill={secondaryfill}
          fillRule="evenodd"
          opacity="0.3"
          stroke="none"
        />
        <path
          d="M6.5 14C9.3995 14 11.75 11.6498 11.75 8.75C11.75 5.8502 9.3995 3.5 6.5 3.5C3.6005 3.5 1.25 5.8502 1.25 8.75C1.25 11.6498 3.6005 14 6.5 14Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M11.5 14C14.3995 14 16.75 11.6498 16.75 8.75C16.75 5.8502 14.3995 3.5 11.5 3.5C8.6005 3.5 6.25 5.8502 6.25 8.75C6.25 11.6498 8.6005 14 11.5 14Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default DiagramVenn;
