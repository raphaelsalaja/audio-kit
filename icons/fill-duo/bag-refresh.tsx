import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function BagRefresh({
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
          d="M17.5 11.25C17.5 10.8358 17.1642 10.5 16.75 10.5C16.3358 10.5 16 10.8358 16 11.25V11.6276C15.4334 11.2322 14.7442 11 14 11C12.0668 11 10.5 12.5668 10.5 14.5C10.5 16.4332 12.0668 18 14 18C15.003 18 15.9088 17.5765 16.5455 16.9017C16.8298 16.6004 16.816 16.1257 16.5147 15.8415C16.2134 15.5572 15.7387 15.571 15.4545 15.8723C15.0892 16.2595 14.573 16.5 14 16.5C12.8952 16.5 12 15.6048 12 14.5C12 13.3952 12.8952 12.5 14 12.5C14.5065 12.5 14.9697 12.6885 15.3228 13H14.25C13.8358 13 13.5 13.3358 13.5 13.75C13.5 14.1642 13.8358 14.5 14.25 14.5H16.75C17.1642 14.5 17.5 14.1642 17.5 13.75V11.25Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M12.6675 4C14.1045 4 15.2805 5.08 15.4055 6.512L15.6469 9.28852C15.4755 9.38512 15.318 9.50353 15.1783 9.63999C14.8002 9.54851 14.4055 9.5 14 9.5C11.2384 9.5 9 11.7384 9 14.5C9 15.4112 9.24366 16.2654 9.66939 17.001H4.6815C3.9125 17.001 3.1735 16.676 2.6545 16.109C2.1355 15.542 1.8755 14.778 1.9425 14.012L2.5945 6.512C2.7185 5.08 3.8965 4 5.3335 4H12.6675Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
      </g>
    </svg>
  );
}

export default BagRefresh;
