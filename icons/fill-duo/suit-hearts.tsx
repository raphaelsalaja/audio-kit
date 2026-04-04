import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SuitHearts({
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
          d="M11.722 2.073C10.686 2.275 9.723 2.881 9 3.757C8.277 2.881 7.314 2.276 6.278 2.073C5.154 1.854 4.082 2.125 3.263 2.836C1.683 4.209 1.536 6.203 2.88 8.04C3.108 8.351 3.494 8.809 3.963 9.361C5.462 11.128 8.251 14.418 8.251 16.25C8.251 16.664 8.587 17 9.001 17C9.415 17 9.751 16.664 9.751 16.25C9.751 14.417 12.54 11.128 14.039 9.361C14.508 8.808 14.894 8.351 15.122 8.04C16.465 6.204 16.318 4.209 14.738 2.836C13.919 2.125 12.847 1.854 11.722 2.073Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
      </g>
    </svg>
  );
}

export default SuitHearts;
