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
          d="m16.2773,5.6094l-2.4038-2.5562c-.3311-.3521-.7993-.5542-1.2847-.5542h-7.1777c-.4854,0-.9536.2021-1.2847.5542l-2.4038,2.5562s-.0005.0005-.001.0005c-.5796.6187-.6309,1.5581-.1216,2.2344l5.9927,7.9561c.3345.4443.8467.6997,1.4058.6997h.001c.5591,0,1.0723-.2549,1.4077-.6997l5.9927-7.9561c.5098-.6772.4585-1.6172-.1226-2.2349Z"
          fill={secondaryfill}
          opacity=".4"
          strokeWidth="0"
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
