import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function TextHighlight2({
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
          d="M10.6107 1.8713C11.4893 0.993889 12.9134 0.993889 13.792 1.8713L16.3797 4.45974C17.2583 5.33862 17.2583 6.76236 16.3797 7.64123L9.50307 14.5183C8.62446 15.3957 7.20006 15.3961 6.32145 14.5187L3.73415 11.9307C2.85516 11.0524 2.85552 9.62725 3.7337 8.74877L10.6107 1.8713Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M14.5554 2.63494L15.6159 3.69575L10.9723 8.33934C10.6794 8.63223 10.2046 8.63223 9.91167 8.33934C9.61878 8.04645 9.61878 7.57157 9.91167 7.27868L14.5554 2.63494Z"
          fill={fill}
        />
        <path
          d="M3.51424 11.6757L1.09698 14.093C0.776983 14.414 0.681983 14.892 0.855983 15.311C1.02998 15.73 1.43498 16 1.88798 16H4.99998C5.19898 16 5.38998 15.921 5.52998 15.78L6.57377 14.7362C6.4857 14.671 6.40132 14.5985 6.32145 14.5187L3.73415 11.9307C3.65343 11.85 3.58013 11.7648 3.51424 11.6757Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default TextHighlight2;
