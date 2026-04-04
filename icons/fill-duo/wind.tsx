import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Wind({
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
          d="M13.25 13.75C12.044 13.75 10.989 12.978 10.627 11.827C10.502 11.432 10.721 11.011 11.116 10.886C11.512 10.762 11.932 10.981 12.056 11.376C12.221 11.898 12.701 12.25 13.249 12.25C13.938 12.25 14.499 11.689 14.499 11C14.499 10.311 13.938 9.75 13.249 9.75H2.75C2.336 9.75 2 9.414 2 9C2 8.586 2.336 8.25 2.75 8.25H13.25C14.767 8.25 16 9.483 16 11C16 12.517 14.767 13.75 13.25 13.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M7 17C5.794 17 4.739 16.228 4.377 15.077C4.252 14.682 4.471 14.261 4.866 14.136C5.264 14.011 5.682 14.231 5.806 14.626C5.971 15.148 6.451 15.5 6.999 15.5C7.688 15.5 8.249 14.939 8.249 14.25C8.249 13.561 7.688 13 6.999 13H2.75C2.336 13 2 12.664 2 12.25C2 11.836 2.336 11.5 2.75 11.5H7C8.517 11.5 9.75 12.733 9.75 14.25C9.75 15.767 8.517 17 7 17Z"
          fill={fill}
        />
        <path
          d="M10.75 6.5H2.75C2.336 6.5 2 6.164 2 5.75C2 5.336 2.336 5 2.75 5H10.75C11.439 5 12 4.439 12 3.75C12 3.061 11.439 2.5 10.75 2.5C10.201 2.5 9.722 2.852 9.557 3.374C9.433 3.769 9.016 3.988 8.617 3.864C8.221 3.739 8.003 3.318 8.128 2.923C8.49 1.773 9.545 1 10.751 1C12.268 1 13.501 2.233 13.501 3.75C13.501 5.267 12.268 6.5 10.751 6.5H10.75Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Wind;
