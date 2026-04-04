import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function LightSwitch({
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
          d="m13.6104,15.0581c-.2383.2808-.5859.4419-.9541.4419h-7.3125c-.3682,0-.7158-.1611-.9541-.4419-.1171-.1384-.2003-.2988-.2483-.4688l.2766,1.0923c.1982.7764.8955,1.3184,1.6963,1.3184h5.7715c.7998,0,1.498-.542,1.6963-1.3198l.2766-1.0908c-.048.1702-.1312.3303-.2482.4688Z"
          fill={secondaryfill}
          opacity=".4"
          strokeWidth="0"
        />
        <path
          d="m11.75,1h-5.5c-.6904,0-1.25.5596-1.25,1.25v6.75h8V2.25c0-.6904-.5596-1.25-1.25-1.25Z"
          fill={fill}
          strokeWidth="0"
        />
        <path
          d="m13,9H5l-.8896,5.0449c-.0596.3633.042.7324.2793,1.0132.2383.2808.5859.4419.9541.4419h7.3125c.3682,0,.7158-.1611.9541-.4419.2373-.2808.3389-.6499.2793-1.0132l-.8896-5.0449Z"
          fill={secondaryfill}
          opacity=".2"
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default LightSwitch;
