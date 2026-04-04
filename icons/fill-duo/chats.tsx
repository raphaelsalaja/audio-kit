import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Chats({
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
          d="M7 8.75C7 7.50779 8.00779 6.5 9.25 6.5H14.75C15.9922 6.5 17 7.50779 17 8.75V16.25C17 16.5469 16.8249 16.8158 16.5534 16.9359C16.2819 17.056 15.9652 17.0046 15.7455 16.805L13.21 14.5H9.25C8.00779 14.5 7 13.4922 7 12.25V8.75Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M3.75 1.5C2.23119 1.5 1 2.73119 1 4.25V13.25C1 13.5469 1.1751 13.8158 1.44658 13.9359C1.71807 14.056 2.03484 14.0046 2.2545 13.805L4.78996 11.5H5.5V8.75C5.5 6.67936 7.17936 5 9.25 5H13V4.25C13 2.73119 11.7688 1.5 10.25 1.5H3.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
      </g>
    </svg>
  );
}

export default Chats;
