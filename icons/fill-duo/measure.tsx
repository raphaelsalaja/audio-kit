import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Measure({
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
          d="M9.49268 4.29013C9.78779 4.39099 10 4.67071 10 5V6.9956H5.79529L5.79944 4.29013H9.49268Z"
          fill={secondaryfill}
          fillOpacity="0.2"
        />
        <path
          d="M5.79944 4.29013L5.79529 6.9956L15.25 7C16.2162 7 17 7.78379 17 8.75V13.25C17 14.2162 16.2162 15 15.25 15H5.5C4.36637 15 3.30279 14.7567 2.49548 14.3262C1.72032 13.9128 1 13.2143 1 12.25V5C1 4.58579 1.33579 4.25 1.75 4.25L5.79944 4.29013Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M2.49548 3.49006C3.30279 3.17697 4.36637 3 5.5 3C6.63363 3 7.69721 3.17697 8.50452 3.49006C9.27968 3.79068 10 4.29869 10 5C10 5.70131 9.27968 6.20932 8.50452 6.50994C7.69721 6.82303 6.63363 7 5.5 7C4.36637 7 3.30279 6.82303 2.49548 6.50994C1.72032 6.20932 1 5.70131 1 5C1 4.29869 1.72032 3.79068 2.49548 3.49006Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M7 15H5.5V11.75C5.5 11.3358 5.83579 11 6.25 11C6.66421 11 7 11.3358 7 11.75V15Z"
          fill={fill}
        />
        <path
          d="M10.5 15H9V11.75C9 11.3358 9.33579 11 9.75 11C10.1642 11 10.5 11.3358 10.5 11.75V15Z"
          fill={fill}
        />
        <path
          d="M14 15H12.5V11.75C12.5 11.3358 12.8358 11 13.25 11C13.6642 11 14 11.3358 14 11.75V15Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Measure;
