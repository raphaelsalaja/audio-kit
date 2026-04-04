import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function DiamondSparkle({
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
          d="m2.269,6.123l2.404-2.556c.191-.203.458-.318.738-.318h7.178c.28,0,.547.115.738.318l2.404,2.556c.33.351.36.885.07,1.27l-5.993,7.956c-.403.535-1.214.535-1.616,0L2.199,7.393c-.29-.385-.26-.918.07-1.27Z"
          fill={secondaryfill}
          opacity=".3"
          strokeWidth="0"
        />
        <path
          d="m2.269,6.123l2.404-2.556c.191-.203.458-.318.738-.318h7.178c.28,0,.547.115.738.318l2.404,2.556c.33.351.36.885.07,1.27l-5.993,7.956c-.403.535-1.214.535-1.616,0L2.199,7.393c-.29-.385-.26-.918.07-1.27Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="m12.589,7.4055l-1.515-.5096-.505-1.5258c-.164-.4935-.975-.4935-1.139,0l-.505,1.5258-1.515.5096c-.245.0816-.41.3132-.41.5731s.165.4915.41.5731l1.515.5096.505,1.5258c.082.2467.312.4129.57.4129s.487-.1662.57-.4129l.505-1.5258,1.515-.5096c.245-.0816.41-.3132.41-.5731s-.166-.4905-.411-.5731Z"
          fill={fill}
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default DiamondSparkle;
