import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Watch({
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
          d="M5.3087 13C5.2657 13.119 5.2437 13.245 5.2647 13.373L5.6257 15.539C5.7677 16.386 6.4937 17 7.3517 17H10.6488C11.5058 17 12.2328 16.386 12.3758 15.538L12.7358 13.373C12.7568 13.245 12.7358 13.119 12.6918 13H5.3087Z"
          fill={fill}
        />
        <path
          d="M5.3087 5C5.2657 4.881 5.2437 4.755 5.2647 4.627L5.6257 2.461C5.7677 1.614 6.4937 1 7.3517 1H10.6488C11.5058 1 12.2328 1.614 12.3758 2.462L12.7358 4.627C12.7568 4.755 12.7358 4.881 12.6918 5H5.3087Z"
          fill={fill}
        />
        <path
          d="M10.999 11C10.863 11 10.727 10.963 10.603 10.886L8.603 9.636C8.383 9.499 8.25 9.259 8.25 9V7C8.25 6.586 8.586 6.25 9 6.25C9.414 6.25 9.75 6.586 9.75 7V8.584L11.397 9.613C11.749 9.833 11.855 10.296 11.635 10.647C11.493 10.875 11.249 11 10.999 11Z"
          fill={secondaryfill}
        />
        <path
          d="M11.75 14H6.25C4.733 14 3.5 12.767 3.5 11.25V6.75C3.5 5.233 4.733 4 6.25 4H11.75C13.267 4 14.5 5.233 14.5 6.75V11.25C14.5 12.767 13.267 14 11.75 14ZM6.25 5.5C5.561 5.5 5 6.061 5 6.75V11.25C5 11.939 5.561 12.5 6.25 12.5H11.75C12.439 12.5 13 11.939 13 11.25V6.75C13 6.061 12.439 5.5 11.75 5.5H6.25Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Watch;
