import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Brush({
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
          d="M15 9V1.75C15 1.336 14.664 1 14.25 1H12.5C11.948 1 11.5 1.448 11.5 2V4.5C11.5 4.914 11.164 5.25 10.75 5.25C10.336 5.25 10 4.914 10 4.5V2C10 1.448 9.552 1 9 1H5.75C4.231 1 3 2.231 3 3.75V9H15Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M3 8H15V9.49899C15 10.8699 13.9906 12.0302 12.6354 12.2219L10.474 12.5134L10.6707 15.4565C10.7383 16.4262 9.96982 17.2501 8.99772 17.2501C8.02101 17.2501 7.25094 16.4188 7.32554 15.4449L7.54105 12.5134L5.36508 12.222C4.0097 12.0305 3 10.8701 3 9.49899V8Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default Brush;
