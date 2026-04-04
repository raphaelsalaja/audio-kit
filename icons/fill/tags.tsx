import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Tags({
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
          d="m15.8135,8.0635c-.1924,0-.3838-.0732-.5303-.2197l-5.7705-5.7705c-.0469-.0474-.1104-.0732-.1768-.0732H3.75c-.4141,0-.75-.3359-.75-.75s.3359-.75.75-.75h5.5859c.4629,0,.915.1875,1.2393.5146l5.7686,5.7686c.293.293.293.7676,0,1.0605-.1465.1465-.3379.2197-.5303.2197Z"
          fill={secondaryfill}
          strokeWidth="0"
        />
        <path
          d="m14.1797,9.1191l-5.1045-5.1045c-.3242-.3271-.7764-.5146-1.2393-.5146H2.25c-.4141,0-.75.3359-.75.75v5.5859c0,.4663.1816.9058.5127,1.2373l5.1064,5.1064c.5361.5361,1.2402.8042,1.9443.8042s1.4082-.2681,1.9443-.8042l3.1719-3.1719c1.0723-1.0723,1.0723-2.8164,0-3.8887Zm-8.4297-.1191c-.6904,0-1.25-.5596-1.25-1.25s.5596-1.25,1.25-1.25,1.25.5596,1.25,1.25-.5596,1.25-1.25,1.25Z"
          fill={fill}
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default Tags;
