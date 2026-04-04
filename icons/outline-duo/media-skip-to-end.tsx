import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function MediaSkipToEnd({
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
          d="M8.49998 4.946C9.94598 5.818 13.1 7.722 14.511 8.574C14.833 8.768 14.829 9.235 14.507 9.43L8.50498 13.053C8.17298 13.253 7.75098 13.013 7.75098 12.624V5.377C7.75098 4.988 8.16898 4.745 8.50098 4.945L8.49998 4.946Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M1.5 4.946C2.946 5.818 6.1 7.722 7.511 8.574C7.833 8.768 7.829 9.235 7.507 9.43L1.504 13.052C1.172 13.252 0.75 13.012 0.75 12.623V5.377C0.75 4.988 1.168 4.746 1.5 4.946Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M8.49998 4.946C9.94598 5.818 13.1 7.722 14.511 8.574C14.833 8.768 14.829 9.235 14.507 9.43L8.50498 13.053C8.17298 13.253 7.75098 13.013 7.75098 12.624V5.377C7.75098 4.988 8.16898 4.745 8.50098 4.945L8.49998 4.946Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M17.25 13.75V4.25"
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

export default MediaSkipToEnd;
