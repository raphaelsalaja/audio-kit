import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Hexadecagon2({
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
          d="m11.177,5.86l-1.427-1.418v-1.995c0-.109-.088-.197-.197-.197h-1.995l-1.418-1.427c-.077-.078-.203-.078-.28,0l-1.418,1.427h-1.995c-.109,0-.197.088-.197.197v1.995l-1.427,1.418c-.078.077-.078.203,0,.28l1.427,1.418v1.995c0,.109.088.197.197.197h1.995l1.418,1.427c.077.078.203.078.28,0l1.418-1.427h1.995c.109,0,.197-.088.197-.197v-1.995l1.427-1.418c.078-.077.078-.203,0-.28Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
        />
      </g>
    </svg>
  );
}

export default Hexadecagon2;
