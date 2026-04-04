import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ButtonPlus({
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
          d="m10.25,10.5h.25v-.25c0-1.2407,1.0093-2.25,2.25-2.25s2.25,1.0093,2.25,2.25v.25h.25c.2485,0,.4855.0442.7077.1213.1005.0349.2923-.239.2923-.239v-3.1324c0-1.1045-.8954-2-2-2H3.75c-1.1046,0-2,.8955-2,2v3.5c0,1.1045.8954,2,2,2h4.25c0-1.2407,1.0093-2.25,2.25-2.25Z"
          fill={secondaryfill}
          opacity=".3"
          strokeWidth="0"
        />
        <path
          d="m16.25,9.9326v-2.6826c0-1.104-.895-2-2-2H3.75c-1.105,0-2,.896-2,2v3.5c0,1.104.895,2,2,2h3.5"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <line
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x1="12.75"
          x2="12.75"
          y1="10.25"
          y2="15.25"
        />
        <line
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x1="15.25"
          x2="10.25"
          y1="12.75"
          y2="12.75"
        />
      </g>
    </svg>
  );
}

export default ButtonPlus;
