import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function FilmPlay({
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
          d="M1 5H17V13H1V5Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M11.3075 8.33809L8.34062 6.60665C7.82968 6.30809 7.18884 6.67661 7.18884 7.26875V10.7304C7.18884 11.3212 7.83093 11.6898 8.34062 11.3924L11.3075 9.66102C11.8147 9.36495 11.8147 8.63415 11.3075 8.33809Z"
          fill={fill}
        />
        <path
          d="M1 13H4V16H3.75C2.23119 16 1 14.7688 1 13.25L1 13Z"
          fill={fill}
        />
        <path d="M1 5H4V2H3.75C2.23119 2 1 3.23119 1 4.75V5Z" fill={fill} />
        <path
          d="M14 16H14.25C15.7688 16 17 14.7688 17 13.25V13H14V16Z"
          fill={fill}
        />
        <path
          d="M14 2H14.25C15.7688 2 17 3.23119 17 4.75V5H14L14 2Z"
          fill={fill}
        />
        <path d="M8.25 16H5.5V13H8.25V16Z" fill={fill} />
        <path d="M8.25 2H5.5V5H8.25V2Z" fill={fill} />
        <path d="M12.5 13H9.75L9.75 16H12.5V13Z" fill={fill} />
        <path d="M12.5 5H9.75L9.75 2H12.5V5Z" fill={fill} />
      </g>
    </svg>
  );
}

export default FilmPlay;
