import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Eraser({
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
          d="M8 15.25C8 14.8358 8.33579 14.5 8.75 14.5H16C16.4142 14.5 16.75 14.8358 16.75 15.25C16.75 15.6642 16.4142 16 16 16H8.75C8.33579 16 8 15.6642 8 15.25Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M12.4646 12.4646L9.14936 15.7803C9.00871 15.921 8.81793 16 8.61899 16H5.87599C5.67708 16 5.48632 15.921 5.34566 15.7803L1.94366 12.3783C1.06514 11.4998 1.06437 10.0749 1.94369 9.19662L5.57042 5.5704L12.4646 12.4646Z"
          fill={fill}
        />
        <path
          d="M5.57043 5.57041L9.16173 1.97963C10.0403 1.10109 11.4654 1.10038 12.3436 1.97991L16.0554 5.69163C16.9338 6.57011 16.9347 7.99497 16.0554 8.87326L12.4646 12.4646L5.57043 5.57041Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
      </g>
    </svg>
  );
}

export default Eraser;
