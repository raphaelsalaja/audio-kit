import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function OctagonWarning({
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
          d="M15.695 5.08801L12.912 2.30603C12.393 1.78603 11.702 1.5 10.968 1.5H7.03297C6.29897 1.5 5.60897 1.78603 5.08897 2.30603L2.30698 5.08801C1.78698 5.60701 1.50098 6.29798 1.50098 7.03198V10.967C1.50098 11.701 1.78698 12.392 2.30698 12.911L5.08897 15.693C5.60897 16.213 6.29897 16.499 7.03297 16.499H10.968C11.702 16.499 12.393 16.213 12.912 15.693L15.695 12.911C16.214 12.392 16.5 11.701 16.5 10.967V7.03198C16.5 6.29798 16.214 5.60701 15.695 5.08801Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M9 10.25C8.5859 10.25 8.25 9.9141 8.25 9.5V5.43121C8.25 5.01711 8.5859 4.68121 9 4.68121C9.4141 4.68121 9.75 5.01711 9.75 5.43121V9.5C9.75 9.9141 9.4141 10.25 9 10.25Z"
          fill={fill}
        />
        <path
          d="M9 13.417C8.448 13.417 8 12.968 8 12.417C8 11.866 8.448 11.417 9 11.417C9.552 11.417 10 11.866 10 12.417C10 12.968 9.552 13.417 9 13.417Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default OctagonWarning;
