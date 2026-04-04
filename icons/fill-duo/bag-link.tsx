import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function BagLink({
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
          d="M7.5 3C7.5 2.17121 8.17121 1.5 9 1.5C9.82879 1.5 10.5 2.17121 10.5 3V4H12V3C12 1.34279 10.6572 0 9 0C7.34279 0 6 1.34279 6 3V4H7.5V3Z"
          fill={fill}
        />
        <path
          d="M11 13C10.4477 13 10 13.4477 10 14V15C10 15.5523 10.4477 16 11 16H11.5C11.9142 16 12.25 16.3358 12.25 16.75C12.25 17.1642 11.9142 17.5 11.5 17.5H11C9.61929 17.5 8.5 16.3807 8.5 15V14C8.5 12.6193 9.61929 11.5 11 11.5H11.5C11.9142 11.5 12.25 11.8358 12.25 12.25C12.25 12.6642 11.9142 13 11.5 13H11Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M13.75 12.25C13.75 11.8358 14.0858 11.5 14.5 11.5H15C16.3807 11.5 17.5 12.6193 17.5 14V15C17.5 16.3807 16.3807 17.5 15 17.5H14.5C14.0858 17.5 13.75 17.1642 13.75 16.75C13.75 16.3358 14.0858 16 14.5 16H15C15.5523 16 16 15.5523 16 15V14C16 13.4477 15.5523 13 15 13H14.5C14.0858 13 13.75 12.6642 13.75 12.25Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M11 14.5C11 14.0858 11.3358 13.75 11.75 13.75H14.25C14.6642 13.75 15 14.0858 15 14.5C15 14.9142 14.6642 15.25 14.25 15.25H11.75C11.3358 15.25 11 14.9142 11 14.5Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M12.6675 4C14.1045 4 15.2805 5.08 15.4055 6.512L15.7142 10.0636C15.4825 10.0218 15.2438 10 15 10C13.6667 10 12.3333 10 11 10C8.79086 10 7 11.7909 7 14V15C7 15.729 7.19501 16.4124 7.53571 17.001H4.6815C3.9125 17.001 3.1735 16.676 2.6545 16.109C2.1355 15.542 1.8755 14.778 1.9425 14.012L2.5945 6.512C2.7185 5.08 3.8965 4 5.3335 4H12.6675Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
      </g>
    </svg>
  );
}

export default BagLink;
