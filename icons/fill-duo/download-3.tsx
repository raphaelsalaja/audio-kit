import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Download3({
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
          d="M13.75 6H4.25C2.73122 6 1.5 7.23122 1.5 8.75V13.75C1.5 15.2688 2.73122 16.5 4.25 16.5H13.75C15.2688 16.5 16.5 15.2688 16.5 13.75V8.75C16.5 7.23122 15.2688 6 13.75 6Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M12.5303 9.21973C12.2373 8.92673 11.7627 8.92673 11.4698 9.21973L9.75008 10.9394V1.24988C9.75008 0.835778 9.41418 0.499878 9.00008 0.499878C8.58598 0.499878 8.25008 0.835778 8.25008 1.24988V10.9394L6.53038 9.21973C6.23738 8.92673 5.7628 8.92673 5.4699 9.21973C5.177 9.51273 5.1769 9.98731 5.4699 10.2802L8.4699 13.2802C8.6164 13.4267 8.8078 13.4999 9.0002 13.4999C9.1926 13.4999 9.38397 13.4267 9.53047 13.2802L12.5305 10.2802C12.8235 9.98721 12.8233 9.51263 12.5303 9.21973Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Download3;
