import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function FolderContent({
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
          d="M1.50021 6.2475C1.50025 5.27857 2.28617 4.5 3.25021 4.5H6.35379C7.04278 4.5 7.66768 4.90428 7.9501 5.53282L8.60925 7H13.75C15.2688 7 16.5 8.23119 16.5 9.75V13.25C16.5 14.7688 15.2688 16 13.75 16H4.25C2.73119 16 1.5 14.7688 1.5 13.2499L1.50021 6.2475Z"
          fill={fill}
        />
        <path
          d="M3.75 1.5C3.33579 1.5 3 1.83579 3 2.25V3.0095C3.08261 3.0032 3.16605 3 3.25021 3H6.35379C7.63336 3 8.79386 3.75082 9.31833 4.91803L9.57978 5.5H13.75C14.185 5.5 14.6048 5.56536 15 5.6868L15 4.75L14.9772 2.24316C14.9734 1.83163 14.6387 1.5 14.2272 1.5H3.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
      </g>
    </svg>
  );
}

export default FolderContent;
