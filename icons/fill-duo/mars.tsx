import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Mars({
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
          d="M2 10.5C2 7.46235 4.46283 5 7.5 5C10.5372 5 13 7.46235 13 10.5C13 13.5377 10.5372 16 7.5 16C4.46283 16 2 13.5377 2 10.5Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M11.25 2C10.8358 2 10.5 2.33579 10.5 2.75C10.5 3.16421 10.8358 3.5 11.25 3.5H13.4394L10.8226 6.11674C11.2225 6.42037 11.5796 6.77747 11.8833 7.1774L14.5 4.56068V6.75C14.5 7.16421 14.8358 7.5 15.25 7.5C15.6642 7.5 16 7.16421 16 6.75V2.75C16 2.33579 15.6642 2 15.25 2H11.25Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default Mars;
