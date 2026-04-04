import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Shield3({
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
          d="m10.536,1.807L6.286.057c-.183-.075-.389-.075-.571,0L1.464,1.807c-.281.116-.464.39-.464.693v4.969c0,2.676,3.479,4.085,4.543,4.453.15.052.304.079.458.079.153,0,.306-.026.453-.078,1.066-.368,4.546-1.778,4.546-4.454V2.5c0-.304-.184-.578-.464-.693Z"
          fill={fill}
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default Shield3;
