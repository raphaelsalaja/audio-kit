import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ImageMountain2({
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
          d="M11.3089 6.02665C12.269 5.31599 13.6532 5.759 14.0162 6.90809L16.1682 13.7232C16.5234 14.8501 15.6822 16 14.499 16H3.738C2.07955 16 1.35078 13.9075 2.65145 12.878L11.3089 6.02665Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M5 6.5C6.10457 6.5 7 5.60457 7 4.5C7 3.39543 6.10457 2.5 5 2.5C3.89543 2.5 3 3.39543 3 4.5C3 5.60457 3.89543 6.5 5 6.5Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default ImageMountain2;
