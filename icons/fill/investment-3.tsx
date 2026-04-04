import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Investment3({
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
          d="M9.75 13.304V10.75C9.75 10.336 9.414 10 9 10C8.586 10 8.25 10.336 8.25 10.75V16.75C8.25 17.164 8.586 17.5 9 17.5H9.18561H9.75H10.3073C12.6873 17.5 14.6465 15.6099 14.6465 13.2424C14.6465 12.8282 14.3107 12.4924 13.8965 12.4924H12.7749C11.6035 12.4924 10.5341 12.9502 9.75 13.6975V13.304Z"
          fill={secondaryfill}
          fillRule="evenodd"
        />
        <path
          d="M3.75 1C2.50779 1 1.5 2.00779 1.5 3.25V8.75C1.5 9.99221 2.50779 11 3.75 11H14.25C15.4922 11 16.5 9.99221 16.5 8.75V3.25C16.5 2.00779 15.4922 1 14.25 1H3.75ZM11 6C11 7.105 10.105 8 9 8C7.895 8 7 7.105 7 6C7 4.895 7.895 4 9 4C10.105 4 11 4.895 11 6ZM13.5 5C12.948 5 12.5 5.448 12.5 6C12.5 6.552 12.948 7 13.5 7C14.052 7 14.5 6.552 14.5 6C14.5 5.448 14.052 5 13.5 5ZM5.5 6C5.5 6.552 5.052 7 4.5 7C3.948 7 3.5 6.552 3.5 6C3.5 5.448 3.948 5 4.5 5C5.052 5 5.5 5.448 5.5 6Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default Investment3;
