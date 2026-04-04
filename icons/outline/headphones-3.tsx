import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Headphones3({
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
          d="M5.75 9.25C4.9216 9.25 4.25 9.9216 4.25 10.75V14.25C4.25 15.0784 4.9216 15.75 5.75 15.75C6.5784 15.75 7.25 15.0784 7.25 14.25V10.75C7.25 9.9216 6.5784 9.25 5.75 9.25Z"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M12.25 9.25C11.4216 9.25 10.75 9.9216 10.75 10.75V14.25C10.75 15.0784 11.4216 15.75 12.25 15.75C13.0784 15.75 13.75 15.0784 13.75 14.25V10.75C13.75 9.9216 13.0784 9.25 12.25 9.25Z"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M16.25 12.75V8.25C16.25 4.936 13.564 2.25 10.25 2.25H7.75C4.436 2.25 1.75 4.936 1.75 8.25V12.75"
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

export default Headphones3;
