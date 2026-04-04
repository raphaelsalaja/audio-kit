import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ChartRadar({
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
          d="M10.5578 1.54834C9.64717 0.816721 8.35366 0.817187 7.44267 1.54798L2.43452 5.5691C1.67356 6.17993 1.33892 7.17832 1.57413 8.12487L3.06421 14.1062C3.34102 15.2176 4.33677 16 5.48198 16H12.518C13.6632 16 14.659 15.2177 14.9358 14.1062L16.4258 8.1253C16.6611 7.17961 16.3265 6.18003 15.5656 5.56918L10.5578 1.54834Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M8.63229 5.09632C8.88243 4.95562 9.19093 4.97 9.4269 5.13336L12.6769 7.38336C12.9601 7.57943 13.0734 7.94322 12.9515 8.26539L11.7185 11.5244C11.6298 11.7587 11.4301 11.9333 11.186 11.9897L6.90202 12.9807C6.54336 13.0637 6.17751 12.8741 6.03851 12.5332L4.30551 8.28319C4.16278 7.93317 4.30284 7.53164 4.63229 7.34632L8.63229 5.09632Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default ChartRadar;
