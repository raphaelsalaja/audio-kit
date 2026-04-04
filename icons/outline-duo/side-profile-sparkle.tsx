import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SideProfileSparkle({
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
          d="m11.25,16.5v-2.75h1.639c1.049,0,1.919-.81,1.995-1.856l.112-1.543,1.504-.601-1.5-2c0-3.736-3.415-6.675-7.293-5.865-2.266.473-4.097,2.305-4.571,4.57-.595,2.846.84,5.418,3.114,6.6v3.445"
          fill={secondaryfill}
          opacity=".3"
          strokeWidth="0"
        />
        <path
          d="m11.589,6.9055l-1.515-.5096-.505-1.5258c-.164-.4935-.975-.4935-1.139,0l-.505,1.5258-1.515.5096c-.245.0816-.41.3132-.41.5731s.165.4915.41.5731l1.515.5096.505,1.5258c.082.2467.312.4129.57.4129s.487-.1662.57-.4129l.505-1.5258,1.515-.5096c.245-.0816.41-.3132.41-.5731s-.166-.4905-.411-.5731Z"
          fill={fill}
          strokeWidth="0"
        />
        <path
          d="m11.25,16.25v-2.5h1.639c1.049,0,1.919-.81,1.995-1.856l.112-1.543,1.504-.601-1.5-2c0-3.736-3.415-6.675-7.293-5.865-2.266.473-4.097,2.305-4.571,4.57-.595,2.846.84,5.418,3.114,6.6v3.195"
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

export default SideProfileSparkle;
