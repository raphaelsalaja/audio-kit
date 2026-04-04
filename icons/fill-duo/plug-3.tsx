import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Plug3({
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
          d="m15.4268,9.998l-7.4248-7.4248v-.0005c-.6836-.6807-1.793-.6812-2.4746.0005l-1.2373,1.2373c-2.7295,2.7295-2.7295,7.1704,0,9.8994,1.3213,1.3213,3.0791,2.0488,4.9492,2.0488,1.8711,0,3.6289-.7275,4.9502-2.0488l1.2373-1.2368c.3301-.3306.5127-.77.5127-1.2378s-.1826-.9072-.5127-1.2373Z"
          fill={secondaryfill}
          opacity=".4"
          strokeWidth="0"
        />
        <path
          d="m4.29,13.71c-.1793-.1792-.3452-.3667-.5009-.5596l-1.8194,1.8193c-.293.293-.293.7676,0,1.0605.1465.1465.3379.2197.5303.2197s.3838-.0732.5303-.2197l1.8198-1.8198c-.1937-.1565-.3815-.322-.56-.5005Z"
          fill={fill}
          strokeWidth="0"
        />
        <path
          d="m10.2999,4.8711l1.5917-1.5908c.293-.2925.293-.7676,0-1.0605-.293-.2925-.7676-.2935-1.0605,0l-1.5917,1.5908,1.0605,1.0605Z"
          fill={fill}
          strokeWidth="0"
        />
        <path
          d="m14.1892,8.7605l1.5911-1.5911c.293-.293.293-.7676,0-1.0605s-.7676-.293-1.0605,0l-1.5911,1.5911,1.0605,1.0605Z"
          fill={fill}
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default Plug3;
