import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function RotateObjClockwise({
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
          d="M12.75 7.75H8.25C7.42157 7.75 6.75 8.42157 6.75 9.25V13.75C6.75 14.5784 7.42157 15.25 8.25 15.25H12.75C13.5784 15.25 14.25 14.5784 14.25 13.75V9.25C14.25 8.42157 13.5784 7.75 12.75 7.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M12.75 7.75H8.25C7.42157 7.75 6.75 8.42157 6.75 9.25V13.75C6.75 14.5784 7.42157 15.25 8.25 15.25H12.75C13.5784 15.25 14.25 14.5784 14.25 13.75V9.25C14.25 8.42157 13.5784 7.75 12.75 7.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M2.25 7.25C2.25 5.041 4.041 3.25 6.25 3.25H8.5"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M6.25 1L8.5 3.25L6.25 5.5"
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

export default RotateObjClockwise;
