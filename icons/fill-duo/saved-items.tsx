import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SavedItems({
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
          d="M13.25 16H4.75C3.2334 16 2 14.7666 2 13.25V4.75C2 3.2334 3.2334 2 4.75 2H13.25C14.7666 2 16 3.2334 16 4.75V13.25C16 14.7666 14.7666 16 13.25 16Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M11.75 11C11.5942 11 11.4395 10.9517 11.3091 10.8564L9 9.1772L6.6909 10.8564C6.4638 11.0229 6.1616 11.0468 5.9097 10.9184C5.6582 10.7905 5.5 10.5322 5.5 10.2499V3.24989C5.5 2.28509 6.2852 1.49989 7.25 1.49989H10.75C11.7148 1.49989 12.5 2.28509 12.5 3.24989V10.2499C12.5 10.5321 12.3418 10.7904 12.0903 10.9184C11.9829 10.9731 11.8662 11 11.75 11Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default SavedItems;
