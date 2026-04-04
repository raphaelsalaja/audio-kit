import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SolarPanel({
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
        <polygon fill={fill} points="7.794 2 7.36 6 10.64 6 10.206 2 7.794 2" />
        <polygon
          fill={fill}
          points="11.292 12 10.803 7.5 7.197 7.5 6.708 12 11.292 12"
        />
        <path
          d="M12.15,6h3.44l-.902-2.788c-.233-.725-.902-1.212-1.665-1.212h-1.307l.434,4Z"
          fill={fill}
        />
        <path
          d="M16.075,7.5h-3.762l.489,4.5h2.323c.566,0,1.083-.263,1.416-.721s.424-1.029,.25-1.568l-.716-2.211Z"
          fill={fill}
        />
        <path
          d="M5.687,7.5H1.925l-.716,2.211c-.174,.539-.083,1.11,.25,1.568s.85,.721,1.416,.721h2.323l.489-4.5Z"
          fill={fill}
        />
        <path
          d="M5.85,6l.434-4h-1.307c-.763,0-1.432,.487-1.665,1.211l-.902,2.789h3.44Z"
          fill={fill}
        />
        <path
          d="M12.25,14.5h-2.5v-1h-1.5v1h-2.5c-.414,0-.75,.336-.75,.75s.336,.75,.75,.75h6.5c.414,0,.75-.336,.75-.75s-.336-.75-.75-.75Z"
          fill={secondaryfill}
        />
      </g>
    </svg>
  );
}

export default SolarPanel;
