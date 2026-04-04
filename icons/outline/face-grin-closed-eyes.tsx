import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function FaceGrinClosedEyes({
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
          cx="9"
          cy="9"
          fill="none"
          r="7.25"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M11.897,10.757c-.154-.154-.366-.221-.583-.189h0c-1.532,.239-3.112,.238-4.638-.001-.214-.032-.421,.035-.572,.185-.154,.153-.227,.376-.193,.598,.23,1.511,1.558,2.651,3.089,2.651s2.86-1.141,3.089-2.654c.033-.216-.039-.436-.192-.589Z"
          fill={secondaryfill}
          stroke="none"
        />
        <path
          d="M4.75,8.25c0-.69,.56-1.25,1.25-1.25s1.25,.56,1.25,1.25"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M10.75,8.25c0-.69,.56-1.25,1.25-1.25s1.25,.56,1.25,1.25"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default FaceGrinClosedEyes;
