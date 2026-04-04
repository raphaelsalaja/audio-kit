import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Globe({
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
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      <g fill="none">
        <path
          d="M21.8675 9.84608L20.6607 6.90692L19.513 5.19378L17.9381 3.82286L16.8695 3.24652L15.6152 2.8908C26.0632 9.7998 13.7191 25.2235 4.91517 19.0982L7.2585 21.0075L10.686 22.0975L13.6164 21.9053L16.5019 21.0853L18.7897 19.4396L20.5788 17.2703L21.4346 15.3132L21.8675 13.3379L22.079 11.6012L21.8675 9.84608Z"
          fill={secondaryfill}
          fillOpacity=".3"
        />
        <path d="M12 22L12 2" stroke={fill} />
        <path
          d="M5.99999 3.9994C7.99999 3.49928 9.87868 3.87868 12 6C15.0553 7.20843 20.4854 13.8856 17.5753 20.3348"
          stroke={fill}
        />
        <path
          d="M17.999 3.9994C15.999 3.49928 14.1203 3.87868 11.999 6C8.94271 7.20882 3.51004 13.8899 6.42653 20.3411"
          stroke={fill}
        />
        <path
          d="M22 11.9999L21.799 11.3149C20.919 7.77536 17.2149 5.56753 12 5.99999C6.78508 5.56753 3.08102 7.77536 2.20097 11.3149L2 11.9999"
          stroke={fill}
        />
        <path
          d="M21.8596 10.3402C21.8596 14.5545 17.523 18 12.0001 18C6.47727 18 2.13818 14.5332 2.13818 10.3188"
          stroke={fill}
        />
        <circle cx="12" cy="12" r="10" stroke={fill} />
      </g>
    </svg>
  );
}

export default Globe;
