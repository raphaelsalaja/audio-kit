import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function PlugOff({
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
          d="m9.75,12.25c0-.6011.2344-1.166.6592-1.5908.4248-.4253.9902-.6592,1.5908-.6592s1.166.2339,1.5908.6592l.4613.4613c.1995-.2533.2937-.3978.2937-.3978.5706-.9414.9042-2.0417.9042-3.2227v-1.75c0-.552-.448-1-1-1H3.75c-.552,0-1,.448-1,1v1.75c0,3.3342,2.6196,6.0547,5.9099,6.2329l.3401.0171.3401-.0171c.3013-.0164.5944-.0608.883-.1184-.3014-.3909-.4731-.8625-.4731-1.3645Z"
          fill={secondaryfill}
          opacity=".3"
          strokeWidth="0"
        />
        <path
          d="m9,16.25v-2.5l-.3401-.0171c-3.2902-.1782-5.9099-2.8987-5.9099-6.2329v-1.75c0-.552.448-1,1-1h10.5c.552,0,1,.448,1,1v1.75c0,.6189-.0934,1.2156-.2614,1.7803"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <line
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x1="6.25"
          x2="6.25"
          y1="4.75"
          y2="1.75"
        />
        <line
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x1="11.75"
          x2="11.75"
          y1="4.75"
          y2="1.75"
        />
        <line
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x1="12"
          x2="16"
          y1="12.25"
          y2="16.25"
        />
        <line
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x1="16"
          x2="12"
          y1="12.25"
          y2="16.25"
        />
      </g>
    </svg>
  );
}

export default PlugOff;
