import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function UserHistory({
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
          d="m13.7078,15.4693c-1.3209.963-2.948,1.5312-4.7078,1.5312s-3.3869-.5682-4.7079-1.5313l.1082-.4083c.5281-2.0469,2.386-3.5604,4.5996-3.5604s4.0714,1.5134,4.5996,3.5603l.1082.4085Z"
          fill={secondaryfill}
          opacity=".4"
          strokeWidth="0"
        />
        <path
          d="m6.7481,7.7505c0-1.2431,1.0074-2.25,2.25-2.25s2.25,1.0069,2.25,2.25-1.0074,2.25-2.25,2.25-2.25-1.0069-2.25-2.25Z"
          fill={secondaryfill}
          fillRule="evenodd"
          opacity=".4"
          strokeWidth="0"
        />
        <path
          d="m9,2.5c-2.7162,0-5.0446,1.6663-6.0161,4.0346-.1265.3084-.4414.4963-.7729.4612-.3315-.0351-.6-.2849-.6591-.613l-.54-3c-.0734-.4077.1976-.7976.6053-.871s.7976.1976.871.6053l.179.9945c1.4625-1.892,3.7545-3.1116,6.3328-3.1116,4.4185,0,8,3.5861,8,8s-3.5815,8-8,8c-4.3441,0-7.8791-3.4662-7.9969-7.7779-.0113-.4141.3152-.7589.7292-.7702.4141-.0113.7589.3152.7702.7292.0957,3.5023,2.9686,6.3189,6.4975,6.3189,3.5895,0,6.5-2.9139,6.5-6.5s-2.9105-6.5-6.5-6.5Z"
          fill={fill}
          fillRule="evenodd"
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default UserHistory;
