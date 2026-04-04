import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function MoonCloud({
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
          d="M14.5293 7.87383C14.9295 7.87383 15.3187 7.82713 15.6919 7.7389C15.3153 9.39868 14.1185 10.747 12.5501 11.3351C12.0595 9.83643 10.6622 8.75 9 8.75C8.12601 8.75 7.32552 9.05061 6.69143 9.55344C6.09827 8.72753 5.74899 7.71466 5.74899 6.62022C5.74899 4.24027 7.40062 2.24607 9.62022 1.72131C9.53857 2.08109 9.49547 2.4555 9.49547 2.83999C9.49547 5.6201 11.7492 7.87383 14.5293 7.87383Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M15.172 9C15.381 8.61 15.541 8.189 15.642 7.746C15.281 7.829 14.91 7.881 14.524 7.881C11.755 7.881 9.50999 5.636 9.50999 2.867C9.50999 2.481 9.56299 2.11 9.64499 1.749C7.41599 2.259 5.74899 4.244 5.74899 6.627C5.74899 6.752 5.75399 6.876 5.76299 6.999"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M13.75 11.25C13.337 11.25 12.953 11.36 12.61 11.537C12.183 9.935 10.736 8.75 9 8.75C7.264 8.75 5.818 9.936 5.39 11.537C5.047 11.36 4.663 11.25 4.25 11.25C2.869 11.25 1.75 12.369 1.75 13.75C1.75 15.131 2.869 16.25 4.25 16.25H13.75C15.131 16.25 16.25 15.131 16.25 13.75C16.25 12.369 15.131 11.25 13.75 11.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M11.585 12.499C11.824 12.086 12.179 11.747 12.605 11.527"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default MoonCloud;
