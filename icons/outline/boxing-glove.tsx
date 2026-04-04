import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function BoxingGlove({
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
          d="M13.25 13.25V15.25C13.25 15.802 12.802 16.25 12.25 16.25H6.75C6.198 16.25 5.75 15.802 5.75 15.25V13.25"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M12.25 5.75C12.25 6.855 11.355 7.75 10.25 7.75H7.58002"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M4.018 6.751C3.848 6.457 3.75 6.115 3.75 5.75V5.25C3.75 3.593 5.093 2.25 6.75 2.25H12.25C13.907 2.25 15.25 3.593 15.25 5.25V10.25C15.25 11.907 13.907 13.25 12.25 13.25H5.25C3.593 13.25 2.25 11.907 2.25 10.25V8.75C2.25 7.645 3.145 6.75 4.25 6.75H6C6.966 6.75 7.75 7.534 7.75 8.5C7.75 9.467 6.966 10.25 6 10.25H5.25"
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

export default BoxingGlove;
