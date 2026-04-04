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
          d="M8.25 1.75C11.5637 1.75 14.25 4.438 14.25 7.75V8.94727C14.164 8.975 14.0789 9.00489 13.9951 9.03809C13.5091 8.84583 12.9624 8.73071 12.5127 8.75C10.1162 8.85289 8.19594 10.7015 8.54199 13.4414C8.65167 14.3098 8.96248 15.0596 9.34863 15.6885C8.93692 15.9288 8.45899 16.184 8.25 16.25C6.6667 15.75 2.25 12.25 2.25 7.75C2.25 4.438 4.9363 1.75 8.25 1.75ZM8.25 5.75C7.1454 5.75 6.25 6.646 6.25 7.75C6.25 8.854 7.1454 9.75 8.25 9.75C9.3546 9.75 10.25 8.854 10.25 7.75C10.25 6.646 9.3546 5.75 8.25 5.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M13.781 16.697C13.919 16.768 14.08 16.768 14.218 16.697C14.947 16.323 17.249 14.967 17.249 12.763C17.253 11.795 16.458 11.006 15.472 11C14.879 11.007 14.328 11.301 13.999 11.786C13.67 11.302 13.118 11.008 12.526 11C11.541 11.006 10.746 11.794 10.749 12.763C10.749 14.968 13.052 16.323 13.78 16.697H13.781Z"
          fill={secondaryfill}
          fillOpacity="0.3"
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
          d="M13.781 16.697C13.919 16.768 14.08 16.768 14.218 16.697C14.947 16.323 17.249 14.967 17.249 12.763C17.253 11.795 16.458 11.006 15.472 11C14.879 11.007 14.328 11.301 13.999 11.786C13.67 11.302 13.118 11.008 12.526 11C11.541 11.006 10.746 11.794 10.749 12.763C10.749 14.968 13.052 16.323 13.78 16.697H13.781Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M8.94821 15.9331C8.68201 16.0811 8.4443 16.1887 8.25 16.25C6.6667 15.75 2.25 12.25 2.25 7.75C2.25 4.438 4.9363 1.75 8.25 1.75C11.539 1.75 14.2066 4.39899 14.2463 7.67679C14.2463 7.67679 14.2463 8.18323 14.2188 8.32422"
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

export default PinHeart;
