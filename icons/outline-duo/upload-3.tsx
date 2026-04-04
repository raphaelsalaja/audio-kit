import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Upload3({
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
          d="M12 7H13.75C14.855 7 15.75 7.895 15.75 9V13.75C15.75 14.855 14.855 15.75 13.75 15.75H4.25C3.145 15.75 2.25 14.855 2.25 13.75V9C2.25 7.895 3.145 7 4.25 7H6"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M12 7.25H13.75C14.855 7.25 15.75 8.145 15.75 9.25V13.75C15.75 14.855 14.855 15.75 13.75 15.75H4.25C3.145 15.75 2.25 14.855 2.25 13.75V9.25C2.25 8.145 3.145 7.25 4.25 7.25H6"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M6 4.25L9 1.25L12 4.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9 1.25V12.75"
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

export default Upload3;
