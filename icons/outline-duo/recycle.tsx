import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Recycle({
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
          d="m7.3186,3.1663L2.0235,12.3377c-.7473,1.2944.1868,2.9123,1.6814,2.9123h10.5902c1.4946,0,2.4287-1.6179,1.6814-2.9123L10.6814,3.1663c-.7473-1.2944-2.6155-1.2944-3.3628,0Z"
          fill={secondaryfill}
          opacity=".3"
          strokeWidth="0"
        />
        <path
          d="m6.3002,4.9301l1.0183-1.7638c.7473-1.2944,2.6155-1.2944,3.3628,0l2.7295,4.7277"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="m5.7415,15.25h-2.0367c-1.4946,0-2.4287-1.6179-1.6814-2.9123l2.7295-4.7277"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="m14.9582,10.5739l1.0183,1.7638c.7473,1.2944-.1868,2.9123-1.6814,2.9123h-5.4591"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <polyline
          fill="none"
          points="10.923 7.4157 13.4583 7.976 14.2822 5.5137"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <polyline
          fill="none"
          points="5.5828 10.0038 4.8004 7.528 2.256 8.0456"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <polyline
          fill="none"
          points="10.4943 13.3345 8.7413 15.25 10.4618 17.1947"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default Recycle;
