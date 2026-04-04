import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function BadgeDollar({
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
          d="m16.25,9c0-1.07-.675-1.975-1.619-2.332.415-.92.252-2.038-.504-2.794s-1.874-.92-2.794-.504c-.357-.945-1.263-1.619-2.332-1.619s-1.975.675-2.332,1.619c-.92-.416-2.038-.252-2.794.504-.756.756-.919,1.874-.504,2.794-.945.357-1.619,1.263-1.619,2.332s.675,1.975,1.619,2.332c-.415.92-.252,2.038.504,2.794.756.756,1.874.92,2.794.504.357.945,1.263,1.619,2.332,1.619s1.975-.675,2.332-1.619c.92.415,2.038.252,2.794-.504s.92-1.874.504-2.794c.945-.357,1.619-1.263,1.619-2.332Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="m10.75,6.2501h-2.3752c-.7593,0-1.3748.6155-1.3748,1.3748s.6155,1.3752,1.3748,1.3752h1.2503c.7593,0,1.3748.6155,1.3748,1.3748s-.6155,1.3749-1.3748,1.3749h-2.3752"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <line
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x1="8.9999"
          x2="8.9999"
          y1="5.2499"
          y2="6.2501"
        />
        <line
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x1="8.9999"
          x2="8.9999"
          y1="12.7499"
          y2="11.7499"
        />
      </g>
    </svg>
  );
}

export default BadgeDollar;
