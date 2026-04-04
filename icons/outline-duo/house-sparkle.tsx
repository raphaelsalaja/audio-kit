import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function HouseSparkle({
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
          d="M3.145 5.95L8.395 1.96001C8.753 1.68801 9.248 1.68801 9.605 1.96001L14.855 5.95C15.104 6.139 15.25 6.43401 15.25 6.74601V14.25C15.25 15.355 14.355 16.25 13.25 16.25H4.75C3.645 16.25 2.75 15.355 2.75 14.25V6.74601C2.75 6.43301 2.896 6.139 3.145 5.95Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M3.145 5.95L8.395 1.96001C8.753 1.68801 9.248 1.68801 9.605 1.96001L14.855 5.95C15.104 6.139 15.25 6.43401 15.25 6.74601V14.25C15.25 15.355 14.355 16.25 13.25 16.25H4.75C3.645 16.25 2.75 15.355 2.75 14.25V6.74601C2.75 6.43301 2.896 6.139 3.145 5.95Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M12.2373 9.5381L10.3428 8.9072L9.71149 7.0127C9.60939 6.707 9.32278 6.5 9.00008 6.5C8.67738 6.5 8.39068 6.707 8.28868 7.0127L7.65739 8.9072L5.76289 9.5381C5.45669 9.6406 5.25018 9.9268 5.25018 10.25C5.25018 10.5732 5.45669 10.8594 5.76289 10.9619L7.65739 11.5928L8.28868 13.4873C8.39078 13.793 8.67738 14 9.00008 14C9.32278 14 9.60949 13.793 9.71149 13.4873L10.3428 11.5928L12.2373 10.9619C12.5435 10.8594 12.75 10.5732 12.75 10.25C12.75 9.9268 12.5435 9.6406 12.2373 9.5381Z"
          fill={fill}
          stroke="none"
        />
      </g>
    </svg>
  );
}

export default HouseSparkle;
