import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Ghost({
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
          d="m9,1c-3.8599,0-7,3.1401-7,7v8.25c0,.4141.3359.75.75.75,1.2051,0,1.833-.5762,2.2915-.9966.3799-.3491.5649-.5034.9585-.5034.416,0,.6167.1768.9956.5444.4155.4033.9854.9556,2.0044.9556s1.5889-.5522,2.0044-.9556c.3789-.3677.5796-.5444.9956-.5444.3936,0,.5786.1543.9585.5034.4585.4204,1.0864.9966,2.2915.9966.4141,0,.75-.3359.75-.75v-8.25c0-3.8599-3.1401-7-7-7Zm-3,9c-.5522,0-1-.6716-1-1.5s.4478-1.5,1-1.5,1,.6716,1,1.5-.4477,1.5-1,1.5Zm3,2.5c-.6904,0-1.25-.5596-1.25-1.25s.5596-1.25,1.25-1.25,1.25.5596,1.25,1.25-.5596,1.25-1.25,1.25Zm3-2.5c-.5522,0-1-.6716-1-1.5s.4478-1.5,1-1.5,1,.6716,1,1.5-.4477,1.5-1,1.5Z"
          fill={fill}
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default Ghost;
