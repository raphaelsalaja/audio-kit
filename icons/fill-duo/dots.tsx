import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Dots({
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
          d="M9.00009 10.25C9.69045 10.25 10.2501 9.69036 10.2501 9C10.2501 8.30964 9.69045 7.75 9.00009 7.75C8.30974 7.75 7.75009 8.30964 7.75009 9C7.75009 9.69036 8.30974 10.25 9.00009 10.25Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M3.25009 10.25C3.94045 10.25 4.50009 9.69036 4.50009 9C4.50009 8.30964 3.94045 7.75 3.25009 7.75C2.55974 7.75 2.00009 8.30964 2.00009 9C2.00009 9.69036 2.55974 10.25 3.25009 10.25Z"
          fill={fill}
        />
        <path
          d="M14.7501 10.25C15.4404 10.25 16.0001 9.69036 16.0001 9C16.0001 8.30964 15.4404 7.75 14.7501 7.75C14.0597 7.75 13.5001 8.30964 13.5001 9C13.5001 9.69036 14.0597 10.25 14.7501 10.25Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Dots;
