import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function PictInPictBottomRight({
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
          d="M13.2501 9H11.7501C10.2313 9 9.00012 10.2312 9.00012 11.75V13.25C9.00012 14.7688 10.2313 16 11.7501 16H13.2501C14.7689 16 16.0001 14.7688 16.0001 13.25V11.75C16.0001 10.2312 14.7689 9 13.2501 9Z"
          fill={fill}
        />
        <path
          d="M4.46975 4.46975C4.76275 4.17675 5.23737 4.17675 5.53027 4.46975L7.49996 6.43942V5.2499C7.49996 4.8358 7.83586 4.4999 8.24996 4.4999C8.66406 4.4999 8.99996 4.8358 8.99996 5.2499V8.2499C8.99996 8.664 8.66406 8.9999 8.24996 8.9999H5.24996C4.83586 8.9999 4.49996 8.664 4.49996 8.2499C4.49996 7.8358 4.83586 7.4999 5.24996 7.4999H6.43948L4.46975 5.53024C4.17675 5.23724 4.17675 4.76265 4.46975 4.46975Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default PictInPictBottomRight;
