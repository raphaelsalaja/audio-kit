import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CircleSortArrows({
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
          d="M9,1C4.589,1,1,4.589,1,9s3.589,8,8,8,8-3.589,8-8S13.411,1,9,1Zm2.151,9.991l-1.695,1.978c-.24,.28-.672,.28-.911,0l-1.695-1.978c-.334-.389-.057-.991,.456-.991h3.39c.513,0,.789,.602,.456,.991Zm-.456-2.991h-3.39c-.513,0-.789-.602-.456-.991l1.695-1.978c.24-.28,.672-.28,.911,0l1.695,1.978c.334,.389,.057,.991-.456,.991Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default CircleSortArrows;
