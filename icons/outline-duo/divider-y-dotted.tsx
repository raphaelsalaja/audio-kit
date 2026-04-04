import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function DividerYDotted({
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
          d="m15.25,2v1.75c0,1.1046-.8954,2-2,2H4.75c-1.1046,0-2-.8954-2-2v-1.75h12.5Z"
          fill={secondaryfill}
          opacity=".3"
          strokeWidth="0"
        />
        <path
          d="m15.25,16v-1.75c0-1.1046-.8954-2-2-2H4.75c-1.1046,0-2,.8954-2,2v1.75h12.5Z"
          fill={secondaryfill}
          opacity=".3"
          strokeWidth="0"
        />
        <path
          d="m15.25,2.75v1c0,1.105-.895,2-2,2H4.75c-1.105,0-2-.895-2-2v-1"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="m15.25,15.25v-1c0-1.105-.895-2-2-2H4.75c-1.105,0-2,.895-2,2v1"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="m15.25,9.75c.4142,0,.75-.3358.75-.75s-.3358-.75-.75-.75-.75.3358-.75.75.3358.75.75.75Z"
          fill={fill}
          strokeWidth="0"
        />
        <path
          d="m12.125,9.75c.4142,0,.75-.3358.75-.75s-.3358-.75-.75-.75-.75.3358-.75.75.3358.75.75.75Z"
          fill={fill}
          strokeWidth="0"
        />
        <path
          d="m9,9.75c.4142,0,.75-.3358.75-.75s-.3358-.75-.75-.75-.75.3358-.75.75.3358.75.75.75Z"
          fill={fill}
          strokeWidth="0"
        />
        <path
          d="m5.875,9.75c.4142,0,.75-.3358.75-.75s-.3358-.75-.75-.75-.75.3358-.75.75.3358.75.75.75Z"
          fill={fill}
          strokeWidth="0"
        />
        <path
          d="m2.75,9.75c.4142,0,.75-.3358.75-.75s-.3358-.75-.75-.75-.75.3358-.75.75.3358.75.75.75Z"
          fill={fill}
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default DividerYDotted;
