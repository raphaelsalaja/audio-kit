import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SideProfileQuestion({
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
          d="m11.25,16.25v-2.5h1.639c1.049,0,1.919-.81,1.995-1.856l.112-1.543,1.504-.601-1.5-2c0-3.736-3.415-6.675-7.293-5.865-2.266.473-4.097,2.305-4.571,4.57-.595,2.846.84,5.418,3.114,6.6v3.195"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="m7.1679,6.0594c.341-.9314,1.1371-1.3094,1.9157-1.3094.7865,0,1.6976.5585,1.5976,1.5819-.1391,1.4241-1.5141,1.2586-1.8202,2.3726"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="m8.875,12c-.4821,0-.875-.3937-.875-.875s.3929-.875.875-.875.875.3938.875.875-.3929.875-.875.875Z"
          fill={secondaryfill}
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default SideProfileQuestion;
