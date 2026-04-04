import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function PaperPlane4Link({
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
          d="M11.5 9.5C9.29678 9.5 7.5096 11.2813 7.50004 13.4823L3.00499 15.412C2.60099 15.622 2.14199 15.244 2.27199 14.807L3.99299 9.00002L2.27199 3.19302C2.14299 2.75602 2.60099 2.37802 3.00499 2.58802L14.471 8.54202C14.6982 8.6602 14.8729 9.11981 14.889 9.50269C13.7602 9.55754 12.6296 9.5 11.5 9.5Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M8.38598 9H3.99298"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14.8716 8.75001L3.00502 2.58802C2.60102 2.37802 2.14302 2.756 2.27202 3.193L3.99302 9.00001L2.27202 14.807C2.14302 15.244 2.60102 15.622 3.00502 15.412L6.75002 13.4677"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M12 16.25H11.5C10.5335 16.25 9.75 15.4665 9.75 14.5V13.5C9.75 12.5335 10.5335 11.75 11.5 11.75H12"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15 16.25H15.5C16.4665 16.25 17.25 15.4665 17.25 14.5V13.5C17.25 12.5335 16.4665 11.75 15.5 11.75H15"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M12.25 14H14.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default PaperPlane4Link;
