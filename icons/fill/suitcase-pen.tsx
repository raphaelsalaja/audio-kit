import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SuitcasePen({
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
          d="M11.75 5.5C11.336 5.5 11 5.164 11 4.75V2.25C11 2.112 10.888 2 10.75 2H7.25C7.112 2 7 2.112 7 2.25V4.75C7 5.164 6.664 5.5 6.25 5.5C5.836 5.5 5.5 5.164 5.5 4.75V2.25C5.5 1.285 6.285 0.5 7.25 0.5H10.75C11.715 0.5 12.5 1.285 12.5 2.25V4.75C12.5 5.164 12.164 5.5 11.75 5.5Z"
          fill={fill}
        />
        <path
          d="M17.3692 10.7325L17.2015 10.5648L17.0338 10.3971C16.3736 9.73548 15.2208 9.73598 14.5587 10.3966L11.3975 13.5577C11.3169 13.6383 11.2559 13.7359 11.2188 13.8433L10.2979 16.5142C10.2041 16.7857 10.2735 17.0865 10.4766 17.2891C10.6197 17.4322 10.8111 17.5088 11.0069 17.5088C11.0889 17.5088 11.1715 17.4956 11.2515 17.4678L13.9224 16.5469C14.0298 16.5098 14.1275 16.4488 14.208 16.3682L17.3691 13.2071C17.6997 12.8765 17.8818 12.4371 17.8818 11.9698C17.8818 11.502 17.6998 11.0626 17.3692 10.7325Z"
          fill={secondaryfill}
        />
        <path
          d="M8.88852 16L9.801 13.3535C9.91232 13.0313 10.0954 12.7384 10.3369 12.497L13.4992 9.33471C14.4267 8.40931 15.8284 8.17046 16.999 8.62407V6.75C16.999 5.233 15.766 4 14.249 4H3.75C2.233 4 1 5.233 1 6.75V13.25C1 14.767 2.233 16 3.75 16H8.88852Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default SuitcasePen;
