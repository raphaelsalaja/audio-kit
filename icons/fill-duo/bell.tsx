import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Bell({
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
          d="M3.5 6.5C3.5 3.46279 5.96279 1 9 1C12.0372 1 14.5 3.46279 14.5 6.5V10.75C14.5 11.4408 15.0592 12 15.75 12C16.1642 12 16.5 12.3358 16.5 12.75C16.5 13.1642 16.1642 13.5 15.75 13.5H2.25C1.83579 13.5 1.5 13.1642 1.5 12.75C1.5 12.3358 1.83579 12 2.25 12C2.94079 12 3.5 11.4408 3.5 10.75V6.5Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M10.2 15H7.80099C7.64999 15 7.50799 15.068 7.41299 15.185C7.31799 15.302 7.28099 15.456 7.31199 15.603C7.48499 16.425 8.17999 17 9.00099 17C9.82199 17 10.517 16.425 10.69 15.603C10.721 15.456 10.684 15.302 10.589 15.185C10.494 15.068 10.351 15 10.2 15Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Bell;
