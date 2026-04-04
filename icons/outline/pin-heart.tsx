import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function PinHeart({
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
          d="M8.25 9.75C9.3546 9.75 10.25 8.854 10.25 7.75C10.25 6.646 9.3546 5.75 8.25 5.75C7.1454 5.75 6.25 6.646 6.25 7.75C6.25 8.854 7.1454 9.75 8.25 9.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14.224 8.1824C14.2331 8.0384 14.25 7.8963 14.25 7.75C14.25 4.438 11.5637 1.75 8.25 1.75C4.9363 1.75 2.25 4.438 2.25 7.75C2.25 12.25 6.6667 15.75 8.25 16.25C8.3846 16.2075 8.54561 16.1357 8.71671 16.051"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M13.781 16.697C13.919 16.768 14.08 16.768 14.218 16.697C14.947 16.323 17.249 14.967 17.249 12.763C17.253 11.795 16.458 11.006 15.472 11C14.879 11.007 14.328 11.301 13.999 11.786C13.67 11.302 13.118 11.008 12.526 11C11.541 11.006 10.746 11.794 10.749 12.763C10.749 14.968 13.052 16.323 13.78 16.697H13.781Z"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default PinHeart;
