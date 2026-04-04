import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SuitcaseHeart({
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
          d="M8.499 12.7632C8.4922 10.5654 10.2925 8.7632 12.5127 8.75C13.0347 8.7563 13.5332 8.85298 13.9951 9.03418C14.4531 8.85298 14.9429 8.7559 15.4453 8.75C15.7213 8.7515 15.99 8.78167 16.25 8.83447V6.75C16.25 5.645 15.3546 4.75 14.25 4.75H3.75C2.6454 4.75 1.75 5.645 1.75 6.75V13C1.75 14.105 2.6454 15 3.75 15H8.9874C8.6893 14.3411 8.499 13.5977 8.499 12.7632Z"
          fill={secondaryfill}
          fillRule="evenodd"
          opacity="0.3"
          stroke="none"
        />
        <path
          d="M13.781 16.697C13.919 16.768 14.08 16.768 14.218 16.697C14.947 16.323 17.249 14.967 17.249 12.763C17.253 11.795 16.458 11.006 15.472 11C14.879 11.007 14.328 11.301 13.999 11.786C13.67 11.302 13.118 11.008 12.526 11C11.541 11.006 10.746 11.794 10.749 12.763C10.749 14.968 13.053 16.323 13.781 16.697Z"
          fill={secondaryfill}
          opacity="0.3"
          stroke="none"
        />
        <path
          d="M6.25 4.75V2.25C6.25 1.698 6.698 1.25 7.25 1.25H10.75C11.302 1.25 11.75 1.698 11.75 2.25V4.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M16.25 8.08502V6.75C16.25 5.646 15.355 4.75 14.25 4.75H3.75C2.645 4.75 1.75 5.646 1.75 6.75V13.25C1.75 14.354 2.645 15.25 3.75 15.25H8.2999"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M13.781 16.697C13.919 16.768 14.08 16.768 14.218 16.697C14.947 16.323 17.249 14.967 17.249 12.763C17.253 11.795 16.458 11.006 15.472 11C14.879 11.007 14.328 11.301 13.999 11.786C13.67 11.302 13.118 11.008 12.526 11C11.541 11.006 10.746 11.794 10.749 12.763C10.749 14.968 13.053 16.323 13.781 16.697Z"
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

export default SuitcaseHeart;
