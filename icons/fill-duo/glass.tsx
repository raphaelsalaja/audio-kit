import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Glass({
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
          d="M3.5 2C3.28811 2 3.0861 2.08964 2.94391 2.24675C2.80173 2.40386 2.73264 2.61379 2.75373 2.82463L3.82371 13.5235C3.96404 14.9288 5.14661 16 6.56 16H11.44C12.8522 16 14.0359 14.9292 14.1763 13.5236L15.2463 2.82463C15.2674 2.61379 15.1983 2.40386 15.0561 2.24675C14.9139 2.08964 14.7119 2 14.5 2H3.5Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M13.2212 8H4.77879L5.31628 13.3744C5.38002 14.013 5.91745 14.5 6.56 14.5H11.44C12.0818 14.5 12.62 14.0129 12.6837 13.3745L13.2212 8Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Glass;
