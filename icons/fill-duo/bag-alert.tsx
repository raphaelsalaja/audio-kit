import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function BagAlert({
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
          d="M15.4055 6.512C15.2805 5.08 14.1045 4 12.6675 4H5.3335C3.8965 4 2.7185 5.08 2.5945 6.512L1.9425 14.012C1.8755 14.778 2.1355 15.542 2.6545 16.109C3.1735 16.676 3.9125 17.001 4.6815 17.001H13.3185C14.0875 17.001 14.8265 16.676 15.3455 16.109C15.8645 15.542 16.1245 14.778 16.0575 14.012L15.4055 6.512Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M7.5 3C7.5 2.17121 8.17121 1.5 9 1.5C9.82879 1.5 10.5 2.17121 10.5 3V4H12V3C12 1.34279 10.6572 0 9 0C7.34279 0 6 1.34279 6 3V4H7.5V3Z"
          fill={fill}
        />
        <path
          d="M9 7.25C9.41421 7.25 9.75 7.58579 9.75 8V10.75C9.75 11.1642 9.41421 11.5 9 11.5C8.58579 11.5 8.25 11.1642 8.25 10.75V8C8.25 7.58579 8.58579 7.25 9 7.25Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M9 13.75C9.4142 13.75 9.75 13.4142 9.75 13C9.75 12.5858 9.4142 12.25 9 12.25C8.5858 12.25 8.25 12.5858 8.25 13C8.25 13.4142 8.5858 13.75 9 13.75Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default BagAlert;
