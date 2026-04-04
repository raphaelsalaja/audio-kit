import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Obj3dBack({
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
          d="m2.665,5.4502l5.8869-3.0698c.2903-.1514.6364-.1511.9264.0009l5.8587,3.069c.534.281.534,1.046,0,1.327l-5.87,3.091c-.292.154-.64.154-.932,0l-5.87-3.091c-.534-.281-.534-1.046,0-1.327Z"
          fill={secondaryfill}
          opacity=".3"
          strokeWidth="0"
        />
        <path
          d="m6,11.7958l-3.337-1.7568c-.267-.141-.413-.402-.413-.664v-3.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="m12,8.548l3.35-1.76c.535-.281.535-1.046,0-1.327l-5.883-3.091c-.146-.077-.307-.116-.467-.116s-.321.038-.467.116l-5.882,3.091c-.535.281-.535,1.046,0,1.327l3.349,1.7595"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="m12,11.7968l3.339-1.7578c.267-.141.413-.402.413-.664v-3.25"
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
          x1="9"
          x2="9"
          y1="6"
          y2="17"
        />
        <polyline
          fill="none"
          points="11.25 15 9 17.25 6.75 15"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default Obj3dBack;
