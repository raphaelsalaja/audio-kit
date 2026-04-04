import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Paperclip3({
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
          d="m4.75,3.75v3.75c0,.69.56,1.25,1.25,1.25h0c.69,0,1.25-.56,1.25-1.25V3.25c0-1.381-1.119-2.5-2.5-2.5h0c-1.381,0-2.5,1.119-2.5,2.5v4.25c0,2.071,1.679,3.75,3.75,3.75h0c2.071,0,3.75-1.679,3.75-3.75v-3.75"
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

export default Paperclip3;
