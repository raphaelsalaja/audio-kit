import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function OctagonInfo({
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
          d="M12.912 2.30603C12.393 1.78603 11.702 1.5 10.968 1.5H7.03297C6.29897 1.5 5.60897 1.78603 5.08897 2.30603L2.30698 5.08801C1.78698 5.60701 1.50098 6.29798 1.50098 7.03198V10.967C1.50098 11.701 1.78698 12.392 2.30698 12.911L5.08897 15.693C5.60897 16.213 6.29897 16.499 7.03297 16.499H10.968C11.702 16.499 12.393 16.213 12.912 15.693L15.695 12.911C16.214 12.392 16.5 11.701 16.5 10.967V7.03198C16.5 6.29798 16.214 5.60701 15.695 5.08801L12.912 2.30603Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M9 13.5C8.5859 13.5 8.25 13.1641 8.25 12.75V9.5H7.75C7.3359 9.5 7 9.1641 7 8.75C7 8.3359 7.3359 8 7.75 8H8.5C9.1895 8 9.75 8.5605 9.75 9.25V12.75C9.75 13.1641 9.4141 13.5 9 13.5Z"
          fill={fill}
        />
        <path
          d="M9 6.75C8.448 6.75 8 6.301 8 5.75C8 5.199 8.448 4.75 9 4.75C9.552 4.75 10 5.199 10 5.75C10 6.301 9.552 6.75 9 6.75Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default OctagonInfo;
