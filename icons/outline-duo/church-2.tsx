import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Church2({
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
          d="m3.145,5.95l5.25-3.99c.358-.272.853-.272,1.21,0l5.25,3.99c.249.189.395.484.395.796v7.504c0,1.105-.895,2-2,2H4.75c-1.105,0-2-.895-2-2v-7.504c0-.313.146-.607.395-.796Z"
          fill={secondaryfill}
          opacity=".3"
          strokeWidth="0"
        />
        <path
          d="m6,16.25h-1.25c-1.105,0-2-.895-2-2v-7.504c0-.313.146-.607.395-.796l5.25-3.99c.358-.272.853-.272,1.21,0l5.25,3.99c.249.189.395.484.395.796v7.504c0,1.105-.895,2-2,2h-1.25"
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
          y1="5.75"
          y2="16.25"
        />
        <line
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x1="11.75"
          x2="6.25"
          y1="8.75"
          y2="8.75"
        />
      </g>
    </svg>
  );
}

export default Church2;
