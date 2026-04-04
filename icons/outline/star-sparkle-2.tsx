import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function StarSparkle2({
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
        <polygon
          fill="none"
          points="8.375 4.995 10.113 8.517 14 9.082 11.187 11.823 11.851 15.694 8.375 13.866 4.899 15.694 5.563 11.823 2.75 9.082 6.637 8.517 8.375 4.995"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="m15.25,15c.414,0,.75-.34.75-.75s-.336-.75-.75-.75-.75.34-.75.75.336.75.75.75Z"
          fill={secondaryfill}
          strokeWidth="0"
        />
        <path
          d="m5.494,3.4915l-.946-.315-.316-.947c-.102-.306-.609-.306-.711,0l-.316.947-.946.315c-.153.051-.257.194-.257.356s.104.305.257.356l.946.315.316.947c.051.153.194.256.355.256s.305-.104.355-.256l.316-.947.946-.315c.153-.051.257-.194.257-.356s-.103-.305-.256-.356Z"
          fill={secondaryfill}
          strokeWidth="0"
        />
        <path
          d="m15.657,3.0044l-1.263-.4241-.421-1.2722c-.137-.411-.812-.411-.949,0l-.421,1.2722-1.263.4241c-.204.0685-.342.2609-.342.4774s.138.4089.342.4774l1.263.4241.421,1.2722c.068.2055.26.3445.475.3445s.406-.139.475-.3445l.421-1.2722,1.263-.4241c.204-.0685.342-.2609.342-.4774s-.139-.4089-.343-.4774Z"
          fill={secondaryfill}
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default StarSparkle2;
