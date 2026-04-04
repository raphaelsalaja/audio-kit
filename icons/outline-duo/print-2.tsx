import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Print2({
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
          d="M4.25 13.25H5.25V8.75H12.75V13.25H13.75C14.855 13.25 15.75 12.355 15.75 11.25V7.25C15.75 6.145 14.855 5.25 13.75 5.25H4.25C3.145 5.25 2.25 6.145 2.25 7.25V11.25C2.25 12.355 3.145 13.25 4.25 13.25Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M5.25 5.25V2.75C5.25 2.198 5.698 1.75 6.25 1.75H11.75C12.302 1.75 12.75 2.198 12.75 2.75V5.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M5.25 13.25H4.25C3.145 13.25 2.25 12.355 2.25 11.25V7.25C2.25 6.145 3.145 5.25 4.25 5.25H13.75C14.855 5.25 15.75 6.145 15.75 7.25V11.25C15.75 12.355 14.855 13.25 13.75 13.25H12.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M12.75 8.75V15.25C12.75 15.802 12.302 16.25 11.75 16.25H6.25C5.698 16.25 5.25 15.802 5.25 15.25V8.75H12.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M7.75 13.75H10.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M7.75 11.25H10.25"
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

export default Print2;
