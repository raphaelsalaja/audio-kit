import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SidebarEdit({
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
        <line
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x1="6.25"
          x2="6.25"
          y1="2.75"
          y2="15.25"
        />
        <path
          d="m16.25,7.1675v-2.4175c0-1.1045-.8954-2-2-2H3.75c-1.1046,0-2,.8955-2,2v8.5c0,1.1045.8954,2,2,2h3.9156"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="m13.2959,15.4542l3.1612-3.1612c.3905-.3905.3905-1.0237,0-1.4142l-.5858-.5858c-.3905-.3905-1.0237-.3905-1.4142,0l-3.1612,3.1612-.7958,2.7959,2.7959-.7958Z"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default SidebarEdit;
