import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ShareRight3({
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
          d="M10.243 2.18509C10.021 1.99109 9.707 1.94702 9.439 2.06802C9.171 2.19002 9 2.457 9 2.751V5.77298C1.095 6.24398 1 14.167 1 14.25C1 14.574 1.208 14.8601 1.516 14.9611C1.823 15.0631 2.161 14.954 2.354 14.695C2.453 14.562 4.705 11.595 9 11.277V14.25C9 14.546 9.174 14.8141 9.444 14.9351C9.542 14.9781 9.646 15 9.75 15C9.932 15 10.11 14.934 10.251 14.808L16.751 8.975C16.911 8.831 17.002 8.62601 17 8.41201C16.998 8.19801 16.905 7.99308 16.743 7.85208L10.243 2.18509Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default ShareRight3;
