import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Speedometer({
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
          d="m9,1C4.5889,1,1,4.5889,1,9c0,2.2075.8848,4.2651,2.4922,5.7935.1387.1328.3242.2065.5166.2065h9.9824c.1924,0,.3779-.0737.5166-.2065,1.6074-1.5283,2.4922-3.5859,2.4922-5.7935,0-4.4111-3.5889-8-8-8Zm.5303,8.5303c-.1465.1465-.3379.2197-.5303.2197s-.3838-.0732-.5303-.2197l-3-3c-.293-.293-.293-.7676,0-1.0605s.7676-.293,1.0605,0l3,3c.293.293.293.7676,0,1.0605Z"
          fill={fill}
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default Speedometer;
