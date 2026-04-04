import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function DropletSlash({
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
          d="m12.4513,5.5487c-1.04-1.2482-2.3173-2.3912-3.4513-3.7987-2.417,3-5.5,4.792-5.5,8.983,0,1.0757.3116,2.0761.8423,2.9247L12.4513,5.5487Z"
          fill={secondaryfill}
          opacity=".3"
          strokeWidth="0"
        />
        <path
          d="m5.975,15.3396c.8837.6074,1.8727.9104,3.025.9104,3.038,0,5.5-2.47,5.5-5.517,0-1.2871-.2599-2.2314-.7328-3.1705l-.2433.0958-7.4844,7.5048-.0645.1765Z"
          fill={secondaryfill}
          opacity=".3"
          strokeWidth="0"
        />
        <path
          d="m6.5636,15.6806c.7343.3645,1.5615.5694,2.4364.5694,3.038,0,5.5-2.47,5.5-5.517,0-.9615-.1623-1.7967-.4415-2.5492"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="m12.4537,5.5463c-1.0399-1.2478-2.32-2.3892-3.4537-3.7963-2.417,3-5.5,4.792-5.5,8.983,0,1.076.307,2.0801.8381,2.9289"
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
          x1="2"
          x2="16"
          y1="16"
          y2="2"
        />
      </g>
    </svg>
  );
}

export default DropletSlash;
