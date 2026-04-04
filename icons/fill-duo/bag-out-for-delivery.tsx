import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function BagOutForDelivery({
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
          d="M8.5 3C8.5 2.17121 9.17121 1.5 10 1.5C10.8288 1.5 11.5 2.17121 11.5 3V4H13V3C13 1.34279 11.6572 0 10 0C8.34279 0 7 1.34279 7 3V4H8.5V3Z"
          fill={fill}
        />
        <path
          d="M13.6675 4C15.1045 4 16.2815 5.08 16.4065 6.512L17.0575 14.012C17.1245 14.778 16.8645 15.542 16.3455 16.109C15.8265 16.676 15.0875 17.001 14.3185 17.001H5.6815C4.9125 17.001 4.1735 16.676 3.6545 16.109C3.1355 15.542 2.8755 14.778 2.9425 14.012L2.94354 14H5C5.41421 14 5.75 13.6642 5.75 13.25C5.75 12.8358 5.41421 12.5 5 12.5H0.75C0.335786 12.5 0 12.1642 0 11.75C0 11.3358 0.335786 11 0.75 11H7.75C8.16421 11 8.5 10.6642 8.5 10.25C8.5 9.83579 8.16421 9.5 7.75 9.5H3.33474L3.5945 6.512C3.7185 5.08 4.8965 4 6.3335 4H13.6675Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
      </g>
    </svg>
  );
}

export default BagOutForDelivery;
