import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function FolderRefresh({
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
          d="M4.25 2C2.73079 2 1.5 3.23079 1.5 4.75V6.5H16.5V6.25C16.5 4.73079 15.2692 3.5 13.75 3.5H8.72395L8.34569 3.02827C7.82347 2.37825 7.03552 2 6.201 2H4.25Z"
          fill={fill}
        />
        <path
          d="M18 11.25C18 10.8358 17.6642 10.5 17.25 10.5C16.8358 10.5 16.5 10.8358 16.5 11.25V11.6276C15.9334 11.2322 15.2442 11 14.5 11C12.5668 11 11 12.5668 11 14.5C11 16.4332 12.5668 18 14.5 18C15.503 18 16.4088 17.5765 17.0455 16.9017C17.3298 16.6004 17.316 16.1257 17.0147 15.8415C16.7134 15.5572 16.2387 15.571 15.9545 15.8723C15.5892 16.2595 15.073 16.5 14.5 16.5C13.3952 16.5 12.5 15.6048 12.5 14.5C12.5 13.3952 13.3952 12.5 14.5 12.5C15.0065 12.5 15.4697 12.6885 15.8228 13H14.75C14.3358 13 14 13.3358 14 13.75C14 14.1642 14.3358 14.5 14.75 14.5H17.25C17.6642 14.5 18 14.1642 18 13.75V11.25Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M16.5 6.5H1.5V13.25C1.5 14.7692 2.73079 16 4.25 16H9.72886C9.58016 15.5265 9.5 15.0226 9.5 14.5C9.5 11.7384 11.7384 9.5 14.5 9.5C14.9055 9.5 15.3002 9.54851 15.6783 9.63999C15.9094 9.41428 16.189 9.23794 16.5 9.12803V6.5Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
      </g>
    </svg>
  );
}

export default FolderRefresh;
