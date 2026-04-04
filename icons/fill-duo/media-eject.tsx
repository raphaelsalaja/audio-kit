import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function MediaEject({
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
          d="M10.4091 2.33373C9.79417 1.2222 8.20622 1.22417 7.5911 2.33325L3.02086 10.5867C2.43039 11.6539 3.18205 13.001 4.42998 13.001H13.57C14.8154 13.001 15.5705 11.6566 14.9793 10.5879L10.4091 2.33373Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M2.75 15.25C2.75 14.8358 3.08579 14.5 3.5 14.5H14.5C14.9142 14.5 15.25 14.8358 15.25 15.25C15.25 15.6642 14.9142 16 14.5 16H3.5C3.08579 16 2.75 15.6642 2.75 15.25Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default MediaEject;
