import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Monitor({
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
          d="m9.75,13h-1.5v1.5244c-1.1273.0732-2.0577.2997-2.7255.5103-.3951.1246-.6143.5458-.4898.9408.1246.3951.5458.6143.9408.4898.7052-.2224,1.7476-.4653,3.0245-.4653.7396,0,1.8063.0819,3.0248.4654.3951.1244.8162-.0951.9406-.4902.1243-.3951-.0951-.8162-.4902-.9406-1.0292-.3239-1.9642-.4605-2.7252-.5102v-1.5244Z"
          fill={fill}
          fillRule="evenodd"
          strokeWidth="0"
        />
        <path
          d="m3.75,2c-1.5192,0-2.75,1.2308-2.75,2.75v5.5c0,1.5192,1.2308,2.75,2.75,2.75h10.5c1.5192,0,2.75-1.2308,2.75-2.75v-5.5c0-1.5192-1.2308-2.75-2.75-2.75H3.75Z"
          fill={secondaryfill}
          opacity=".4"
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default Monitor;
