import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function EggDecorated({
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
          d="M4.25879 3.9842C5.39424 2.19767 7.05217 1 9.00001 1C10.9354 1 12.5928 2.19889 13.7305 3.98328C14.8715 5.77271 15.55 8.22557 15.55 10.977C15.55 14.8122 12.1229 17 9.00001 17C5.87724 17 2.45001 14.8133 2.45001 10.977C2.45001 8.22713 3.12108 5.77428 4.25879 3.9842Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M15.55 10.9668C15.55 14.802 12.1229 17 9.00001 17C5.87724 17 2.45001 14.8133 2.45001 10.977C2.45001 10.9618 2.45003 10.9466 2.45007 10.9314L5.57066 8.72924C5.82303 8.55025 6.15942 8.54461 6.41766 8.71504L9.00047 10.4196L11.5885 8.7147C11.8472 8.54426 12.1841 8.55044 12.4364 8.73024L15.55 10.9668Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default EggDecorated;
