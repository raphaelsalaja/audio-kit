import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Onlyfans({
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
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      <g fill={fill}>
        <path
          d="M10.667,5.333C4.776,5.333,0,10.109,0,16s4.776,10.667,10.667,10.667,10.667-4.776,10.667-10.667S16.558,5.333,10.667,5.333Zm0,13.867c-1.767,0-3.2-1.433-3.2-3.2s1.433-3.2,3.2-3.2,3.2,1.433,3.2,3.2c.002,1.765-1.427,3.198-3.191,3.2-.003,0-.006,0-.009,0Z"
          opacity=".8"
        />
        <path d="M22.656,13.333c2.71,.78,5.909,0,5.909,0-.928,4.053-3.872,6.592-8.118,6.901-1.683,3.906-5.528,6.435-9.781,6.432l3.2-10.171c3.29-10.454,4.976-11.162,12.777-11.162h5.356c-.896,3.947-3.984,6.961-9.344,8Z" />
      </g>
    </svg>
  );
}

export default Onlyfans;
