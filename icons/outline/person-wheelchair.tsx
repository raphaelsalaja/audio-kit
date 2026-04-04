import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function PersonWheelchair({
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
        <circle
          cx="10.25"
          cy="2.25"
          fill="none"
          r="1.5"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9.565,5.75h-2.732c-.216,0-.427,.07-.6,.2l-1.733,1.3"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M5.46,9.502c-1.293,.514-2.21,1.771-2.21,3.248,0,1.933,1.567,3.5,3.5,3.5,1.593,0,2.923-1.072,3.346-2.528"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M10.551,8.74l.236-1.57c.112-.747-.467-1.42-1.222-1.42h0c-.612,0-1.132,.448-1.222,1.053l-.386,2.585c-.125,.834,.463,1.607,1.299,1.71l2.695,.333c.342,.042,.638,.257,.783,.57l1.516,3.248"
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

export default PersonWheelchair;
