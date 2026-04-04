import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ChessKnight({
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
          d="m2.5039,7.3501c.3896.813,1.3398,1.1904,2.207.8745,1.0898-.3945,1.6172-.25,2.2285-.0806.2256.062.459.127.7168.167,1.3438.23,2.6614-.0757,2.6614-.0757,0,0-.7122.9861-3.6713,1.1584-.856.8586-2.1464,1.665-2.1464,3.6062h9.0444c1.649-3.0098,1.6667-6.2676.3599-8.8062C12.6914,1.8369,10.2793.3999,7.2871.251c-.2109-.0073-.4053.064-.5537.2056-.1494.1416-.2334.3379-.2334.5435v1.5674l-3.5215,2.0352c-.7871.4546-1.0957,1.4517-.7031,2.27l.2285.4775Z"
          fill={secondaryfill}
          opacity=".4"
          strokeWidth="0"
        />
        <path
          d="m14.4146,14.1514l-.9166-1.1514H4.502l-.9166,1.1514c-.4268.5293-.5107,1.2393-.2168,1.853.293.6143.8984.9956,1.5791.9956h8.1046c.6807,0,1.2861-.3813,1.5791-.9956.2939-.6138.21-1.3237-.2168-1.853Z"
          fill={fill}
          strokeWidth="0"
        />
        <circle cx="8" cy="4.5" fill={fill} r="1" strokeWidth="0" />
      </g>
    </svg>
  );
}

export default ChessKnight;
