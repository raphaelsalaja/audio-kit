import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Headphones22({
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
          d="m1.25,6.75v-.75C1.25,3.377,3.377,1.25,6,1.25h0c2.623,0,4.75,2.127,4.75,4.75v.75"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
        />
        <path
          d="m1.25,6.75h2c.552,0,1,.448,1,1v2c0,.552-.448,1-1,1h-1c-.552,0-1-.448-1-1v-3h0Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
        />
        <path
          d="m8.75,6.75h1c.552,0,1,.448,1,1v2c0,.552-.448,1-1,1h-2v-3c0-.552.448-1,1-1Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          transform="translate(18.5 17.5) rotate(180)"
        />
      </g>
    </svg>
  );
}

export default Headphones22;
