import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ShieldUser({
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
          d="M14.555 3.525L9.305 1.845C9.106 1.782 8.893 1.783 8.695 1.846L3.445 3.526C3.031 3.658 2.75 4.043 2.75 4.478V10.997C2.75 12.4836 3.87754 13.6544 5.17478 14.5095C5.68896 12.8868 7.20714 11.7108 8.99999 11.7108C10.7928 11.7108 12.311 12.8868 12.8252 14.5095C14.1224 13.6544 15.25 12.4836 15.25 10.997V4.477C15.25 4.043 14.969 3.658 14.555 3.525ZM9 9.25001C10.1046 9.25001 11 8.35458 11 7.25001C11 6.14545 10.1046 5.25001 9 5.25001C7.89543 5.25001 7 6.14545 7 7.25001C7 8.35458 7.89543 9.25001 9 9.25001Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M9 9.25C10.1046 9.25 11 8.35457 11 7.25C11 6.14543 10.1046 5.25 9 5.25C7.89543 5.25 7 6.14543 7 7.25C7 8.35457 7.89543 9.25 9 9.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M5.19199 14.522C5.70999 12.914 7.21899 11.75 8.99999 11.75C10.781 11.75 12.289 12.913 12.808 14.522"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9.305 1.84499L14.555 3.52499C14.969 3.65799 15.25 4.04299 15.25 4.47699V10.997C15.25 14.027 10.566 15.745 9.308 16.152C9.105 16.218 8.895 16.218 8.692 16.152C7.434 15.745 2.75 14.027 2.75 10.997V4.47799C2.75 4.04299 3.031 3.65799 3.445 3.52599L8.695 1.84599C8.893 1.78299 9.106 1.78199 9.305 1.84499Z"
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

export default ShieldUser;
