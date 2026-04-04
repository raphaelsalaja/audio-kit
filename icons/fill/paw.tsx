import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Paw({
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
        <ellipse
          cx="6.25"
          cy="4.5"
          fill={fill}
          rx="2.25"
          ry="3"
          strokeWidth="0"
        />
        <ellipse
          cx="2.75"
          cy="8.75"
          fill={fill}
          rx="1.5"
          ry="2"
          strokeWidth="0"
        />
        <ellipse
          cx="11.75"
          cy="4.5"
          fill={fill}
          rx="2.25"
          ry="3"
          strokeWidth="0"
        />
        <ellipse
          cx="15.25"
          cy="8.75"
          fill={fill}
          rx="1.5"
          ry="2"
          strokeWidth="0"
        />
        <path
          d="m9,8c-2.29,0-5,3.0488-5,5.625,0,.6406.2852,1.2632.7842,1.709.4814.4292,1.1162.666,1.7871.666.8203,0,1.2764-.2812,1.6094-.4868.2656-.1641.4258-.2632.8193-.2632s.5537.0991.8193.2632c.333.2056.7891.4868,1.6094.4868.6709,0,1.3057-.2368,1.7881-.667.498-.4448.7832-1.0674.7832-1.708,0-2.5762-2.71-5.625-5-5.625Z"
          fill={secondaryfill}
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default Paw;
