import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SquareKanban({
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
          d="m2,4.75v8.5c0,1.517,1.233,2.75,2.75,2.75h8.5c1.517,0,2.75-1.233,2.75-2.75V4.75c0-1.517-1.233-2.75-2.75-2.75H4.75c-1.517,0-2.75,1.233-2.75,2.75Zm8,.5c0-.414.336-.75.75-.75h2c.414,0,.75.336.75.75v3c0,.414-.336.75-.75.75h-2c-.414,0-.75-.336-.75-.75v-3Zm-5.5,0c0-.414.336-.75.75-.75h2c.414,0,.75.336.75.75v7.5c0,.414-.336.75-.75.75h-2c-.414,0-.75-.336-.75-.75v-7.5Z"
          fill={fill}
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default SquareKanban;
