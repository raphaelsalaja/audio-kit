import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Watch2Heart({
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
          d="M2.5 5.25C2.5 3.73119 3.73119 2.5 5.25 2.5H12.75C14.2688 2.5 15.5 3.73119 15.5 5.25V12.75C15.5 14.2688 14.2688 15.5 12.75 15.5H5.25C3.73119 15.5 2.5 14.2688 2.5 12.75V5.25Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M6.39037 1C5.81687 1 5.31693 1.39025 5.1777 1.94664L5.03735 2.5081C5.10752 2.50273 5.17843 2.5 5.24998 2.5H12.75C12.8215 2.5 12.8924 2.50273 12.9626 2.5081L12.8223 1.94681C12.6832 1.39008 12.183 1 11.6096 1H6.39037Z"
          fill={fill}
        />
        <path
          d="M5.03735 15.4919L5.17763 16.053C5.31675 16.6097 5.81697 17 6.39037 17H11.6096C12.1831 17 12.683 16.6097 12.8222 16.0533L12.9626 15.4919C12.8924 15.4972 12.8215 15.5 12.75 15.5H5.24998C5.17843 15.5 5.10752 15.4972 5.03735 15.4919Z"
          fill={fill}
        />
        <path
          d="M8.798 11.949C8.925 12.017 9.074 12.017 9.201 11.949C9.874 11.591 11.999 10.294 11.999 8.186C12.002 7.26 11.269 6.506 10.359 6.5C9.812 6.507 9.303 6.788 8.999 7.252C8.695 6.789 8.186 6.508 7.639 6.5C6.729 6.506 5.996 7.26 5.999 8.186C5.999 10.295 8.125 11.592 8.798 11.949Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Watch2Heart;
