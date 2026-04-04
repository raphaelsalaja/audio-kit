import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function HouseDollarSign({
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
          d="m10.8182,7.5002h-2.6137c-.6904,0-1.25.5596-1.2501,1.2499,0,.6905.5596,1.2503,1.2501,1.2503h1.5912c.6902,0,1.2499.5595,1.2499,1.2498s-.5596,1.25-1.2499,1.25h-2.614"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="m9,6.75v.7502"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="m9,12.5v.7502"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="m3.145,5.95l5.25-3.99c.358-.272.853-.272,1.21,0l5.25,3.99c.249.189.395.484.395.796v7.504c0,1.105-.895,2-2,2H4.75c-1.105,0-2-.895-2-2v-7.504c0-.313.146-.607.395-.796Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default HouseDollarSign;
