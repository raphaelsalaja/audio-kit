import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Plug3({
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
          d="m2.5,16.25c-.1924,0-.3838-.0732-.5303-.2197-.293-.293-.293-.7676,0-1.0605l2.3203-2.3203c.293-.293.7676-.293,1.0605,0s.293.7676,0,1.0605l-2.3203,2.3203c-.1465.1465-.3379.2197-.5303.2197Z"
          fill={secondaryfill}
          strokeWidth="0"
        />
        <path
          d="m9.2393,5.6211c-.1924,0-.3838-.0732-.5303-.2197-.293-.293-.293-.7681,0-1.0605l2.1221-2.1211c.293-.2935.7676-.2925,1.0605,0,.293.293.293.7681,0,1.0605l-2.1221,2.1211c-.1465.1465-.3389.2197-.5303.2197Z"
          fill={secondaryfill}
          strokeWidth="0"
        />
        <path
          d="m13.1289,9.5103c-.1924,0-.3838-.0732-.5303-.2197-.293-.293-.293-.7676,0-1.0605l2.1211-2.1211c.293-.293.7676-.293,1.0605,0s.293.7676,0,1.0605l-2.1211,2.1211c-.1465.1465-.3379.2197-.5303.2197Z"
          fill={secondaryfill}
          strokeWidth="0"
        />
        <path
          d="m15.4268,9.998l-7.4248-7.4248v-.0005c-.6836-.6807-1.793-.6812-2.4746.0005l-1.2373,1.2373c-2.7295,2.7295-2.7295,7.1704,0,9.8994,1.3213,1.3213,3.0791,2.0488,4.9492,2.0488,1.8711,0,3.6289-.7275,4.9502-2.0488l1.2373-1.2368c.3301-.3306.5127-.77.5127-1.2378s-.1826-.9072-.5127-1.2373Z"
          fill={fill}
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default Plug3;
