import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function LockOpen({
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
          d="M12.75 8.25H5.25C4.14543 8.25 3.25 9.14543 3.25 10.25V14.25C3.25 15.3546 4.14543 16.25 5.25 16.25H12.75C13.8546 16.25 14.75 15.3546 14.75 14.25V10.25C14.75 9.14543 13.8546 8.25 12.75 8.25Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M5.75 8.25V5C5.75 3.205 7.205 1.75 9 1.75C10.795 1.75 12.25 3.205 12.25 5"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9 11.75V12.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M12.75 8.25H5.25C4.14543 8.25 3.25 9.14543 3.25 10.25V14.25C3.25 15.3546 4.14543 16.25 5.25 16.25H12.75C13.8546 16.25 14.75 15.3546 14.75 14.25V10.25C14.75 9.14543 13.8546 8.25 12.75 8.25Z"
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

export default LockOpen;
