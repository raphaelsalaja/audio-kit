import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function AppStack({
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
          d="M5.314 14.25H3.75C2.645 14.25 1.75 13.355 1.75 12.25V5.75C1.75 4.645 2.645 3.75 3.75 3.75H5.314"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M12.686 14.25H14.25C15.355 14.25 16.25 13.355 16.25 12.25V5.75C16.25 4.645 15.355 3.75 14.25 3.75H12.686"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M7.25 15.75H10.75C11.8546 15.75 12.75 14.8546 12.75 13.75L12.75 4.25C12.75 3.14543 11.8546 2.25 10.75 2.25H7.25C6.14543 2.25 5.25 3.14543 5.25 4.25L5.25 13.75C5.25 14.8546 6.14543 15.75 7.25 15.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M7.25 15.75H10.75C11.8546 15.75 12.75 14.8546 12.75 13.75L12.75 4.25C12.75 3.14543 11.8546 2.25 10.75 2.25H7.25C6.14543 2.25 5.25 3.14543 5.25 4.25L5.25 13.75C5.25 14.8546 6.14543 15.75 7.25 15.75Z"
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

export default AppStack;
