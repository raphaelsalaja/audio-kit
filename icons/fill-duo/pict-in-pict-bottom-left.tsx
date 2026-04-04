import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function PictInPictBottomLeft({
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
          d="M13.2501 2H4.75012C3.23134 2 2.00012 3.23122 2.00012 4.75V13.25C2.00012 14.7688 3.23134 16 4.75012 16H13.2501C14.7689 16 16.0001 14.7688 16.0001 13.25V4.75C16.0001 3.23122 14.7689 2 13.2501 2Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M6.25012 9H4.75012C3.23134 9 2.00012 10.2312 2.00012 11.75V13.25C2.00012 14.7688 3.23134 16 4.75012 16H6.25012C7.76891 16 9.00012 14.7688 9.00012 13.25V11.75C9.00012 10.2312 7.76891 9 6.25012 9Z"
          fill={fill}
        />
        <path
          d="M13.5304 4.46975C13.2374 4.17675 12.7628 4.17675 12.4699 4.46975L10.5002 6.43942V5.2499C10.5002 4.8358 10.1643 4.4999 9.75024 4.4999C9.33614 4.4999 9.00024 4.8358 9.00024 5.2499V8.2499C9.00024 8.664 9.33614 8.9999 9.75024 8.9999H12.7502C13.1643 8.9999 13.5002 8.664 13.5002 8.2499C13.5002 7.8358 13.1643 7.4999 12.7502 7.4999H11.5607L13.5304 5.53024C13.8234 5.23724 13.8234 4.76265 13.5304 4.46975Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default PictInPictBottomLeft;
