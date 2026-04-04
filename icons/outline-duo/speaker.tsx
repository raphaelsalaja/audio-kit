import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Speaker({
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
          d="M5.75 1.75H12.25C13.3546 1.75 14.25 2.64543 14.25 3.75V14.25C14.25 15.3546 13.3546 16.25 12.25 16.25H5.75C4.64543 16.25 3.75 15.3546 3.75 14.25V3.75C3.75 2.64543 4.64543 1.75 5.75 1.75ZM11.25 11C11.25 12.2426 10.2426 13.25 9 13.25C7.75736 13.25 6.75 12.2426 6.75 11C6.75 9.75736 7.75736 8.75 9 8.75C10.2426 8.75 11.25 9.75736 11.25 11Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M12.25 1.75H5.75C4.64543 1.75 3.75 2.64543 3.75 3.75V14.25C3.75 15.3546 4.64543 16.25 5.75 16.25H12.25C13.3546 16.25 14.25 15.3546 14.25 14.25V3.75C14.25 2.64543 13.3546 1.75 12.25 1.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9 13.25C10.2426 13.25 11.25 12.2426 11.25 11C11.25 9.75736 10.2426 8.75 9 8.75C7.75736 8.75 6.75 9.75736 6.75 11C6.75 12.2426 7.75736 13.25 9 13.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9 6.5C9.55228 6.5 10 6.05228 10 5.5C10 4.94772 9.55228 4.5 9 4.5C8.44772 4.5 8 4.94772 8 5.5C8 6.05228 8.44772 6.5 9 6.5Z"
          fill={fill}
          stroke="none"
        />
      </g>
    </svg>
  );
}

export default Speaker;
