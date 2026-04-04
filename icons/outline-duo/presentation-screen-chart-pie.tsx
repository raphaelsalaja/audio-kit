import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function PresentationScreenChartPie({
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
          d="M3.75 2.75H14.25C15.3546 2.75 16.25 3.64543 16.25 4.75V11.25C16.25 12.3546 15.3546 13.25 14.25 13.25H3.75C2.64543 13.25 1.75 12.3546 1.75 11.25V4.75C1.75 3.64543 2.64543 2.75 3.75 2.75ZM11.5 8C11.5 9.38071 10.3807 10.5 9 10.5C7.61929 10.5 6.5 9.38071 6.5 8C6.5 6.61929 7.61929 5.5 9 5.5C10.3807 5.5 11.5 6.61929 11.5 8Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M5.75 16.25L6.75 13.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M12.25 16.25L11.25 13.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14.25 2.75H3.75C2.64543 2.75 1.75 3.64543 1.75 4.75V11.25C1.75 12.3546 2.64543 13.25 3.75 13.25H14.25C15.3546 13.25 16.25 12.3546 16.25 11.25V4.75C16.25 3.64543 15.3546 2.75 14.25 2.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9 2.75V1.5"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9 10.5C10.3807 10.5 11.5 9.38071 11.5 8C11.5 6.61929 10.3807 5.5 9 5.5C7.61929 5.5 6.5 6.61929 6.5 8C6.5 9.38071 7.61929 10.5 9 10.5Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9 5.5V8H11.5C11.5 6.619 10.381 5.5 9 5.5Z"
          fill={fill}
          stroke="none"
        />
      </g>
    </svg>
  );
}

export default PresentationScreenChartPie;
