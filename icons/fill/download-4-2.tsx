import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Download42({
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
      viewBox="0 0 12 12"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      <g fill={fill}>
        <path
          d="m8.78,4.97c-.293-.293-.768-.293-1.061,0l-.97.97V1.75c0-.414-.336-.75-.75-.75s-.75.336-.75.75v4.189l-.97-.97c-.293-.293-.768-.293-1.061,0s-.293.768,0,1.061l2.25,2.25c.146.146.338.22.53.22s.384-.073.53-.22l2.25-2.25c.293-.293.293-.768,0-1.061Z"
          fill={secondaryfill}
          strokeWidth="0"
        />
        <path
          d="m8.75,11.5H3.25c-1.517,0-2.75-1.233-2.75-2.75v-1c0-.414.336-.75.75-.75s.75.336.75.75v1c0,.689.561,1.25,1.25,1.25h5.5c.689,0,1.25-.561,1.25-1.25v-1c0-.414.336-.75.75-.75s.75.336.75.75v1c0,1.517-1.233,2.75-2.75,2.75Z"
          fill={fill}
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default Download42;
