import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Sparkle22({
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
      viewBox="0 0 12 12"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      <g fill={fill}>
        <polygon
          fill="none"
          points="6.5 10.25 7.845 6.846 11.25 5.5 7.845 4.154 6.5 .75 5.154 4.154 1.75 5.5 5.154 6.846 6.5 10.25"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
        />
        <path
          d="m3.492,10.508l-.946.315-.316.947c-.102.306-.609.306-.711,0l-.316-.947-.946-.315c-.153-.051-.257-.194-.257-.356s.104-.305.257-.356l.946-.315.316-.947c.051-.153.194-.256.355-.256s.305.104.355.256l.316.947.946.315c.153.051.257.194.257.356s-.104.305-.257.356h0Z"
          fill={secondaryfill}
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default Sparkle22;
