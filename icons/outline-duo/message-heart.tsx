import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function MessageHeart({
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
          d="M13.781 16.197C13.919 16.268 14.08 16.268 14.218 16.197C14.947 15.823 17.249 14.467 17.249 12.263C17.253 11.295 16.458 10.506 15.472 10.5C14.879 10.507 14.328 10.801 13.999 11.286C13.67 10.802 13.118 10.508 12.526 10.5C11.541 10.506 10.746 11.294 10.749 12.263C10.749 14.468 13.053 15.823 13.781 16.197Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M14.25 2.25H3.75C2.645 2.25 1.75 3.146 1.75 4.25V11.25C1.75 12.354 2.645 13.25 3.75 13.25H5.75V16.25L8.82229 14.1048C8.62328 13.5546 8.49939 12.9412 8.49897 12.2664C8.49633 11.0711 9.01431 10.0145 9.82876 9.28529C10.5445 8.64436 11.4895 8.25628 12.5123 8.25004C13.0257 8.24691 13.5293 8.34947 13.9979 8.53425C14.4562 8.35331 14.9433 8.25697 15.4416 8.25022C15.6564 8.24715 15.8725 8.26433 16.0852 8.2978C16.1708 8.31127 16.25 8.24634 16.25 8.15967V4.25C16.25 3.146 15.355 2.25 14.25 2.25Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M16.25 7.58499V4.25C16.25 3.146 15.355 2.25 14.25 2.25H3.75C2.645 2.25 1.75 3.146 1.75 4.25V11.25C1.75 12.354 2.645 13.25 3.75 13.25H5.75V16.25L8.1296 14.3464"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M13.781 16.197C13.919 16.268 14.08 16.268 14.218 16.197C14.947 15.823 17.249 14.467 17.249 12.263C17.253 11.295 16.458 10.506 15.472 10.5C14.879 10.507 14.328 10.801 13.999 11.286C13.67 10.802 13.118 10.508 12.526 10.5C11.541 10.506 10.746 11.294 10.749 12.263C10.749 14.468 13.053 15.823 13.781 16.197Z"
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

export default MessageHeart;
