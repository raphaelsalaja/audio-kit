import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CircleBolt({
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
          d="m9,17c-4.4111,0-8-3.5889-8-8S4.5889,1,9,1s8,3.5889,8,8-3.5889,8-8,8Z"
          fill={secondaryfill}
          opacity=".4"
          strokeWidth="0"
        />
        <path
          d="m11.7026,8h-2.0454l.6426-3.3594c.0664-.3481-.1201-.6958-.4478-.8325-.3286-.1396-.7065-.0249-.9072.2671l-3.2656,4.75c-.1577.2295-.1753.5273-.0454.7739.1294.2466.3853.4009.6636.4009h2.0454l-.6426,3.3589c-.0664.3486.1201.6963.4478.833.0938.0396.1919.0581.2886.0581.2412,0,.4751-.1167.6187-.3252l3.2656-4.75c.1577-.2295.1753-.5273.0454-.7739-.1294-.2466-.3853-.4009-.6636-.4009Z"
          fill={fill}
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default CircleBolt;
