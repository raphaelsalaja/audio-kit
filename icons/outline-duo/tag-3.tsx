import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Tag3({
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
          d="M3.25 2.25H8.172C8.702 2.25 9.211 2.461 9.586 2.836L15.336 8.586C16.117 9.367 16.117 10.633 15.336 11.414L11.414 15.336C10.633 16.117 9.367 16.117 8.586 15.336L2.836 9.586C2.461 9.211 2.25 8.702 2.25 8.172V3.25C2.25 2.698 2.698 2.25 3.25 2.25Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M3.25 2.25H8.172C8.702 2.25 9.211 2.461 9.586 2.836L15.336 8.586C16.117 9.367 16.117 10.633 15.336 11.414L11.414 15.336C10.633 16.117 9.367 16.117 8.586 15.336L2.836 9.586C2.461 9.211 2.25 8.702 2.25 8.172V3.25C2.25 2.698 2.698 2.25 3.25 2.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M10 12L8 10"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M12 10L10 8"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M6.25 7.5C6.94036 7.5 7.5 6.94036 7.5 6.25C7.5 5.55964 6.94036 5 6.25 5C5.55964 5 5 5.55964 5 6.25C5 6.94036 5.55964 7.5 6.25 7.5Z"
          fill={fill}
          stroke="none"
        />
      </g>
    </svg>
  );
}

export default Tag3;
