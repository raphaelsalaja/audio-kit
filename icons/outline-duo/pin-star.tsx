import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function PinStar({
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
          d="M14 10.568L15.004 12.603L17.25 12.929L15.625 14.513L16.009 16.75L14 15.694L11.991 16.75L12.375 14.513L10.75 12.929L12.996 12.603L14 10.568Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M8.25 1.75C11.5637 1.75 14.25 4.438 14.25 7.75C14.25 7.94538 14.2465 8.12691 14.2305 8.31836C14.1562 8.31836 14.0744 8.3211 14 8.31836C12.5729 8.31852 11.9591 9.3954 11.5 10.5469L10.4268 10.7031C9.56662 10.8281 8.90183 11.4318 8.61035 12.2334C8.20157 13.492 8.76649 14.5626 9.55575 15.3854C9.73966 15.5772 8.43289 16.1922 8.25 16.25C6.6667 15.75 2.25 12.25 2.25 7.75C2.25 4.438 4.9363 1.75 8.25 1.75ZM8.25 5.75C7.1454 5.75 6.25 6.646 6.25 7.75C6.25 8.854 7.1454 9.75 8.25 9.75C9.3546 9.75 10.25 8.854 10.25 7.75C10.25 6.646 9.3546 5.75 8.25 5.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M8.25 9.75C9.3546 9.75 10.25 8.854 10.25 7.75C10.25 6.646 9.3546 5.75 8.25 5.75C7.1454 5.75 6.25 6.646 6.25 7.75C6.25 8.854 7.1454 9.75 8.25 9.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14.25 7.57988C14.1298 4.14155 11.3006 1.75 8.25 1.75C4.9363 1.75 2.25 4.438 2.25 7.75C2.25 12.25 6.6667 15.75 8.25 16.25C8.4611 16.1833 8.72479 16.0598 9.01929 15.8911"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14 10.568L15.004 12.603L17.25 12.929L15.625 14.513L16.009 16.75L14 15.694L11.991 16.75L12.375 14.513L10.75 12.929L12.996 12.603L14 10.568Z"
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

export default PinStar;
