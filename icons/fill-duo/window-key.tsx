import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function WindowKey({
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
          d="M14.2501 2H3.75006C2.23346 2 1.00006 3.2334 1.00006 4.75V7H17.0001V4.75C17.0001 3.2334 15.7667 2 14.2501 2ZM3.50006 5.5C2.94776 5.5 2.50006 5.0522 2.50006 4.5C2.50006 3.9478 2.94776 3.5 3.50006 3.5C4.05236 3.5 4.50006 3.9478 4.50006 4.5C4.50006 5.0522 4.05226 5.5 3.50006 5.5ZM6.50006 5.5C5.94776 5.5 5.50006 5.0522 5.50006 4.5C5.50006 3.9478 5.94776 3.5 6.50006 3.5C7.05236 3.5 7.50006 3.9478 7.50006 4.5C7.50006 5.0522 7.05226 5.5 6.50006 5.5Z"
          fill={fill}
        />
        <path
          d="M8.5 14.25C8.5 12.7312 9.73119 11.5 11.25 11.5C12.5088 11.5 13.57 12.3457 13.8965 13.5H15.75H17.25C17.6642 13.5 18 13.8358 18 14.25C18 14.6642 17.6642 15 17.25 15H16.5V15.75C16.5 16.1642 16.1642 16.5 15.75 16.5C15.3358 16.5 15 16.1642 15 15.75V15H13.8965C13.57 16.1543 12.5088 17 11.25 17C9.73119 17 8.5 15.7688 8.5 14.25ZM11.25 13C11.9404 13 12.5 13.5596 12.5 14.25C12.5 14.9404 11.9404 15.5 11.25 15.5C10.5596 15.5 10 14.9404 10 14.25C10 13.5596 10.5596 13 11.25 13Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M17.0001 12H14.8558C14.1053 10.7994 12.7722 10 11.25 10C8.90276 10 7 11.9028 7 14.25C7 14.8739 7.13441 15.4663 7.37586 16H3.75006C2.23136 16 1.00006 14.7686 1.00006 13.25V7H17.0001V12Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
      </g>
    </svg>
  );
}

export default WindowKey;
