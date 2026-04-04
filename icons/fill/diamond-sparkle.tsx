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
          d="m16.2773,5.6094l-2.4038-2.5562c-.3311-.3521-.7993-.5542-1.2847-.5542h-7.1777c-.4854,0-.9536.2021-1.2847.5542l-2.4038,2.5562s-.0005.0005-.001.0005c-.5796.6187-.6309,1.5581-.1216,2.2344l5.9927,7.9561c.3345.4443.8467.6997,1.4058.6997h.001c.5591,0,1.0723-.2549,1.4077-.6997l5.9927-7.9561c.5098-.6772.4585-1.6172-.1226-2.2349Zm-3.6873,2.9424l-1.515.5095-.505,1.5256c-.083.2468-.312.4131-.57.4131s-.488-.1663-.57-.4131l-.505-1.5256-1.515-.5095c-.2451-.0815-.41-.3135-.41-.5732s.165-.4915.41-.573l1.515-.5095.505-1.5259c.164-.4937.975-.4937,1.139,0l.505,1.5259,1.515.5095c.245.0825.411.3132.411.573s-.165.4917-.41.5732Z"
          fill={fill}
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default DiamondSparkle;
