import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function EnterHome({
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
          d="m2.75,13.75v.5c0,1.105.895,2,2,2h8.5c1.105,0,2-.895,2-2v-7.5039c0-.312-.146-.6072-.395-.7961l-5.25-3.99c-.3571-.272-.8521-.272-1.21,0l-5.25,3.99c-.249.189-.395.4832-.395.7961v1.0039"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <polyline
          fill="none"
          points="7.25 8.25 9.75 10.75 7.25 13.25"
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
          x1="9.5"
          x2="2.75"
          y1="10.75"
          y2="10.75"
        />
      </g>
    </svg>
  );
}

export default EnterHome;
