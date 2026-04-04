import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function BagPlus({
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
          d="M15.5 10.75C15.5 10.3358 15.1642 10 14.75 10C14.3358 10 14 10.3358 14 10.75V12.5H12.25C11.8358 12.5 11.5 12.8358 11.5 13.25C11.5 13.6642 11.8358 14 12.25 14H14V15.75C14 16.1642 14.3358 16.5 14.75 16.5C15.1642 16.5 15.5 16.1642 15.5 15.75V14H17.25C17.6642 14 18 13.6642 18 13.25C18 12.8358 17.6642 12.5 17.25 12.5H15.5V10.75Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M12.6675 4C14.1045 4 15.2805 5.08 15.4055 6.512L15.5925 8.66304C15.3323 8.55789 15.0479 8.5 14.75 8.5C13.5074 8.5 12.5 9.50736 12.5 10.75V11H12.25C11.0074 11 10 12.0074 10 13.25C10 14.4926 11.0074 15.5 12.25 15.5H12.5V15.75C12.5 16.213 12.6398 16.6433 12.8796 17.001H4.6815C3.9125 17.001 3.1735 16.676 2.6545 16.109C2.1355 15.542 1.8755 14.778 1.9425 14.012L2.5945 6.512C2.7185 5.08 3.8965 4 5.3335 4H12.6675Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
      </g>
    </svg>
  );
}

export default BagPlus;
