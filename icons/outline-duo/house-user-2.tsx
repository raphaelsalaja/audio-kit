import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function HouseUser2({
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
          d="M8.39453 1.9601C8.75253 1.6881 9.24847 1.6881 9.60547 1.9601L14.8555 5.95033C15.1042 6.13935 15.25 6.43442 15.25 6.74623V14.2501C15.2499 15.3551 14.355 16.2501 13.25 16.2501H12.9922C12.8632 14.1574 11.1252 12.5001 9 12.5001C6.87479 12.5001 5.13682 14.1574 5.00781 16.2501H4.75C3.64505 16.2501 2.75007 15.3551 2.75 14.2501V6.74623C2.75 6.43342 2.89581 6.13935 3.14453 5.95033L8.39453 1.9601ZM9 6.25014C7.895 6.25014 7 7.14554 7 8.25014C7.00007 9.35468 7.89505 10.2501 9 10.2501C10.105 10.2501 10.9999 9.35468 11 8.25014C11 7.14554 10.105 6.25014 9 6.25014Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M9 10.25C10.105 10.25 11 9.3546 11 8.25C11 7.1454 10.105 6.25 9 6.25C7.895 6.25 7 7.1454 7 8.25C7 9.3546 7.895 10.25 9 10.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M5.03101 16.25C5.27701 14.277 6.96 12.75 9 12.75C11.04 12.75 12.723 14.277 12.969 16.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M3.145 5.95L8.395 1.96C8.753 1.688 9.248 1.688 9.605 1.96L14.855 5.95C15.104 6.139 15.25 6.434 15.25 6.746V14.25C15.25 15.355 14.355 16.25 13.25 16.25H4.75C3.645 16.25 2.75 15.355 2.75 14.25V6.746C2.75 6.433 2.896 6.139 3.145 5.95Z"
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

export default HouseUser2;
